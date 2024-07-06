import Image from 'next/image'
import React, { useState } from 'react'
import chat from '@/images/chat.svg'

const CTA = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')

    const lists = [
        {
            name: 'Name',
            placeholder: 'i.e. Johne Doe',
            type: 'text',
            value: name,
            setValue: setName
        },
        {
            name: 'Email',
            placeholder: 'i.e. john@mail.com',
            type: 'email',
            value: email,
            setValue: setEmail
        },
        {
            name: 'Phone',
            placeholder: 'i.e. 123-456-7890',
            type: 'tel',
            value: phone,
            setValue: setPhone
        },
        {
            name: 'Which service do you need?',
            placeholder: 'Select a service',
            type: 'text',
            value: service,
            setValue: setService
        },
    ]

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
            <div className='p-6 max-w-[350px] w-full bg-zinc-800 rounded-xl flex flex-col gap-4'>
                {
                    lists.map((list, index) => (
                        <div className='flex flex-col gap-4'>
                            <span className='text-white'>{list.name}</span>
                            <input
                                value={list.value}
                                type={list.type}
                                placeholder={list.placeholder}
                                className='h-[50px] px-[18px] py-3 rounded-lg'
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (list.type === 'tel') {
                                        const x = /^(\d{0,3})$/g
                                        if (x.test(value)) {
                                            console.log('true')
                                            list.setValue(value)
                                        }
                                    } else {
                                        list.setValue(value)
                                    }
                                }}
                            />
                        </div>
                    ))
                }
                <div className='h-[59px] cursor-pointer transition-all duration-100 ease-linear hover:bg-[#2e2b59] bg-[#473BF0] flex justify-center items-center text-white font-bold rounded-lg mt-[20px]'>
                    Get Free Consultancy
                </div>
            </div>
        </div>
    )
}

export default CTA