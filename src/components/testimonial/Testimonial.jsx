import React from 'react'
import amazon from '@/images/amazon.svg'
import google from '@/images/google.svg'
import Image from 'next/image'
import one from '@/images/person/1.svg'
import two from '@/images/person/2.svg'
import three from '@/images/person/3.svg'

const Testimonial = () => {
    const lists = [
        {
            img: amazon,
            text: '“You made it so simple. My new site is so much faster & easier to work with Albino.”',
            name: 'Ilya Vasin',
            profile: one,
        },
        {
            img: google,
            text: '“Must have book for students, who want to be a great Product Designer.”',
            name: 'Mariano Rasgado',
            profile: two,
        },
        {
            img: amazon,
            text: '“You made it so simple. My new site is so much faster & easier to work with Albino.”',
            name: 'Oka Tomoaki',
            profile: three,
        },
    ]

    return (
        <div className='flex flex-wrap justify-center mt-[100px] mb-[109px] gap-[60px] max-lg:gap-32'>
            {
                lists.map((list, index) => (
                    <div className='flex flex-col items-center gap-[50px]'>
                        <div>
                            <Image src={list.img} alt='logo' />
                        </div>
                        <p className='max-w-[324px] text-2xl text-center max-lg:text-xl'>{list.text}</p>
                        <div className='flex items-center gap-5'>
                            <div>
                                <Image src={list.profile} alt='profile' />
                            </div>
                            <div>
                                <p className='font-bold'>{list.name}</p>
                                <p>Software Engine</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonial