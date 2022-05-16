import Image from 'next/image'
import CountUp from 'react-countup'
import React from 'react';
export default function Counter()
{
    const [on,setOn] = React.useState(false);
    const section = React.useRef()
    function scrolling()
    {
        if(typeof window !=='undefined')
        {
            if(window.scrollY > section.current.offsetTop-200)
            setOn(true)
        }
    }

    React.useEffect(()=>
    {
        if(typeof window !=='undefined')
        {
            window.addEventListener("scroll",scrolling)
            return ()=>window.removeEventListener("scroll",scrolling)
        }
    },[scrolling])

    return(
        <div ref={section}>
            <div className="py-[50px]">
            <div className='relative bg-[#ffc107] rounded-md p-8 pb-14 sm:pb-8 '>
                    <div className='absolute bottom-[-7px] px-6 xl:left-8 left-0 lg:block hidden'>
                        <Image src='/images/academy/01.png' width="193px" height="240px"/>
                    </div>
                    <div className='grid text-white gap-y-4 sm:grid-cols-2 lg:grid-cols-5 items-start md:items-center justify-center md:justify-between px-[16px] lg:px-0 min-h-[120px]'>
                                <div className='lg:block hidden'></div>
                                <span className='flex flex-col items-center'>
                                    <span className='text-[40px] md:text-[56px] font-bold'>
                                        {on?<CountUp start={0} end={89}/>:'0'}
                                    </span>
                                    <span className='text-black font-[600]'>Total Instructors</span>
                                </span>
                                <span className='flex flex-col items-center'>
                                    <span className='text-[40px] md:text-[56px] font-bold'>
                                    {on?<CountUp start={0} end={112}/>:'0'}
                                    </span>
                                    <span className='text-black font-[600]'>Total Campuses</span>
                                </span>
                                <span className='flex flex-col items-center'>
                                    <span className='text-[40px] md:text-[56px] font-bold'>
                                    {on?<CountUp start={0} end={180}/>:'0'}K
                                    </span>
                                    <span className='text-black font-[600]'>Students till date</span>
                                </span>
                                <span className='flex flex-col items-center'>
                                    <span className='text-[40px] md:text-[56px] font-bold'>
                                        {on?<CountUp start={0} end={23}/>:'0'}+
                                    </span>
                                    <span className='text-black font-[600]'>Types of Courses</span>
                                </span>
                    </div>
                </div>
            </div>
        </div>
    )
}