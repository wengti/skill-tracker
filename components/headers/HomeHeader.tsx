'use client'

import Image from "next/image";
import ThemeSwitch from "../theme-button/ThemeSwitch";
import Link from "next/link";
import { LogoutButton } from "../supabase-components/logout-button";
import { Avatar } from "../tailgrids/core/avatar";
import { UserContext } from "@/context/UserContextClientComponent";
import { useContext } from "react";

export default function HomeHeader() {

    const { name, id, picture } = useContext(UserContext)


    return (
        <header className='h-(--header-y) flex justify-between items-center bg-card-white dark:bg-card-black p-(--content-space-x)'>
            <Link href='/' className='h-full'>
                <Image
                    src='/icons/skilltrack-logo.png'
                    height={730}
                    width={240}
                    alt='The logo of the website with a tagline of Track, Progress and Achieve.'
                    className='dark:hidden w-38'
                />
                <Image
                    src='/icons/skilltrack-logo-dark.png'
                    height={730}
                    width={240}
                    alt='The logo of the website with a tagline of Track, Progress and Achieve.'
                    className='hidden dark:block w-38'
                />
            </Link>
            <div className='flex gap-4'>
                <Avatar
                    key={id}
                    size='xs'
                    src={picture}
                    alt='Your profile picture.'
                    fallback={name[0].toUpperCase()}
                />
                <ThemeSwitch />
                <LogoutButton />
            </div>
        </header>
    )
}