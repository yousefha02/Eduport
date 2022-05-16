import React from 'react';
import { GoVerified} from 'react-icons/go';
import { FaPlay} from 'react-icons/fa';
import Image from 'next/image'
import Video from './Video';
import { useEffect, useState } from 'react';

function Default()
{
    
    const [play,setPlay]= useState(false)
    function change(word)
    {
        word=='close'?setPlay(false):setPlay('true')
    }

    useEffect(()=>
    {
        if(typeof window !='undefined')
            play?document.body.style.overflow='hidden':document.body.style.overflow='visible'
    },[play])

    return(
        <div className='relative'>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pt-[96px]">
                <div className='grid lg:grid-cols-2 items-center gap-4 py-[50px]'>
                    <div className='w-full lg:w-[600px] max-w-full text-center lg:text-left'>
                        <h2 className="text-black text-[38px] leading-[54px] sm:text-[42px] md:text-[48px] md:leading-[60px] lg:text-[56px] lg:leading-[72px] font-bold mb-8">Limitless learning at your <span>fingertips</span></h2>
                        <h4 className='text-gray text-[18px] lg:text-[20px] mb-8'>Online learning and teaching marketplace with 5K+ courses &#38; 10M students. Taught by experts to help you acquire new skills.</h4>
                        <div className='flex gap-3 text-gray mb-6 flex-wrap lg:justify-start justify-center'>
                            <span className='flex items-center gap-1'>
                                <GoVerified className='text-black'/>
                                Learn with experts
                            </span>
                            <span className='flex items-center gap-1'>
                                <GoVerified className='text-black'/>
                                Get certificate
                            </span>
                            <span className='flex items-center gap-1'>
                                <GoVerified className='text-black'/>
                                Get membership
                            </span>
                        </div>
                        <div className='flex md:flex-row flex-col gap-8 items-center lg:justify-start justify-center mb-6'>
                            <button className='text-[#d6293e] bg-[#d6293e1a] hover:text-white hover:bg-[#d6293e] duration-300 w-[140px] h-[50px] font-semibold rounded-md'>Get Started</button>
                            <div className='flex items-center gap-5'>
                                <button onClick={()=>setPlay(true)} className='video h-[40px] w-[40px] bg-[#066ac9] flex items-center justify-center rounded-full'><FaPlay className='text-white'/></button>
                                <span className='text-black font-semibold text-[14px]'>Watch Video</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center overflow-hidden'>
                        <div className='flex justify-center bg-blue person overflow-hidden w-[480px] max-full'>
                            <Image alt="wait" src={'/images/07.png'} width="386px" height="603px"
                            className=' absolute'/>
                        </div>
                    </div>
                </div>
            </div>
            <Video play={play} change={change}/>
        </div>
    )
}

export default React.memo(Default)