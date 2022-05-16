import { useState } from "react"
import Art from "./Art"
import Development from "./Development"
import Finance from "./Finance"
import Marketing from "./Marketing"
import Science from "./Science"
export default function Domain()
{
    let [type,setType]=useState('Art')
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative jobs">
                <h2 className=" text-[30px] md:text-[36px] lg:text-[42px] font-bold text-black">Most Popular Courses</h2>
                <p className="text-dark text-[15px] mb-6">See what course other students and experts in your domain are learning on.</p>
                <div className="flex flex-wrap gap-x-11 gap-y-4 mb-8">
                    <button onClick={()=>setType('Art')}
                        className={` duration-300 py-2 px-4 rounded-md text-[15px]
                        ${type=='Art'?'text-white bg-blue':'text-blue bg-[#066ac91a]'}`}>Art &amp; Design</button>
                    <button onClick={()=>setType('Development')}
                        className={`duration-300 py-2 px-4 rounded-md text-[15px]
                        ${type=='Development'?'text-white bg-blue':'text-blue bg-[#066ac91a]'}`}>Development</button>
                    <button onClick={()=>setType('Science')}
                        className={`duration-300 py-2 px-4 rounded-md text-[15px]
                        ${type=='Science'?'text-white bg-blue':'text-blue bg-[#066ac91a]'}`}>Data Science</button>
                    <button onClick={()=>setType('Marketing')}
                        className={`duration-300 py-2 px-4 rounded-md text-[15px]
                        ${type=='Marketing'?'text-white bg-blue':'text-blue bg-[#066ac91a]'}`}>Marketing</button>
                    <button onClick={()=>setType('Finance')}      
                        className={`duration-300 py-2 px-4 rounded-md text-[15px]
                        ${type=='Finance'?'text-white bg-blue':'text-blue bg-[#066ac91a]'}`}>Finance</button>
                </div>
                {
                    type=='Art'?
                    <Art/>:
                    (type=='Development'?<Development/>:
                    (type=='Science'?
                    <Science/>:
                    (type=='Marketing'?
                    <Marketing/>:
                    <Finance/>)))
                }
            </div>
        </div>
    )
}