import { useEffect, useState } from 'react'
import { FaStar} from 'react-icons/fa'
import { FaStarHalfAlt} from 'react-icons/fa'
import Design from './Design'
import {motion} from 'framer-motion'
import Graphic from './Graphic'
import Web from './Web'

export default function Art()
{
    const [type,setType]=useState('art')

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.7}} className="grid lg:grid-cols-2 gap-x-10 gap-y-4">
            <div>
                <h2 className="text-[28px] font-bold text-black mb-2">Art &amp; Design</h2>
                <p className="text-[15px] md:text-[16px] mb-5 text-dark">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed.</p>
                <div className="flex flex-wrap gap-4 mb-3">
                    <button onClick={()=>setType('art')}
                    className={`duration-300 py-2 px-4 rounded-md text-[15px] 
                    ${type=='art'?'text-white bg-[#24292d]':'text-[#24292d] bg-[#24292d1a]'}`}>Art &amp; Design</button>
                    <button onClick={()=>setType('graphic')} 
                    className={`duration-300 py-2 px-4 rounded-md text-[15px]
                    ${type=='graphic'?'text-white bg-[#24292d]':'text-[#24292d] bg-[#24292d1a]'}`}>Graphic Design</button>
                    <button onClick={()=>setType('web')}
                    className={`duration-300 py-2 px-4 rounded-md text-[15px]
                    ${type=='web'?'text-white bg-[#24292d]':'text-[#24292d] bg-[#24292d1a]'}`}>Web Design</button>
                </div>
                <div className='flex items-center gap-4'>
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
            </div>
            <div>
                {
                    type=='art'?<Design/>:(type=='web'?<Web/>:<Graphic/>)
                }
            </div>
        </motion.div>
    )
}