/* ------------- */
/* Table - users */
/* ------------- */

/* Sync authentication table with user table */
create or replace function public.handle_new_users()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.users(id, name, email, picture)
  values (new.id, new.raw_user_meta_data ->> 'name', new.email, new.raw_user_meta_data ->> 'picture');
  return new;
end;
$$;


create or replace trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_users();

/* ----  Policy  ---- */
/* Read */
alter policy "Only authenticated user can read their own data"
on "public"."users"
to authenticated
using (auth.uid = id)


/* ------------- */
/* Table - skills */
/* ------------- */

/* ----  Policy  ---- */
/* Read */
alter policy "Only authenticated can read their own entry"
on "public"."skills"
to authenticated
using (auth.uid() = user_id)

/* Insert */
alter policy "only authenticated user can add for themselves"
on "public"."skills"
to authenticated
with check (auth.uid() = user_id)

/* Constraint */
-- ALTER TABLE public.skills
--   DROP CONSTRAINT skill_max_length,
--   DROP CONSTRAINT weekly_target_range,
--   DROP CONSTRAINT user_skill_unique

ALTER TABLE public.skills
ADD CONSTRAINT skill_max_length CHECK (char_length(skill) <= 20),
ADD CONSTRAINT weekly_target_range CHECK (weekly_target > 0 AND weekly_target <= 10080),
ADD CONSTRAINT user_skill_unique UNIQUE (user_id, skill);

