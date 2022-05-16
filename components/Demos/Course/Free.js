import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'
import { FaPlay} from 'react-icons/fa';
import React from "react"
import Video from '../Default/Video'

export default function Free()
{
    const [play,setPlay]= React.useState(false)
    function change(word)
    {
        word=='close'?setPlay(false):setPlay('true')
    }

    React.useEffect(()=>
    {
        if(typeof window !='undefined')
            play?document.body.style.overflow='hidden':document.body.style.overflow='visible'
    },[play])

    const info=
    [
        {
            image:'01.jpg',
            title:"Learn French Language: Complete Course",
            list : ['06.jpg','03.jpg','04.jpg','05.jpg']
        },
        {
            image:'02.jpg',
            title:"Learn French Language: Complete Course",
            list : ['06.jpg','03.jpg','04.jpg','05.jpg']
        },
        {
            image:'07.jpg',
            title:"Learn French Language: Complete Course",
            list : ['06.jpg','03.jpg','04.jpg','05.jpg']
        }
    ]
    return(
        <div className='light rounded-md'>
            <div className='px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] md:flex-row flex-col flex gap-8 items-center'>
                <div className='w-full md:w-[48%] xl:w-[33%]'>
                    <h2 className="text-[30px] sm:text-[36px] leading-[40px] sm:leading-[44px] md:text-[40px] mb-3 lg:text-[42px] font-bold md:leading-[56px] text-black">
                        Today Top Free Live Courses
                    </h2>
                    <p className="text-dark text-[15px] mb-6">
                        How promotion excellent curiosity yet attempted happiness prosperous impression had conviction For every delay death ask to style Me mean able my by in they Extremity now strangers contained.
                    </p>
                    <button className='bg-[#fd7e14] text-white rounded-[4px] px-4 py-2'>Get premium courses</button>
                </div>
                <div className='w-full md:w-[50%] xl:w-[66%]'>
                <Swiper
                navigation
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    1280: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    },
                }}>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <SwiperSlide key={index+'lk'}>
                                    <div className='bg-white p-2 pb-4 rounded-md'>
                                        <div className='mb-1 relative'>
                                            <Image className='rounded-md' src={`/images/course/Free/${box.image}`} width="690px" height="502px" alt=''/>
                                            <div className='flex items-center gap-5 absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4'>
                                                <button onClick={()=>setPlay(true)} className='redvideo h-[55px] w-[55px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e] text-[16px]'/></button>
                                            </div>
                                        </div>
                                        <div className='px-5'>
                                            <h3 className='text-[20px] lg:text-[22px] font-bold mb-2 text-black lg:w-[90%] w-full max-w-full'>{box.title}</h3>
                                            <div className='flex justify-between items-center'>
                                                <div className='flex flex-col gap-[6px]'>
                                                    <span className='flex gap-2 items-center'>
                                                        <span className='w-[13px] h-[13px] bg-[#0cbc87] rounded-full'></span>
                                                        <span className='text-black text-[15px]'>Live Students</span>
                                                    </span>
                                                    <ul className='flex'>
                                                        {
                                                            box.list.map((img,index)=>
                                                            {
                                                                return(
                                                                    <li key={index+'xz'} 
                                                                    className={`mr-[-10px] w-[31px] h-[31px] rounded-full border-[#fff] border-[2px]`}>
                                                                        <Image className='rounded-full' alt=''
                                                                        width='31px' height='31px' src={`/images/course/Free/${img}`}/>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        <li className='w-[31px] h-[31px] rounded-full mr-[-10px] flex items-center border-[#fff] border-[2px] 
                                                        justify-center bg-[#066ac9] text-[14px] text-white z-10'>+1k</li>
                                                    </ul>
                                                </div>
                                                <button className='text-white text-[14px] px-4 rounded-[4px] py-[6px] bg-[#0cbc87]'>Join now</button>
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
            <Video play={play} change={change}/>
        </div>
    )
}