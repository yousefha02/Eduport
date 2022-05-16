import { useState } from 'react';
import { MdClose} from 'react-icons/md';
export default function Video(props)
{
    return(
        <>
            {props.play &&
                <div className='w-[100vw] h-[100vh] fixed z-50 top-0 left-0'>
                <div className="absolute w-[100%] h-[100vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-[#000000e6]">
                <iframe src="https://www.youtube.com/embed/tXHviS-4ygo" width="700px" height="400px"></iframe> 
                <MdClose className='text-white text-[38px] absolute top-[30px] right-4 cursor-pointer'
                onClick={()=>props.change("close")}/>
                </div>
                </div>
            }
        </>
    )
}