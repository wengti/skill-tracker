import { LogoutButton } from "@/components/supabase-components/logout-button";
import ThemeSwitch from "@/components/theme-button/ThemeSwitch";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <h1>Temp Placeholder for Home Page</h1>
            <LogoutButton />
            <ThemeSwitch />
        </main>
    );
}
