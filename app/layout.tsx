import './globals.css'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

export const metadata: Metadata = {
    title: "Skill Tracker",
    description: "The site that tracks and propels your progression.",
};

const geist = Geist({
    subsets: ['latin']
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className=''> {/* Change this classname to dark to trigger darkmode */}
                <div className={`${geist.className} bg-background-gray`}>
                    {children}
                </div>
            </body>
        </html>
    );
}
