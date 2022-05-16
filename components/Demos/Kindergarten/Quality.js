import Image from "next/image"
import { AiFillHome} from 'react-icons/ai';
import { FaUserGraduate} from 'react-icons/fa';
import { FaBookReader} from 'react-icons/fa';
import { FaUserTie} from 'react-icons/fa';
import { FaStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa';

export default function Quality()
{
const data =
[
    {
        icon:FaUserGraduate,
        title:"Total Students",
        num:"1K",
        color:"#17a2b8"
    },
    {
        icon:FaBookReader,
        title:"Total Instructors",
        num:"105",
        color:"#d6293e"
    },
    {
        icon:FaUserTie,
        title:"Total Activities",
        num:"+2K",
        color:"#6f42c1"
    }
]
    return(
        <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative">
            <div className="pb-[60px] pt-[140px] flex xl:flex-row flex-col mb-6 gap-8 xl:gap-16">
            <div className="relative w-[26px] xl:w-[24%] xl:items-end xl:justify-center xl:flex hidden">
                <Image src="/images/Kindergarten/01.png" width="193px" height="348px"/>
                <figure className="absolute bottom-[-5px] mt-4 mb-0 -z-[10]">
                <svg width="290.2px" height="296.4px">
                    <path className=" fill-[#17a2b8]" d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z"></path>
                </svg>
                </figure> 
            </div>
            <div className="text-center w-full xl:w-[46%]">
                <div className="mb-3">
                    <button className="bg-[#1d3b53] mx-auto gap-1 text-white font-semibold px-2 py-1 rounded-md flex items-center justify-center">
                        <AiFillHome/> St Joseph, Eugene, Oregon, USA
                    </button>
                </div>
                <h2 className='text-black mb-3 text-[26px] sm:text-[34px] leading-[40px] md:text-[44px] font-bold w-full xl:w-[600px] sm:leading-[56px] mx-auto max-w-full'>
                    The Best kindergarten You Can Get
                </h2>
                <p className="text-[15px] mb-10 text-gray w-full xl:w-[700px] max-w-full mx-auto">
                    The best cost-efficient choice for parents looking for high-quality education, Dedicated Timetabled Lessons Offered with qualified Staff.
                </p>
                <div className="xl:flex xl:justify-center gap-y-8 gap-x-12 flex-wrap grid sm:grid-cols-2 md:grid-cols-3 mb-14">
                    {
                        data.map((box,index)=>
                        {
                            return<span key={index+"axp"} className="flex gap-4 items-center justify-center">
                                <span style={{color:box.color}}
                                className="w-[56px] h-[56px] rounded-full flex justify-center items-center shdw">
                                    <box.icon className="text-[20px]"/>
                                </span>
                                <span className="flex flex-col items-start">
                                    <span className="text-[20px] font-bold">{box.num}</span>
                                    <span className="text-gray text-[15px]">{box.title}</span>
                                </span>
                            </span>
                        })
                    }
                </div>
                <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
                    <button 
                    className="hover:text-white hover:bg-blue duration-300 text-[16px] w-[124px] h-[51px] text-blue flex justify-center items-center rounded-md bg-[#066ac91a]">Book Now</button>
                    <span className="flex gap-2 items-center">
                        <span className="text-[38px] font-bold">4.5</span>
                        <span>
                            <ul className="flex gap-1 text-[orange]">
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStar/></li>
                                <li><FaStarHalfAlt/></li>
                            </ul>
                            <p className="text-[13px] text-gray">Students Love Us!</p>
                        </span>
                    </span>
                </div>
            </div>
            <div className="relative w-fit text-center mx-auto">
                <div><Image src="/images/Kindergarten/02.png" width="193px" height="348px"/></div>
                <figure className="absolute top-[37px] xl:top-[39px] left-[-50px] mt-4 mb-0 -z-10">
                <svg width="290.2px" height="296.4px">
                    <path className=" fill-[#0cbc87]" d="M287.8,112.4c0.7-5.5-17.6-26-41.7-47.9l0-0.1c-1.3-1.3-2.5-2.7-3.7-4.2c-0.7-0.9-2.3-1.9-4-3.2 c-1.8-1.4-3.6-3-5.4-4.5c-3.8-3.3-7.7-6.5-11.6-9.5c-3.8-2.9-8-5-11.6-8.5c-0.1-0.1-0.1-0.1-0.2-0.2c-4.5-3.4-9-6.6-13.4-9.7 c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0c-0.2-0.2-0.4-0.4-0.7-0.6c-0.9-0.7-1.9-1.3-2.8-2 c-0.3-0.2-0.6-0.4-0.9-0.7c-0.3-0.2-0.7-0.4-0.9-0.5c-1.4-0.8-2.8-2.1-4.2-3c-0.2-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.3,0-0.5-0.1-0.8-0.1c-14.8-9.1-28-14.9-37.1-14.7C140.6,2,131.1,6,120,12.6c-0.7,0.5-1.4,0.9-2.1,1.4c-0.7,0.4-1.3,0.9-1.9,1.1 c-6,3.7-12.3,8.1-18.8,13c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0.1 c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c-0.2,0.1-0.4,0.4-0.7,0.5C44.6,67.8-15.6,133,10.1,137.8 c0,0,10.4-0.7,27.2-1.8c-9.1,31.1-4.2,128.8,4.3,146.9c10.4,22,201.2,11.4,214.9,7.9c12.9-3.3,7.5-137.5,3.5-163.6 C295.7,126,286.5,122.7,287.8,112.4z"></path>
                </svg>
                </figure>
            </div>
            </div>
        </div>
    )
}