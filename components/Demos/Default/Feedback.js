import React from "react";
import Image from 'next/image'
import {FaQuoteLeft} from 'react-icons/fa';
import {FaQuoteRight} from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa'

function Feedback()
{
    return(
        <div className='feedback py-10'>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative flex xl:flex-row flex-col gap-12 items-center">
                <div className='flex flex-col md:flex-row gap-8 items-center xl:order-1 order-2'>
                    <div className='flex gap-14 flex-col items-end'>
                        <div className='bg-white text-center p-6 rounded-lg shdw'>
                            <Image src={'/images/feedback/01.jpg'} width="82px" height="82px" className=" rounded-full"/>
                            <h4 className=' text-gray text-[15px] mt-2'>
                                <FaQuoteLeft className='text-[13px] mr-2 inline-block'/>
                                Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing 
                                <FaQuoteRight className='text-[13px] ml-2 inline-block'/>
                            </h4>
                            <ul className='text-[orange] flex gap-1 justify-center mb-2 mt-5'>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            <h4 className='text-black font-semibold text-[14px]'>Carolyn Ortiz</h4>
                        </div>
                        <div style={{backgroundImage:`url(images/feedback/02.png)`}}
                        className='bg-no-repeat bg-cover bg-center bg-blue rounded-xl text-center p-4 md:block hidden'>
                            <h3 className='text-white font-bold text-[22px] mb-[2px]'>4.5/5.0</h3>
                            <ul className='text-[orange] flex gap-1 justify-center mb-2'>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            <p className='text-white text-[16px]'>Based on 3265 ratings</p>
                        </div>
                    </div>
                    <div className='flex gap-10 flex-col'>
                        <div className='bg-white rounded-lg shdw w-fit p-6 md:block hidden'>
                            <h4 className='text-black text-center font-bold text-[15px] mb-4'>100+ Verified Mentors</h4>
                            <ul className='flex gap-4 flex-col'>
                                <li className='flex gap-2 items-center'>
                                    <Image src={'/images/feedback/02.jpg'} width="40px" height="40px" className=' rounded-md'/>
                                    <span>
                                        <h4 className='font-semibold text-[14px] text-black'>Lori Stevens</h4>
                                        <h5 className='text-dark text-[14px]'>Tutor of physic</h5>
                                    </span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <Image src={'/images/feedback/04.jpg'} width="40px" height="40px" className='rounded-md'/>
                                    <span>
                                        <h4 className='font-semibold text-[14px] text-black'>Billy Vasquez</h4>
                                        <h5 className='text-dark text-[14px]'>Tutor of chemistry</h5>
                                    </span>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <Image src={'/images/feedback/09.jpg'} width="40px" height="40px" className='rounded-md'/>
                                    <span>
                                        <h4 className='font-semibold text-[14px] text-black'>Larry Lawson</h4>
                                        <h5 className='text-dark text-[14px]'>Tutor of technology</h5>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='bg-white text-center p-6 rounded-lg shdw'>
                            <Image src={'/images/feedback/03.jpg'} width="82px" height="82px" className="rounded-full"/>
                            <h4 className=' text-gray text-[15px] mt-2'>
                                <FaQuoteLeft className='text-[13px] mr-2 inline-block'/>
                                    At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.								
                                <FaQuoteRight className='text-[13px] ml-2 inline-block'/>
                            </h4>
                            <ul className='text-[orange] flex gap-1 justify-center mb-2 mt-5'>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStar/></li>
                            <li><FaStarHalfAlt/></li>
                            </ul>
                            <h4 className='text-black font-semibold text-[14px]'>Dennis Barrett</h4>
                        </div>
                    </div>
                </div>
                <div className='w-[1350px] max-w-full xl:order-2 order-1 xl:text-left text-center'>
                    <h2 className='md:text-[38px] leading-10 text-[32px] xl:text-[44px] mb-3 text-black font-bold md:leading-[54px]'>Some valuable feedback from our students</h2>
                    <p className='mb-4 text-[15px] text-dark'>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
                    <button className='bg-blue duration-300 hover:opacity-95 text-white rounded-md py-2 px-4'>View Reviews</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Feedback)