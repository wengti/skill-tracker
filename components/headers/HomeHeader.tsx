import Image from "next/image";
import ThemeSwitch from "../theme-button/ThemeSwitch";
import Link from "next/link";

export default function HomeHeader() {
    return (
        <header className='h-(--header-y) flex justify-between items-center pr-4 bg-card-white dark:bg-card-black p-(--content-space-x)'>
            <Link href='/'>
                <Image
                    src='/icons/skilltrack-logo.png'
                    height={730}
                    width={240}
                    alt='The logo of skill tracker, featuring a white arrow pointing diagonally to the top right corner within a green square.'
                    className=''
                />
            </Link>
            <ThemeSwitch />
        </header>
    )
}