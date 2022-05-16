import React from "react";
import trendingcourses from "../../../Data/trendingcourses"
import Image from 'next/image'
import { BsBookmark} from 'react-icons/bs';
import { MdStar} from 'react-icons/md';
import {FaUserClock} from 'react-icons/fa';
import { BsCalendar2} from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';
import { useEffect, useState } from "react";

function Trending()
{
    const [data,setData]=useState([])

    useEffect(()=>
    {
        setData(trendingcourses)
    },[]);

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <div className="text-center">
                    <h2 className="text-black text-[26px] sm:text-[36px] md:text-[40px] font-bold mb-2">Our Trending Courses</h2>
                    <p className="text-gray text-[14px] lg:text-[16px] mb-5">Check out most 🔥 courses in the market</p>
                </div>
            <div>
                <Swiper
                    className="swiper"
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    }}
                    modules={[Autoplay,Navigation]}>
                {
                    data.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={box.id}>
                            <div  className="pb-2 rounded-md border-[#9a9ea4] border-[1px] border-opacity-30 group">
                            <div><Image alt="wait" className="rounded-t-md" width='800px' height="550px" src={`/images/trendingCourses/${box.image}`}/></div>
                            <div className="px-4 py-2">
                                <div className="flex justify-between mb-5 items-center">
                                    <span className="flex gap-2">
                                        <span className="text-blue bg-[#066bc927] py-[2px] px-[6px] rounded-[4px] text-[14px]">{box.type}</span>
                                        <span className=" bg-black text-white py-[2px] px-[6px] rounded-[4px] text-[14px]">{box.level}</span>
                                    </span>
                                    <BsBookmark className="hover:text-blue duration-300 cursor-pointer"/>
                                </div>
                                <h2 className="text-black text-[20px] leading-7 font-bold mb-2">{box.title}</h2>
                                <div className="flex justify-between mb-5">
                                    <span className="flex gap-2 items-center">
                                        <span className="flex gap-1 items-center text-[orange] font-semibold">{box.rate} <MdStar className="text-[24px]"/></span> 
                                        <span className="text-gray text-[14px] font-semibold">({box.stars})</span> 
                                    </span>
                                    <span>{box.students} <span className="text-gray text-[14px]">(students)</span></span>
                                </div>
                                <div className="flex gap-5">
                                    <span className="flex items-center gap-2">
                                        <FaUserClock className="text-[#dc3545]"/>
                                        <span className="text-black">{box.time}</span>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <BsCalendar2 className="text-[orange]"/>
                                        <span className="text-black">{box.lectures} <span>lectures</span></span>
                                    </span>
                                </div>
                                <hr className='bg-[#9a9ea4] mt-4 h-[.5px] opacity-20'/>
                            </div>
                            <div className="px-4 py-2 flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <Image alt="wait" className="rounded-t-md" width='40px' height="40px" src={`/images/trendingCourses/${box.imageperosn}`}/>
                                    <span className="text-black cursor-pointer text-[15px] hover:text-blue duration-300">{box.person}</span>
                                </div>
                                <h4 className="text-[#0cbc87] font-bold text-[24px] group-hover:hidden">{box.price}</h4>
                                <button className="text-[#0cbc87] cursor-pointer group-hover:block text-[14px] py-1 px-3 hidden rounded-md bg-[#0cbc8720]">Add to Cart</button>
                            </div>
                            </div>
                           </SwiperSlide>
                        )
                    })
                }
                </Swiper>
            </div>
            </div>
        </div>
    )
}

export default React.memo(Trending)