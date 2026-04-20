import Footer from "@/components/footers/Footer";
import AuthHeader from "@/components/headers/AuthHeader";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <AuthHeader />
            <main className='flex flex-col min-h-(--content-min-y) px-(--content-space-x) py-(--content-space-y)'>
                {children}
            </main>
            <Footer />
        </>
    )
}