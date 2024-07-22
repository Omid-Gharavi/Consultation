import React from 'react'
import { ImTwitter } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const lists = [
        {
            title: 'Company',
            items: ['About us', 'Contact us', 'Careers', 'Press']
        },
        {
            title: 'Product',
            items: ['Featuring', 'Pricing', 'News', 'Help desk', 'Support']
        },
        {
            title: 'Services',
            items: ['Digital Marketing', 'Content Writing', 'SEO for Business', 'UI Design']
        },
        {
            title: 'Legal',
            items: ['Privacy', 'Tearms & Conditions', 'Return Policy']
        },
        {
            title: 'Contact us',
            items: ['support@brainwave.io', '+133-394-3439-1435'],
            link: true
        },
    ]

    return (
        <div className='border-[1px] border-solid border-zinc-200 flex flex-col justify-center items-center'>
            <div className='mt-[121px] flex flex-wrap max-md:flex-col max-md:px-10 justify-center gap-28'>
                {
                    lists.map((list, index) => (
                        <div key={index + 1}>
                            <p className='text-zinc-500'>{list.title}</p>
                            <ul className='flex flex-col gap-3 mt-5'>
                                {list.items.map((item, index) => (
                                    <li className={`${list.link ? 'text-indigo-700' : ''} cursor-pointer`} key={index + 1}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className='max-w-[1022px] w-full h-px bg-zinc-200 mt-[108px]'></div>
            <div className='max-md:gap-6 max-w-[1022px] w-full flex flex-wrap justify-between max-md:justify-center max-md:items-center my-8 px-4'>
                <p className='max-md:text-center'>© 2024 Copyright, All Right Reserved, Made by Seju_ui_ux with</p>
                <div className='flex gap-4'>
                    <ImTwitter className='invert-[.65] cursor-pointer' />
                    <ImFacebook2 className='invert-[.65] cursor-pointer' />
                    <FaInstagram className='invert-[.65] cursor-pointer' />
                    <FaLinkedin className='invert-[.65] cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Footer