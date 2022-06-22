import popularcourses from "../../../Data/popularcourses"
import Image from "next/image";
import { AiFillHeart} from 'react-icons/ai';
import { AiOutlineHeart} from 'react-icons/ai';
import { FaUserClock} from 'react-icons/fa';
import { BsCalendar2} from 'react-icons/bs';
import { FaStar} from 'react-icons/fa';
import { useState,React } from "react";

export default function Courses()
{
    const [info,setInfo]= useState(popularcourses.slice(0,9))
    return(
        <div className="sm:grid-cols-2 xl:grid-cols-3 grid gap-4 mt-6">
            {
                info.map((box,index)=>
                {
                    return(
                        <div key={index+"yous"} className="shdw rounded-lg">
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
                        <div className="flex text-[orange]">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
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
                    )
                })
            }
        </div>
    )
}