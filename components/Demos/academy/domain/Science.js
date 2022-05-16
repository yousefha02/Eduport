import { FaStar} from 'react-icons/fa'
import { FaStarHalfAlt} from 'react-icons/fa'
import { FaPlay} from 'react-icons/fa';
import Video from '../../Default/Video';
import {motion} from 'framer-motion'
import React from "react"
import Image from 'next/image'
export default function Science()
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className="grid lg:grid-cols-2 gap-x-10 gap-y-4 items-center">
            <div>
                <h2 className="text-[28px] font-bold text-black mb-2">Data Science</h2>
                <p className="text-[15px] md:text-[16px] mb-5 text-dark">Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.</p>
                <div className='flex items-center gap-4 mb-4'>
                        <span className='text-black text-[38px] font-bold'>4.5</span>
                        <span className='flex flex-col gap-1'>
                            <span className='flex text-[14px] gap-1 text-[orange]'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </span>
                            <span className="text-[14px] text-dark">Review from our students</span>
                        </span>
                </div>
                <div className='flex gap-1'>
                    <button className="text-white bg-[#0cbc87] py-2 px-4 rounded-md text-[15px]">Free Trial</button>
                    <button className="text-white bg-[#d6293e] py-2 px-4 rounded-md text-[15px]">Buy Course</button>
                </div>
            </div>
            <div className='bg-white shdw rounded-md p-2 pb-0'>
            <div className=' relative'>
                <Image src="/images/academy/courses/4.jpg" width="950px" height="380px" className='rounded-md'/>
                <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
                    <button onClick={()=>setPlay(true)} className='redvideo h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e]'/></button>
                </div>
            </div>
            <Video play={play} change={change}/>
            </div>
        </motion.div>

    )
}