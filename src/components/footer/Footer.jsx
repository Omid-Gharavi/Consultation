import React from 'react'

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
            items: ['support@brainwave.io', '+133-394-3439-1435']
        },
    ]

    return (
        <div className='border-[1px] border-solid border-zinc-200 flex justify-center items-center'>
            <div className='mt-[121px] flex flex-wrap max-xl:flex-col max-xl:px-10 justify-center gap-28'>
                {
                    lists.map((list, index) => (
                        <div key={index + 1}>
                            <p className='text-zinc-500'>{list.title}</p>
                            <ul className='flex flex-col gap-3 mt-5'>
                                {list.items.map((item, index) => (
                                    <li key={index + 1}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer