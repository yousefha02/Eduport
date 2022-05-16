import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'

export default function JobSlides()
{
    const data = 
    [
        {
            job:'Technology',
            image:"1.svg"
        },
        {
            job:'Health',
            image:"2.svg"
        },
        {
            job:'Business',
            image:"3.svg"
        },
        {
            job:'Engineer',
            image:"4.svg"
        },
        {
            job:'Chmeistry',
            image:"5.svg"
        },
        {
            job:'Physics',
            image:"6.svg"
        }
    ]
    return(
        <div>
            <div className='px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative'>
            <div className='jobs rounded-lg py-6 px-5 md:px-5'>
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
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 3,
                spaceBetween: 40,
                },
                1201: {
                slidesPerView: 5,
                spaceBetween: 60,
                },
            }}
            >
            {
                data.map((box,index)=>
                {
                    return<SwiperSlide key={index+"ias"}>
                        <div className='flex gap-3 bg-white justify-center py-2 rounded-md border border-[#9a9ea4] border-opacity-50 items-center'>
                            <Image src={`/images/academy/slide/${box.image}`} width="40px" height="40px"/>
                            <h3 className='text-black'>{box.job}</h3>
                        </div>
                    </SwiperSlide>
                })
            }
            </Swiper>
            </div>
            </div>
        </div>
    )
}