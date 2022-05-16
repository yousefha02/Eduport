import { BsFillPinMapFill} from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay } from "swiper";


export default function Academia()
{
    const data =
    [
        {
            image:"01.jpg",
            desc:"Make my life easier and organized conviction For every delay in they Extremity now strangers contained breakfast",
            user:"Jacqueline Miller",
            job:"Student"
        },
        {
            image:"02.jpg",
            desc:"Creating product become fun conviction For every delay in they Extremity." ,
            user:"Dennis Barrett ",
            job:"Student"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative pb-[40px] pt-[120px]">
                <div className='lg:gap-8 gap-12 flex lg:flex-row flex-col items-center'>
                    <div className='w-full lg:w-[50%]'>
                        <span className='flex items-center gap-1 mb-5'>
                            <BsFillPinMapFill/>
                            <span className='font-[600]'>St Joseph, Eugene, Oregon, USA</span>
                        </span>
                        <h2 className='text-[42px] sm:text-[50px] md:text-[56px] lg:text-[66px] leading-[50px] sm:leading-[66px] lg:leading-[80px] font-bold mb-4'>Academia tuition classes</h2>
                        <h3 className='text-dark mb-6 text-[18px]'>We are so eager to be working with kids and making a difference in their careers. Being a mentor is what we have always wanted to be.</h3>
                        {
                            <Swiper 
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            className="mb-8"
                            modules={[Autoplay]}>
                                {
                                    data.map((box,index)=>
                                    {
                                        return(
                                            <SwiperSlide key={index+"cvbz"}>
                                                <div className='flex gap-1 lg:gap-4 items-start lg:flex-row flex-col'>
                                                    <div>
                                                        <Image className='rounded-full'
                                                        src={`/images/tutor/${box.image}`} width="64px" height="64px" alt="load"/>
                                                    </div>
                                                    <div className='flex-1'>
                                                        <h4 className='text-dark text-[15px] mb-[6px]'>&#34;{box.desc}&#34;</h4>
                                                        <span className='flex items-start gap-[4px]'>
                                                            <span className='text-black font-[600] text-[15px]'>{box.user}</span>
                                                            <span className='text-dark text-[14px]'>({box.job})</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        }
                        <button className='w-[121px] h-[41px] bg-blue text-white fle items-center font-[500] justify-center rounded-md'>Contact me!</button>
                    </div>
                    <div className='rounded-md'>
                        <Image src="/images/tutor/07.jpg" width="820px" height="820px" alt='load' className='rounded-md'/>
                    </div>
                </div>
            </div>
        </div>
    )
}