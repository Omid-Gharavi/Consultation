import Image from 'next/image'
import { useState } from 'react'
import logo from '@/images/logo.svg'
import Link from 'next/link'
import SideMenu from '../sideMenu/SideMenu'

export const lists = [
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

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <>
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
                    <Link
                        href={'#'}
                        className='max-lg:hidden bg-[#473BF0] flex justify-center items-center w-[151px] h-[50px] rounded-lg text-white transition-all duration-100 ease-linear hover:bg-[#2e2b59]'>
                        Get started now
                    </Link>
                    <div className='w-8 hidden flex-col gap-1 max-lg:flex' onClick={() => setToggle(!toggle)}>
                        <div className='bg-white h-1 rounded-md'></div>
                        <div className='bg-white h-1 rounded-md'></div>
                        <div className='bg-white h-1 rounded-md'></div>
                    </div>
                </div>
            </div>
            <div
                className={`sideMenu ${toggle ? 'translate-x-[0]' : 'translate-x-[-14rem]'}`}
            >
                <SideMenu />
            </div>
        </>
    )
}

const Lists = ({ text, href = '#' }) => {
    return (
        <Link href={href} className='relative lists py-2'>
            <li>{text}</li>
            <span className='absolute top-[80%] left-0 w-0 h-[2px] bg-[rgb(98,92,173)]'></span>
        </Link>
    )
}

export default Header