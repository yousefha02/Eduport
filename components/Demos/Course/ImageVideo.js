import React from "react"
import Video from '../Default/Video'
import Image from 'next/image'
import { FaPlay} from 'react-icons/fa';
export default function ImageVideo()
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
        <div className=" relative pb-[10px] pt-[30px]">
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[0] relative">
                <div className='relative max-w-full p-[5px] bordsdw pb-0 mx-auto rounded-md text-center w-fit'>
                    <Image alt="wait" src="/images/course/12.jpg" width="814px" height="340px" className='rounded-md'/>
                    <div className='flex items-center gap-5 absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4'>
                        <button onClick={()=>setPlay(true)} className='redvideo h-[55px] w-[55px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e] text-[16px]'/></button>
                    </div>
                </div>
            </div>
            <Video play={play} change={change}/>
        </div>
    )
}