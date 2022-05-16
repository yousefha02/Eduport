import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from "swiper";

import 'swiper/css';
import React,{ useState } from 'react';

const arr = ['android.svg','coca-cola.svg','envato.svg','google.svg','linkedin.svg','microsoft.svg','netflix.svg']

export default function Companies()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
            <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
                }}
            modules={[Autoplay]}
            loop={true}>
                {
                    arr.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={index+6000}><Image alt="wait" src={`/images/education/company/${box}`} width="205px" height="35px" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
        </div>
    )
}
