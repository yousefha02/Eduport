import { FaPlay} from 'react-icons/fa';
import Video from '../../Default/Video';
import Image from 'next/image'
import React from "react"
import {motion} from 'framer-motion'
export default function Web()
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className="bg-white shdw rounded-md p-2">
            <div className='mb-1 relative'>
                <Image src="/images/academy/courses/3.jpg" width="950px" height="380px" className='rounded-t-md'/>
                <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
                    <button onClick={()=>setPlay(true)} className='redvideo h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e]'/></button>
                </div>
            </div>
            <div className='pb-2'>
                <p className="text-dark text-[15px]">
                    <span className="text-black font-semibold">Note: </span>
                    Before you learning this video you need to first learn Beginner course    
                </p>
            </div>
            <Video play={play} change={change}/>
        </motion.div>
    )
}