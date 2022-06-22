import Image from "next/image"
import { FaStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa';
export default function Online()
{
    const list = [
        '06.jpg','03.jpg','04.jpg','05.jpg','06.jpg'
    ]
    return(
        <div className="bg-[#066ccb1a]">
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[100px] flex lg:flex-row flex-col gap-12 items-center">
                <div className="w-full lg:w-[55%] xl:w-[40%]">
                    <h2 className="leading-9 sm:leading-10 text-[32px] lg:text-[38px] font-bold text-black mb-4">Access to Free Online Courses</h2>
                    <p className="text-[15px] text-black mb-2">Enter your email address to get access</p>
                    <form className="mb-6 flex bg-[white] rounded-lg p-2 justify-between">
                        <input type="email" placeholder="Enter your email" className="w-[50%] border-none focus:outline-none focus:border-0"/>
                        <button className="w-[151px] h-[40px] bg-[#1d3b53] text-white rounded-[8px]">Request access!</button>
                    </form>
                    <div className="flex justify-between flex-col gap-5s sm:flex-row">
                        <ul className='flex'>
                                    {
                                        list.map((img,index)=>
                                        {
                                            return(
                                                <li key={index+'x1z'} 
                                                    className={`mr-[-10px] w-[40px] h-[40px] rounded-full border-[#fff] border-[2px]`}>
                                                    <Image className='rounded-full' alt=''
                                                    width='40px' height='40px' src={`/images/course/Free/${img}`}/>
                                                </li>
                                                )
                                                })
                                                }
                                                <li className='w-[40px] h-[40px] rounded-full mr-[-10px] flex items-center border-[#fff] border-[2px] 
                                                justify-center bg-[#066ac9] text-[14px] text-white z-10'>+1k</li>
                        </ul>
                        <div className="flex items-center gap-1">
                            <span className="text-[22px] font-bold">4.5/5.0</span>
                            <ul className=" text-[#f7c32e] text-[20px] flex">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={'/images/access/16.svg'} width="699px" height="494px"/>
                </div>
                </div>
                </div>
    )
}