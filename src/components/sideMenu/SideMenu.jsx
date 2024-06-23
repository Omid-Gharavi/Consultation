import Image from 'next/image'
import React from 'react'
import logo from '@/images/logo.svg'

const SideMenu = () => {
    return (
        <div>
            <Image src={logo} />
        </div>
    )
}

export default SideMenu