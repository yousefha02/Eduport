import { BsPatchCheckFill} from 'react-icons/bs';
import Image from 'next/image'
import { CgShoppingCart} from 'react-icons/cg'
import React from "react"
import { FaPlay} from 'react-icons/fa';
import Video from '../../Default/Video';
import {motion} from 'framer-motion'

export default function Development()
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

    const data = 
    [
        {
            month:"6",
            price:"134$"
        },
        {
            month:"8",
            price:"201$"
        },
        {
            month:"3",
            price:"106$"
        }
    ]
    return(
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-4 items-center">
            <div>
            <h2 className="text-[28px] font-bold text-black mb-2">Development</h2>
            <p className="text-[15px] md:text-[16px] mb-5 text-dark">Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.</p>
            <p className="text-[15px] mb-3 font-semibold text-black">What you will learn</p>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center gap-2'>
                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                    <span className='text-dark text-[15px]'>Create responsive, accessible, and beautiful layouts</span>
                </li>
                <li className='flex items-center gap-2'>
                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                    <span className='text-dark text-[15px]'>Course Videos and Readings</span>
                </li>
                <li className='flex items-center gap-2'>
                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                    <span className='text-dark text-[15px]'>Manipulate the DOM with vanilla JS</span>
                </li>
                <li className='flex items-center gap-2'>
                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                    <span className='text-dark text-[15px]'>Master the command line interface</span>
                </li>
                <li className='flex items-center gap-2'>
                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                    <span className='text-dark text-[15px]'>Create your own Node modules</span>
                </li>
            </ul>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className='bg-white shdw rounded-md p-2'>
            <div className='mb-3 relative'>
                <Image src="/images/academy/courses/3.jpg" width="950px" height="380px" className='rounded-t-md'/>
                <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
                    <button onClick={()=>setPlay(true)} className='redvideo h-[50px] w-[50px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e]'/></button>
                </div>
            </div>
            <div className='flex justify-around  pb-3 md:flex-row flex-col gap-y-3'>
                {
                    data.map((box,index)=>
                    {
                        return(
                            <div className='flex items-center gap-4' key={index+"12"}>
                                <span className='text-white text-[26px] bg-[#fd7e14] w-[55px] h-[49px] flex items-center justify-center rounded-md'>
                                    <CgShoppingCart/>
                                </span>
                                <span className='flex flex-col'>
                                    <span className='bg-[#17a2b8] text-white text-[14px] rounded-[4px] px-1'>{box.month} months</span>
                                    <span className='text-black font-bold text-[20px]'>{box.price}</span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <Video play={play} change={change}/>
        </motion.div>
        </div>
        
    )
}