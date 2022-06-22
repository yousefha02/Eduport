import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';
export default function Offer()
{
    const info = 
    [
        {
            img:'20.jpg',
            title:"Graduate Record Examination (GRE)"
        },
        {
            img:'21.jpg',
            title:"International English Language Testing System (IELTS)"
        },
        {
            img:'22.jpg',
            title:"Duolingo English Test (DUOLINGO)"
        },
        {
            img:'23.jpg',
            title:"Graduate Record Examination (GRE)"
        },
        {
            img:'24.jpg',
            title:"Test of English as a Foreign Language (TOEFL)"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pt-[20px] pb-[60px] relative">
                <h2 className="text-[26px] text-center sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[40px] mb-8 font-bold md:leading-[46px] text-black">
                    What We Offer
                </h2>
                    <Swiper
                    className="swiper"
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    slidesPerView={1}
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    }}
                    modules={[Autoplay,Navigation]}>
                            {
                                info.map((box,index)=>
                                {
                                    return(
                                        <SwiperSlide key={index+'a19'}>
                                            <div>
                                                <Image alt='load' src={`/images/abroad/${box.img}`} width="580px" height="370px" className='rounded-md'/>
                                                <div className='w-[85%] mx-auto text-center'>
                                                    <h3 className='font-bold text-[18px] mb-3'>{box.title}</h3>
                                                    <button className='bg-[#d6293e] rounded-[4px] text-white font-semibold w-[106px] h-[34px]'>Enquire Now</button>
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