import AuthLogo from "@/components/logos/AuthLogo";
import { LoginForm } from "@/components/supabase-components/login-form";

export default function Page() {
    /*  */
    return (
        <div className="grow flex flex-col w-full items-center justify-center">
            <div className="w-full max-w-sm flex flex-col gap-4">
                <AuthLogo />
                <LoginForm />
            </div>
        </div>
    );
}
