import ThemeContextProvider from '@/context/ThemeContextProvider';
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
            <ThemeContextProvider>
                <div
                    className={`
                        ${geist.className} 
                        text-letter-black dark:text-letter-white
                        bg-background-white dark:bg-background-black
                    `}
                >
                    {children}
                </div>
            </ThemeContextProvider>
        </html>
    );
}
