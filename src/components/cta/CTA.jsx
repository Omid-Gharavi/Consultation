import Image from 'next/image'
import React from 'react'
import rectangle from '@/images/rectangle.svg'

const CTA = () => {
    return (
        <div className='relative'>
            <div className='absolute'>
                <Image src={rectangle} alt='bg' />
            </div>
        </div>
    )
}

export default CTA