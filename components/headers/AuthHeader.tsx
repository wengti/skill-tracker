import Image from "next/image";
import ThemeSwitch from "../theme-button/ThemeSwitch";
import Link from "next/link";

export default function AuthHeader() {

    return (
        <header className='h-(--header-y) flex justify-between items-center pr-4 bg-card-white dark:bg-card-black p-(--content-space-x)'>
            <Link href='/'>
                <Image
                    src='/icons/skilltrack-icon-64.png'
                    height='64'
                    width='64'
                    alt='The logo of skill tracker, featuring a white arrow pointing diagonally to the top right corner within a green square.'
                    className='w-8'
                />
            </Link>
            <ThemeSwitch />
        </header>
    )
}       