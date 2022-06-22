import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image'

export default function Happiness()
{
    const info =
    [
        {
            image:'1.jpg',
            desc:"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Lori Stevens',
            job:'Backend developer at google',
        },
        {
            image:'2.jpg',
            desc:"Creating product become fun conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Dennis Barrett',
            job:'Design lead at the agency',
        },
        {
            image:'3.jpg',
            desc:"Conviction For every delay in they Extremity now strangers contained breakfast",
            name:'Carolyn Ortiz',
            job:'CEO of online shop',
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pb-[40px] relative">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-6 font-bold md:leading-[46px] text-black">
                    What people say about us
                </h2>
                <p className="text-[15px] text-dark mx-auto text-center lg:w-[65%] max-w-full mb-14">
                    Happiness prosperous impression had conviction For every delay in they Extremity now strangers contained breakfast him discourse additions Sincerity collected contented led now perpetual extremely forfeited
                </p>
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                }}
                modules={[Autoplay,Navigation]}
                >
                {
                    info.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={index+'k91'}>
                                <h2 className='text-[20px] text-dark mb-3'>{box.desc}</h2>
                                <div className='flex gap-3 items-center'>
                                    <Image src={`/images/access/${box.image}`} alt="load" width="48px" height="48px" className='rounded-full'/>
                                    <span>
                                        <h3 className='text-[15px] font-bold text-black'>{box.name}</h3>
                                        <p className='text-[14px] text-dark'>{box.job}</p>
                                    </span>
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