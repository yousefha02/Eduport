import Link from 'next/link'
import { MdKeyboardArrowDown} from 'react-icons/md';
import React, { useState } from 'react'

export default function Demos(props)
{
    return(
        <div className='relative w-full xl:border-none border-b border-[#9a9ea4] xl:py-0 py-[6px]'>
            <span className='flex xl:justify-center justify-between items-center cursor-pointer px-6 xl:px-0'
            onClick={()=>props.click('demos')}>
                <span className='text-dark p-[6px] rounded-md text-[15px] font-semibold'>Demos</span>
                <MdKeyboardArrowDown className='font-bold h-[36px] pt-[6px]'/>
            </span>
            {
                props.demos&&
                <div className='px-9 xl:px-0'>
                <ul className='xl:absolute relative w-full xl:w-[240px] demos xl:bg-white smallScreen rounded-lg p-3'>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Home Default</li></Link>
                <Link href={'/education'}><li className='navItem' onClick={()=>props.click('demos')}>Home Education</li></Link>
                <Link href={'/academy'}><li className='navItem' onClick={()=>props.click('demos')}>Home Academy</li></Link>
                <Link href={'/course'}><li className='navItem' onClick={()=>props.click('demos')}>Home Course</li></Link>
                <Link href={'/university'}><li className='navItem' onClick={()=>props.click('demos')}>Home University</li></Link>
                <Link href={'/kindergarten'}><li className='navItem' onClick={()=>props.click('demos')}>Home Kindergarten</li></Link>
                <Link href={'/tutor'}><li className='navItem' onClick={()=>props.click('demos')}>Home Tutor</li></Link>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Home School <span className='new'>New</span></li></Link>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Home Abroad <span className='new'>New</span></li></Link>
                <hr className='bg-[#9a9ea4] mt-3 mb-2 h-[1px] opacity-30'/>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Request a demo</li></Link>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Book a Class</li></Link>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Free Access</li></Link>
                <Link href={'/'}><li className='navItem' onClick={()=>props.click('demos')}>Admission Form</li></Link>
                </ul>
                </div>
            }
        </div>
    )
}