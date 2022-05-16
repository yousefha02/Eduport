import eventsdata from "../../../Data/eventsdata"
import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation } from "swiper";
import React from "react";
import Image from 'next/image'
import { FaMapMarkerAlt} from 'react-icons/fa';
import { BsMap} from 'react-icons/bs';

export default function Events()
{
    const [data,setData]=React.useState([])

    React.useEffect(()=>
    {
        setData(eventsdata)
    },[]);
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
            <h3 className='text-[24px] sm:text-[34px] text-black font-bold mb-2'>Upcoming <span className='text-[#ffc107]'>Education</span> Events</h3>
            <Swiper
                    className="swiper"
                    loop={true}
                    navigation={true}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    }}
                    modules={[Navigation]}>
                    {
                    data.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={index+"qqw"}>
                                <div>
                                    <div className="mb-2 relative w-fit">
                                    <Image alt="wait" className="rounded-md" width='800px' height="550px" src={`/images/education/events/${box.image}`}/>
                                    <span className="text-gray shdw absolute bg-white bottom-[20px] rounded-[4px] px-2 left-[10px] flex gap-2 items-center">
                                        <BsMap className="text-[orange]"/>
                                        <span>{box.date}</span>
                                    </span>
                                    </div>
                                    <div>
                                        <h3 className="text-black mb-4 text-[22px] leading-[26px] font-semibold">{box.desc}</h3>
                                        <div className="flex justify-between items-center">
                                            <span className="flex gap-2 items-center text-dark text-[15px]">
                                                <FaMapMarkerAlt/>
                                                <span>{box.country}</span>
                                            </span>
                                            <button className="bg-[#066ac933] hover:text-white hover:bg-blue duration-300 text-blue text-[14px] py-1 px-4 rounded-sm">Join now</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
        </div>
    )
}