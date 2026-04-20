'use client'
import Image from "next/image";
import { motion } from 'motion/react'

export default function AuthLogo() {

    return (
        <motion.div
            initial={{opacity: 0, y: -10}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration: 2}}
        >
            <Image
                priority
                src='/icons/skilltrack-logo.png'
                width='730'
                height='240'
                alt='The logo of the website with a tagline of Track, Progress and Achieve.'
                className='dark:hidden'
            />
            <Image
                priority
                src='/icons/skilltrack-logo-dark.png'
                width='730'
                height='240'
                alt='The logo of the website with a tagline of Track, Progress and Achieve.'
                className='hidden dark:block'
            />
        </motion.div>
    )
}