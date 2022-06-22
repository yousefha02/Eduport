import Image from 'next/image'
import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
export default function Cookies()
{
    const [on,setOn] = useState(false)
    return(
        <AnimatePresence>
            {!on&&
        <motion.div initial={{x:'-100vw'}} animate={{x:0}} exit={{x:'-100vw',transition:{duration:.3}}} transition={{duration:.3}}
            className='px-4 fixed bottom-[20px] z-30 '>
            <div className='w-[240px] max-w-full shdw bg-white text-center p-5 rounded-md'>
            <Image src="/images/education/27.svg" width="61px" height="50px" alt='load'/>
            <p className='text-[14px] my-3'>
            This website stores cookies on your computer. To find out more about the cookies we use, see our Privacy Policy
            </p>
            <div className='flex gap-3 sm:flex-row flex-col justify-center items-center'>
                <button className='text-[#20c997] bg-[#20c9971a] text-[13px] py-2 px-4 
                rounded-[4px] hover:text-white hover:bg-[#20c997] duration-300'
                onClick={()=>setOn(true)}>Accept</button>
                <button className='text-[#dc3545] bg-[#dc35451a] text-[13px] py-2 px-4 
                rounded-[4px] hover:text-white hover:bg-[#dc3545] duration-300'
                onClick={()=>setOn(true)}>Decline</button>
            </div>
            </div>
        </motion.div>
        }
        </AnimatePresence>
    )
}