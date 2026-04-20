import { createClient } from "@/lib/supabase/server";
import RecordClientComponent from "./RecordClientComponent";
import { redirect } from "next/navigation";
import getUserInServer from "@/lib/auth/getUserInServer";

export type AllSkillsType = {
    id: string
    skill: string
}

export default async function RecordServerComponent() {
    try {
        const supabase = await createClient()

        const {userId, error: userIdError} = await getUserInServer()
        if(userIdError) throw new Error(userIdError)

        const { data: allSkills, error: allSkillsError } = await supabase
            .from('skills')
            .select(`id, skill`)
            .eq('user_id', userId)
            .order('skill', {ascending: true})

        if (allSkillsError) throw new Error(allSkillsError.message)
        else if (!allSkills) throw new Error('Unable to retrive the skills data in RecordServerComponent.')
        

        return (
            <RecordClientComponent
                allSkills = {allSkills}
            />
        )
    }
    catch (error) {
        if (error instanceof Error) redirect(`/error?error=${error.message}`)
        else redirect(`/error`)
    }

}