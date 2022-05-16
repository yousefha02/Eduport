import React from "react";
import { useEffect, useState } from "react";
import popularcourses from "../../../Data/popularcourses";
import Image from "next/image";
import { AiFillHeart} from 'react-icons/ai';
import { AiOutlineHeart} from 'react-icons/ai';
import { FaUserClock} from 'react-icons/fa';
import { BsCalendar2} from 'react-icons/bs';
import { FaStar} from 'react-icons/fa';
import { FaRegStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa';
function Popular()
{
    const [part,setPart]=useState(popularcourses.filter(box=>box.type=='web design'))
    const [type,setType]=useState('web design')

    function rating(num)
    {
        let arr =[]
        let frg = Math.ceil(num) - num
        let embty =0
        if(frg>0)
            {
                arr.push(1)
                embty = 5 - Math.ceil(num)
                for(let i=0; i<embty; i++)
                arr.push(2)
                for(let i=0; i<4-embty; i++)
                arr.push(0)
            } 
        else 
            {
                embty = 5-num
                for(let i=0; i<embty; i++)
                arr.push(2)
                for(let i=0; i<5-embty; i++)
                arr.push(0)
            }
            arr.sort()
        return(
            <ul className="flex">
                {
                    arr.map((star,index)=>{
                        return star==0?<li key={index+77}><FaStar className="text-[orange]"/></li>:
                        star==2?<li key={index+88}><FaRegStar className="text-[orange]"/></li>:
                        <li key={index+66}><FaStarHalfAlt className="text-[orange]"/></li>
                    })
                }
            </ul>
        )
    }

    function filtering(word)
    {
        setType(word)
    }

    useEffect(()=>
    {
        setPart(popularcourses.filter(box=>box.type==type))
    },[type])

    let popularpost =  part.map((box,index)=>
    {
    return <div  key={index+"yous"}
    className="shdw rounded-lg">
            <div><Image alt="wait" className=" rounded-t-lg"
            src={`/images/courses/${box.image}`} width='600px' height="440px"/></div>
            <div className="p-4">
                <div className="sm:min-h-[200px]">
                <div className="flex justify-between items-center mb-3">
                    <span className="py-[2px] px-[4px] rounded-[4px] text-[14px]" 
                    style={box.level=='All level'?{color:'#6f42c1',backgroundColor:'#D9D7F1'}:
                    box.level=='Beginner'?{color:'#17a2b8',backgroundColor:'#CAF0F8'}:
                    {color:'#ffc107',backgroundColor:'#FFF8D5'}}
                    >{box.level}</span>
                    {
                        box.fav?
                        <AiFillHeart className={`text-[#dc3545] text-[22px]`}/>:
                        <AiOutlineHeart className="text-[22px]"/>
                    }
                </div>
                <h3 className="text-black text-[20px] mb-2 leading-7 font-semibold">{box.title}</h3>
                <h4 className="text-gray text-[16px] mb-3">{box.desc}</h4>
                <span>
                    <span className="flex gap-4 items-center">
                        {rating(parseFloat(box.rate))}
                        <span className="text-black text-[14px]">{box.rate}/5.0</span>
                    </span>
                </span>
                </div>
                <hr className='bg-[#9a9ea4] mt-3 mb-3 h-[.5px] opacity-20'/>
                <div className="flex justify-between">
                    <span className="flex justify-between items-center gap-2">
                        <FaUserClock className="text-[#dc3545]"/>
                        <span className="text-black">{box.time}</span>
                    </span>
                    <span className="flex justify-between items-center gap-2">
                        <BsCalendar2 className="text-[orange]"/>
                        <span className="text-black">{box.lectures} lectures</span>
                    </span>
                </div>
            </div>
        </div>
    });

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px]">
                <div className="text-center">
                    <h2 className="text-black text-[26px] sm:text-[36px] md:text-[40px] font-bold mb-2">Most Popular Courses</h2>
                    <p className="text-gray text-[14px] lg:text-[16px] mb-5">Choose from hundreds of courses from specialist organizations</p>
                </div>
                <div className="bg-[#066bc927] flex justify-center gap-x-14 py-[0.625rem] flex-wrap rounded-lg mb-7">
                    <button className={`text-blue p-[0.625rem] duration-300 ${type=='web design'?'text-white bg-blue rounded-md':'text-blue'}`} onClick={()=>filtering('web design')}>Web Design</button>
                    <button className={`text-blue p-[0.625rem] duration-300 ${type=='development'?'text-white bg-blue rounded-md':'text-blue'}`} onClick={()=>filtering('development')}>Development</button>
                    <button className={`text-blue p-[0.625rem] duration-300 ${type=='graphic design'?'text-white bg-blue rounded-md':'text-blue'}`} onClick={()=>filtering('graphic design')}>Graphic Design</button>
                    <button className={`text-blue p-[0.625rem] duration-300 ${type=='marketing'?'text-white bg-blue rounded-md':'text-blue'}`} onClick={()=>filtering('marketing')}>Marketing</button>
                    <button className={`text-blue p-[0.625rem] duration-300 ${type=='finance'?'text-white bg-blue rounded-md':'text-blue'}`} onClick={()=>filtering('finance')}>Finance</button>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {popularpost}
                </div>
            </div>
        </div>
    )
    }

export default React.memo(Popular)