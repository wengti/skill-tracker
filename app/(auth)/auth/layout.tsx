import Footer from "@/components/footers/Footer";
import AuthHeader from "@/components/headers/AuthHeader";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <AuthHeader />
            <main className='flex flex-col'>
                {children}
            </main>
            <Footer />
        </>
    )
}