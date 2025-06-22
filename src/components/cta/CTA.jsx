import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import chat from '@/images/chat.svg'
import tail from '@/images/tail.svg'

const CTA = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [toggle, setToggle] = useState(false)
    const [select, setSelect] = useState('')
    const inputRef = useRef()

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

    const services = ['food', 'water', 'toilet']

    const filteredOptions = useMemo(() => {
        return services.filter(s => s.toLowerCase().startsWith(service))
    }, [services, service])

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setToggle(false)
            }
        };
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleDivClick = (event) => {
        event.stopPropagation();
    };

    return (
        <>
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
                            <div key={index + 1} className='flex flex-col gap-4'>
                                <span className='text-white'>{list.name}</span>
                                <div className='relative w-[300px] max-w-full'>
                                    <input
                                        ref={inputRef}
                                        value={list.value}
                                        type={list.type}
                                        placeholder={list.placeholder}
                                        className={`h-[50px] w-full py-3 rounded-lg ${list.placeholder === 'Select a service' ? 'pl-[18px] pr-11' : 'px-[18px]'}`}
                                        onClick={() => {
                                            if (list.placeholder = 'Select a service') {
                                                setToggle(true)
                                            }
                                        }}
                                        onChange={(e) => {
                                            const value = e.target.value
                                            if (list.type === 'tel') {
                                                const x = /^(\d{0,3})\-?(\d{0,3})\-?(\d{0,4})$/gm;
                                                if (x.test(value)) {
                                                    console.log('true')
                                                    list.setValue(value)
                                                } else {
                                                    return
                                                }
                                            } else if (list.placeholder === 'Select a service') {
                                                setService(value)
                                            } else {
                                                list.setValue(value)
                                            }
                                        }}
                                    />
                                    <span className={`${list.placeholder === 'Select a service' ? 'block' : 'hidden'} ${toggle ? 'rotate-180' : 'rotate-0'} arrowDown`}></span>
                                    <div
                                        className={`${list.placeholder === 'Select a service' ? toggle ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4' : 'hidden'} bg-white shadow-xl w-full
                                    absolute top-[110%] left-0 rounded-lg transition-all duration-150 ease-in-out flex flex-col gap-3 px-2 py-2`}>
                                        {
                                            filteredOptions.length > 0 ?
                                                filteredOptions.map((service, index) => (
                                                    <div
                                                        onClick={(e) => {
                                                            handleDivClick(e)
                                                            inputRef.current.focus()
                                                            if (select === service) {
                                                                setSelect('')
                                                            } else {
                                                                setSelect(service)
                                                            }
                                                        }}
                                                        className={`services ${select === service ? 'bg-zinc-300' : 'bg-transparent'}`}
                                                        key={index}>{service}</div>
                                                ))
                                                : <div>Sorry! there is no such a service.</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className='h-[59px] cursor-pointer transition-all duration-100 ease-linear hover:bg-[#2e2b59] bg-[#473BF0] flex justify-center items-center text-white font-bold rounded-lg mt-[20px]'>
                        Get Free Consultancy
                    </div>
                </div>
            </div>
            <div className='my-[77px] max-lg:px-4 flex flex-wrap items-center justify-center gap-6 w-full'>
                <p className='text-2xl max-lg:text-center max-w-[407px]'>
                    Subscribe to our newsletter to get latest news on your inbox.
                </p>
                <div className='flex gap-5'>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='h-[50px] max-w-[290px] w-full border-solid border-[1px] py-3 px-[18px] rounded-lg'
                    />
                    <div className='h-[50px] w-[256px] flex justify-center items-center gap-11 max-lg:gap-4 rounded-lg bg-[#473BF0] text-white'>
                        <p>Subscribe</p>
                        <Image src={tail} alt='tail' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default CTA