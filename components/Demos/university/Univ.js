import Digital from "./Digital";
import Lifelong from "./Lifelong";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Wbs from "./Wbs"; 
import College from "./College";
import Counter from "./Counter";
import News from "./News";
import React from "react"

function Univ()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[100px] relative">
                <Swiper
                className="rounded-md"
                navigation
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}>
                    <SwiperSlide><Lifelong/></SwiperSlide>
                    <SwiperSlide><Digital/></SwiperSlide>
                </Swiper>
            </div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative">
                    <Wbs/>
                    <College/>
                    <Counter/>
                    <News/>
            </div>
        </div>
    )
}
export default React.memo(Univ)