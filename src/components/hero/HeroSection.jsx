import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tail from '@/images/tail.svg'

const HeroSection = () => {
    return (
        <div className='pt-[117px] px-[244px] max-lg:px-6 max-lg:text-center'>
            <div className='max-w-[589px] flex flex-col max-lg:items-center'>
                <p className='text-5xl max-lg:text-3xl text-white font-bold leading-snug'>Get help from the<br className='max-lg:hidden' /> expert consultants.</p>
                <p className='text-[19px] max-lg:text-base pt-7 text-zinc-400 leading-relaxed'>
                    With lots of unique blocks, you can easily build a page<br className='max-lg:hidden' /> without coding. Build your next consultancy<br className='max-lg:hidden' /> website within few minutes.
                </p>
                <a
                    href='#'
                    className='w-[218px] h-[59px] mt-9 px-5 rounded-md bg-[#473BF0] text-white transition-all duration-100 ease-linear hover:bg-[#2e2b59] flex justify-between items-center'
                >
                    <p>Get started now</p>
                    <Image src={tail} alt='arrow' />
                </a>
            </div>
        </div>
    )
}

export default HeroSection