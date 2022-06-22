import { BsCheck} from 'react-icons/bs'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css';

export default function Requ()
{
    const info = 
    [
        "An overview of the platform and its features",
        "Share few success stories with you",
        "Actionable learning functionality",
        "No communication gap",
        "Better addressable of group level issue",
        "Unlimited access to 5K+ Courses"
    ]
    const arr = ['android.svg','coca-cola.svg','envato.svg','google.svg','linkedin.svg','microsoft.svg','netflix.svg']
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[100px] flex lg:flex-row flex-col gap-16 items-center">
                <div className='w-[100%] lg:w-[50%]'>
                    <h2 className=' text-black sm:text-[36px] text-[28px] lg:text-[42px] font-bold'>
                        Request a Demo
                    </h2>
                    <p className='text-[15px] text-dark mb-10'>
                    Let is find out the demo. The 1-hour demo will provide Happiness prosperous impression had conviction For every delay in their Extremity now, strangers
                    </p>
                    <h3 className='text-[22px] md:text-[26px] font-bold mb-4'>
                        What you will get inside the demo?
                    </h3>
                    <ul className='flex flex-col gap-5 mb-12'>
                        {
                            info.map((box,index)=>
                            {
                                return(
                                    <li key={index+'qon'} className="flex gap-3 items-center">
                                        <span className='w-[18px] h-[18px] rounded-full bg-[#0cbc87] text-white flex justify-center items-center text-[20px]'>
                                            <BsCheck/> 
                                        </span>
                                        <span className='text-dark text-[15px]'>{box}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h2 className='font-bold text-black text-[20px] mb-4'>Trusted by</h2>
                <Swiper
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                }}
            modules={[Autoplay]}
            loop={true}>
                {
                    arr.map((box,index)=>
                    {
                        return(
                            <SwiperSlide key={index+6000}><Image alt="wait" src={`/images/education/company/${box}`} width="205px" height="35px" className='grayscale	hover:grayscale-0 duration-300'/></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
            <div className='bg-black px-6 sm:px-12 py-8 w-[100%] lg:w-[50%]'>
                <h3 className='text-white font-bold text-[24px] md:text-[30px] mb-4'>
                    Fill out the form below
                </h3>
                <div className='grid sm:grid-cols-2 gap-4 mb-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>First name <span className='text-[#d6293e]'>*</span></label>
                        <input type="text" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>Last name <span className='text-[#d6293e]'>*</span></label>
                        <input type="text" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>Email <span className='text-[#d6293e]'>*</span></label>
                        <input type="text" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>Phone number <span className='text-[#d6293e]'>*</span></label>
                        <input type="number" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-5'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>City <span className='text-[#d6293e]'>*</span></label>
                        <input type="text" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-white text-opacity-50 text-[15px]'>First language<span className='text-[#d6293e]'>*</span></label>
                        <input type="number" className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 focus:outline-none rounded-[4px]'/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <label className='text-white text-opacity-50 text-[15px]'>Additional notes *</label>
                    <textarea rows={3} cols={5} className='focus:border focus:border-[#ffffff1a] bg-[#ffffff1a] p-2 
                    focus:outline-none rounded-[4px]'></textarea>
                </div>
                <div className='mb-3'>
                    <button className='w-[100%] h-[44px] flex items-center justify-center bg-blue text-white rounded-md font-[500]'>Request a Demo</button>
                </div>
                <div className='text-white text-opacity-50 text-[13px]'>
                Field required with <span className='text-[#d6293e] text-opacity-100'>*</span>are required to complete the demo request
                </div>
            </div>
                </div>
            </div>
    )
}