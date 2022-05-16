import peopledata from "../../../Data/peopledata"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from "next/image";
import { FaStar} from 'react-icons/fa'
import { FaStarHalfAlt} from 'react-icons/fa'
export default function People()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <h2 className=" text-[30px] md:text-[36px] lg:text-[42px] font-bold text-black">Our Best Instructors</h2>
                <p className="text-dark text-[15px] mb-6">Boost up your knowledge with industries experts</p>
                <Swiper
                navigation
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation,Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    }
                }}>
                    {
                        peopledata.map((box,index)=>
                        {
                            return <SwiperSlide key={index+"aqw"}>
                                        <Image className="rounded-lg" src={`/images/academy/people/${box.image}`} width="427px" height="427px"/>
                                        <h3 className="text-black hover:text-blue text-center duration-300 cursor-pointer text-[20px] mt-1 mb-2 font-semibold">{box.name}</h3>
                                        <p className="text-dark text-center text-[15px] mb-2">{box.job}</p>
                                        <span className="flex text-center gap-[6px] items-center justify-center">
                                            <span className="text-black font-[14px]">4.5/5.0</span>
                                            <span className="flex gap-[1px] text-orange text-[14px]">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalfAlt/>
                                            </span>
                                        </span>
                                </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}