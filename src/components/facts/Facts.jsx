import React from 'react'

const Facts = () => {
    const lists = [
        {
            text: '1M',
            des: 'Customers visit Albino every months',
        },
        {
            text: '93%',
            des: 'Satisfaction rate from our customers.',
        },
        {
            text: '4.9',
            des: 'Average customer ratings out of 5.00!',
        },
    ]

    return (
        <div className='mt-20'>
            <div className='flex flex-wrap justify-center gap-24'>
                {
                    lists.map((list, index) => (
                        <div className='flex items-center gap-[30px]' key={index + 1}>
                            <p className='text-5xl font-bold'>{list.text}</p>
                            <p className='w-[174px] text-zinc-600'>{list.des}</p>
                        </div>
                    ))
                }
            </div>
            <div className='mt-[75px] h-1 bg-[#E7E9ED]'></div>
        </div>
    )
}

export default Facts