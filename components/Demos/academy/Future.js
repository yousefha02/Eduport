import React from 'react';
import { GoSearch} from 'react-icons/go';
import { BsBookHalf} from 'react-icons/bs';
import { AiFillHome} from 'react-icons/ai';
import Image from 'next/image'
import CountUp from 'react-countup'
export default function Future()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pt-[140px] pb-[50px] flex gap-6 flex-col lg:flex-row items-center justify-between">
                <div className='w-full lg:w-[50%] xl:w-[38%] max-w-full'>
                    <div className='flex lg:justify-start justify-center'><button className='text-blue bg-[#066ac91a] font-bold rounded-md px-4 py-2 text-[14px] mb-4'>Get started with Eduport</button></div>
                    <h2 className='text-black lg:text-left text-center mb-4 font-bold text-[36px] md:text-[50px] lg:text-[60px] leading-[50px] md:leading-[60px] lg:leading-[68px]'>Develop the skillset &amp; your Bright Future</h2>
                    <p className='text-dark text-[14px] lg:text-left text-center lg:w-[450px] max-w-full mb-4'>The most reliable online courses and certifications in marketing, information technology, programming, and data science.</p>
                    <div className='border-[#9a9ea4] border-opacity-50 rounded-md border flex justify-between 
                    px-4 py-2 items-center mb-5 gap-2'>
                        <input placeholder='Find your course' className='focus:outline-0 sm:flex-1'/>
                        <span className='bg-blue text-white flex items-center justify-center px-3 py-3 rounded-md font-bold
                        text-[18px]'><GoSearch/></span>
                    </div>
                    <div className='flex justify-between flex-col sm:flex-row sm:w-[65%] lg:w-[85%] max-w-full gap-3'>
                        <span>
                            <span className='flex items-center gap-4'>
                                <span className='text-[#fd7e14] bg-[#fd7e141a] text-[28px] p-4 rounded-md'><BsBookHalf/></span>
                                <span className='flex flex-col'>
                                    <span className='text-black font-bold text-[26px]'><CountUp start={0} end={400}/>+</span>
                                    <span>Online Courses</span>
                                </span>
                            </span>
                        </span>
                        <span>
                            <span className='flex items-center gap-4'>
                                <span className='text-[#17a2b8] bg-[#17a2b81a] text-[28px] p-4 rounded-md'><AiFillHome/></span>
                                <span className='flex flex-col'>
                                    <span className='text-black font-bold text-[26px]'><CountUp start={0} end={600}/>+</span>
                                    <span className='text-dark text-[14px]'>Universities</span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <div className='relative w-full lg:w-[450px] xl:w-[600px] max-w-full mt-4'>
                    <div className='absolute w-full bg-[#f7c32e] h-[200px] sm:h-[300px] bottom-0 left-0 border-white
                    rounded-xl image border-[6px]'></div>
                    <Image src="/images/academy/06.png" height="435px" width="728px"/>
                </div>
            </div>
        </div>
    )
}