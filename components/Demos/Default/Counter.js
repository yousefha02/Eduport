import React from "react";
import { useEffect, useState,useRef } from "react"
import coursesdata from "../../../Data/coursesdata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from 'react-countup'

function Counter()
{
    const [data,setData] = useState(coursesdata)   
    const [on,setOn] = useState(false);
    const section = useRef()
    
    function scrolling()
    {
        if(typeof window !=='undefined')
        {
            if(section.current){
                if(window.scrollY > section.current.offsetTop-200);
                setOn(true);
            }
        }
    }

    useEffect(()=>
    {
        if(typeof window !=='undefined')
        {
            window.addEventListener("scroll",scrolling)
            return ()=>window.removeEventListener("scroll",scrolling)
        }
    },[scrolling])

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] section" ref={section}>
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div style={{backgroundColor:box.bg}} key={index}
                                className="rounded-md flex justify-center items-center  h-[110px] gap-6">
                                    <span><FontAwesomeIcon icon={box.icon} style={{color:box.color}}
                                    className="text-[55px]"/></span>  
                                    <span className="flex flex-col">
                                        <span className="font-bold text-[22px]">{on?<CountUp start={0} end={box.number}/>:'0'}{box.desc}</span>
                                        <span className="font-semibold text-[14px]">{box.title}</span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Counter)