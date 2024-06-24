import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.svg'
import { lists } from '../header/Header'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <div>
            <Image src={logo} />
            <div className='h-[2px] bg-white mt-[14px]'></div>
            <ul className='flex flex-col gap-5 mt-[14px]'>
                {
                    lists.map((list, index) => (
                        <Link
                            className='bg-white flex gap-1 rounded-lg border-solid border-[2px] overflow-hidden'
                            href={list.href}
                            key={index + 1}
                        >
                            <div className='w-4 h-6 bg-[rgb(98,92,173)]'></div>
                            <li>
                                {list.text}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideMenu