import Image from 'next/image'
import React from 'react'
import chat from '@/images/chat.svg'

const CTA = () => {
    return (
        <div className='ctaBody'>
            <div className=''>
                <div className='w-[87px] h-[87px] rounded-full bg-[#979797] flex justify-center items-center'>
                    <Image src={chat} alt='chat' />
                </div>
                <p className='max-w-[429px] mt-[46px] text-4xl max-lg:text-2xl'>Get a free consultancy from our expert right now!</p>
                <p className='max-w-[412px] mt-[18px] text-[19px] max-lg:text-base'>
                    With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
                </p>
            </div>
            <div className='max-w-[350px] w-full h-[499px] bg-zinc-800 rounded-xl'>

            </div>
        </div>
    )
}

export default CTA