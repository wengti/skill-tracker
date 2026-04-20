import { LogoutButton } from "@/components/supabase-components/logout-button";
import ThemeSwitch from "@/components/theme-button/ThemeSwitch";
import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

export default async function Home() {

    const supabase = await createClient()
    const {data, error} = await supabase
        .from('users')
        .select(`id, name, email, picture`)
    if (data === null) return

    return (
        <main className="min-h-screen flex flex-col items-center">
            <h1>Temp Placeholder for Home Page</h1>
            <LogoutButton />
            <ThemeSwitch />
            <Image
                src={data[0].picture}
                width={40}
                height={40}
                alt='Your profile picture'
            />
        </main>
    );
}
