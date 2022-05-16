import Image from "next/image"
import { AiFillCheckCircle} from 'react-icons/ai';
import { FaUserGraduate} from 'react-icons/fa';
import { FaGraduationCap} from 'react-icons/fa';
import { BsFillFilePostFill} from 'react-icons/bs';
import { BsLaptop} from 'react-icons/bs';
import { BiTime} from 'react-icons/bi';
export default function Wbs()
{
    const info=
    [
        {
            icon:FaUserGraduate,
            title:"Undergraduate",
            time:"Onsite",
            color:"#f7c32e"
        },
        {
            icon:FaGraduationCap,
            title:"Graduate",
            time:"Online + Onsite",
            color:"#17a2b8"
        },
        {
            icon:BsFillFilePostFill,
            title:"Post Graduate",
            time:"Online + Onsite",
            color:"#dc3545"
        },
        {
            icon:BsLaptop,
            title:"Online education",
            time:"Coming soon...",
            color:"#6f42c1"
        }
    ]
    return(
        <div>
            <div className="pb-[60px]">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="grid grid-cols-2 gap-5 relative">
                        <div>
                            <Image src='/images/university/03.jpg' alt="wait" width="300px" height="350px" 
                            className="rounded-md"/>
                        </div>
                        <div className="pt-10">
                            <Image src='/images/university/04.jpg' alt="wait" width="300px" height="400px"
                            className="rounded-md"/>
                        </div>
                        <div className=" absolute bottom-0 bg-white md:bottom-[-15px] shdw rounded-md p-3 w-[277px] lg:w-[203px] xl:w-[240px] max-w-full">
                            <span className="flex gap-2 items-center mb-1">
                                <span className="text-[15px]">Congratulations</span>
                                <AiFillCheckCircle className="text-[#0cbc87] text-[18px]"/>
                            </span>
                            <p className="text-dark text-[13px]">Your admission is successfully confirmed.</p>
                        </div>
                    </div>
                    <div className="xl:pt-14">
                        <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-3 font-bold md:leading-[46px] text-black">
                            Welcome to WBS University
                        </h2>
                        <p className="text-dark text-[15px] mb-6">
                            Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed.
                        </p>
                        <div className="grid grid-cols-2 justify-between gap-6 mb-8">
                            {
                                info.map((box,index)=>
                                {
                                    return(
                                        <div key={index+"bns"} className="flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-4">
                                            <span className="w-[42px] flex items-center justify-center h-[42px] rounded-md" style={{backgroundColor:box.color}}>
                                                <box.icon className="text-white text-[24px]"/>
                                            </span>
                                            <span className="flex flex-col">
                                                <span className="text-[15px] text-black">{box.title}</span>
                                                <span className="flex items-center text-[13px] gap-2 text-dark">
                                                    <BiTime/> <span>{box.time}</span>
                                                </span>
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="w-[137px] h-[40px] text-blue bg-[#066ac91a] rounded-md
                        hover:text-white hover:bg-blue duration-300">More about us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}