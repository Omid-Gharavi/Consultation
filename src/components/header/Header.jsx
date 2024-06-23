import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.svg'
import Link from 'next/link'

const Header = () => {
    const lists = [
        {
            text: 'Demos',
            href: '#'
        },
        {
            text: 'Pages',
            href: '#'
        },
        {
            text: 'Support',
            href: '#'
        },
        {
            text: 'Contact',
            href: '#'
        },
    ]

    return (
        <div className='pt-4 px-12 max-lg:px-4 max-lg:pt-6'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div>
                        <Image src={logo} />
                    </div>
                    <ul className='max-lg:hidden flex gap-8 font-bold text-white'>
                        {
                            lists.map((list, index) => (
                                <Lists text={list.text} href={list.href} key={index + 1} />
                            ))
                        }
                    </ul>
                </div>
                <div className='max-lg:hidden bg-[#473BF0] flex justify-center items-center w-[151px] h-[50px] rounded-lg text-white'>
                    Get started now
                </div>
                <div className='w-8 hidden flex-col gap-1 max-lg:flex'>
                    <div className='bg-white h-1 rounded-md'></div>
                    <div className='bg-white h-1 rounded-md'></div>
                    <div className='bg-white h-1 rounded-md'></div>
                </div>
            </div>
        </div>
    )
}

const Lists = ({ text, href = '#' }) => {
    return (
        <li>
            <Link className='transition-all duration-100 ease-linear hover:text-[#473BF0]' href={href}>{text}</Link>
        </li>
    )
}

export default Header