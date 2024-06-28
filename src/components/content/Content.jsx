import React from 'react'
import BG from '@/images/BG.svg'
import Image from 'next/image'
import Link from 'next/link'

const Content = () => {
    const lists = [
        {
            num: '1',
            text: 'Easey Booking',
            des: 'With lots of unique blocks, you can easily build a page without coding',
        },
        {
            num: '2',
            text: 'Free Expert Opinion',
            des: 'With lots of unique blocks, you can easily build a page without coding',
        },
        {
            num: '3',
            text: 'Get Your Results',
            des: 'With lots of unique blocks, you can easily build a page without coding',
        },
    ]

    return (
        <>
            <div className='bg-[#f4f7fa] flex flex-col items-center gap-[74px] pt-[92px] pb-[135px] max-lg:px-4'>
                <div className='text-center'>
                    <p className='text-4xl font-bold max-lg:text-3xl'>Why you should choose us?</p>
                    <p className='mt-4 max-w-[589px] text-[#161C2D]'>
                        With lots of unique blocks, you can easily build a page without<br className='max-lg:hidden' /> coding. Build your next landing page.
                    </p>
                </div>
                <div className='flex flex-wrap gap-24 items-center'>
                    <div className='relative'>
                        <div
                            className='flex justify-center items-center absolute bg-white transition-all duration-150 ease-linear hover:bg-slate-200 cursor-pointer w-[92px] h-[92px] max-lg:w-[72px] max-lg:h-[72px] rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <span className='play'></span>
                        </div>
                        <Image src={BG} alt='BG' />
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        {
                            lists.map((list, index) => (
                                <div className='flex gap-[22px]'>
                                    <div className='mt-[6px]'>
                                        <div
                                            className='flex justify-center items-center w-[43px] h-[43px] rounded-full bg-[#e2e4f9] text-[#473BF0] font-bold'>
                                            {list.num}
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-bold text-xl'>{list.text}</p>
                                        <p className='mt-[10px] max-w-[339px] text-[17px] text-[#161C2D]'>{list.des}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='h-[96px] bg-[#473BF0] flex justify-center items-center gap-2'>
                <div className='bg-white rounded-2xl w-[57px] h-[27px] px-3 cursor-pointer'>
                    <span className='text-[#473BF0] text-[13px] font-bold'>NEW</span>
                </div>
                <p className='text-white'>We’ve added a new exciting feature in v3.0. <Link className='underline' href={'#'}>Get it now for $49</Link>.</p>
            </div>
        </>
    )
}

export default Content