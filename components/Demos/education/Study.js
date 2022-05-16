import React from "react"
import Image from 'next/image'
import Video from '../Default/Video'
import { FaPlay} from 'react-icons/fa';

export default function Study()
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
    return(
        <div className="study relative">
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative grid lg:grid-cols-2 items-center lg:gap-[200px]">
                <h2 className="text-black text-[30px] leading-[36px] sm:text-[36px] lg:text-[40px] w-full mb-5 lg:w-[550px] sm:leading-[40px] lg:leading-[54px] max-w-full font-bold">Study whenever you want, from any place in the world.</h2>
                <div className='relative max-w-full p-[5px] bg-white pb-0 rounded-md lg:w-[550px] w-full'>
                    <Image alt="wait" src="/images/education/04 (1).jpg" width="905px" height="480px" className=' border-white'/>
                    <div className='flex items-center gap-5 absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4'>
                        <button onClick={()=>setPlay(true)} className='redvideo h-[55px] w-[55px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e] text-[16px]'/></button>
                    </div>
                </div>
            </div>
            <Video play={play} change={change}/>
        </div>
    )
}