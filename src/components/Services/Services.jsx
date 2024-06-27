import React from 'react'
import one from '@/images/Services/1.svg'
import two from '@/images/Services/2.svg'
import three from '@/images/Services/3.svg'
import four from '@/images/Services/4.svg'
import arrow from '@/images/tail.svg'
import Image from 'next/image'

const Services = () => {
    const lists = [
        {
            img: one,
            text: 'Digital Marketing',
        },
        {
            img: two,
            text: 'Content Writitng',
        },
        {
            img: three,
            text: 'Graphic Design',
        },
        {
            img: four,
            text: 'SEO for Business',
        },
    ]

    return (
        <div className='mt-20 mb-[120px] flex flex-col items-center gap-[92px]'>
            <div className='text-center max-w-[589px] px-4'>
                <p className='text-5xl font-bold max-lg:text-3xl'>Services we offer for you</p>
                <p className='mt-6 text-[19px] text-[#161C2D]'>
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-7'>
                {
                    lists.map((list, index) => (
                        <div key={index + 1}>
                            <div className='overflow-hidden rounded-t-xl'>
                                <Image src={list.img} alt='cover'
                                    className='transition-all duration-500 ease-in-out hover:scale-125'
                                />
                            </div>
                            <div
                                className='flex justify-between px-5 py-4 border-x-[1px] border-b-[1px] border-solid border-zinc-200 rounded-b-xl'>
                                <p>{list.text}</p>
                                <Image src={arrow} className='invert' alt='arrow'></Image>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services