import coursesmarket from "../../../Data/coursesmarket"
import Image from 'next/image'
import { FaUserGraduate} from 'react-icons/fa'
import { FaStar} from 'react-icons/fa'
import { FaCircle} from 'react-icons/fa'
import { FaShoppingCart} from 'react-icons/fa'

export default function Courses()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <h3 className='text-[24px] sm:text-[34px] text-black font-bold mb-1'>Our <span className='text-[#ffc107]'>Trending</span> Courses</h3>
                <p className="text-dark text-[14px] mb-3">Check out most 🔥 courses in the market</p>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {
                        coursesmarket.map((box,index)=>
                        {
                            return(
                                <div key={index+'cc'} className="rounded-lg bg-white shdw p-2 pb-4">
                                    <div className="overlayImage relative before:rounded-t-md group">
                                        <Image alt="wait" src={`/images/education/courses/${box.image}`} width="732px" height="500px"
                                        className=" rounded-t-md"/>
                                        <button className="z-[10] absolute text-[#dc3545] bg-[white] w-[40px] h-[40px] duration-300
                                        flex justify-center items-center rounded-full opacity-0  translate-y-[40px]  group-hover:translate-y-[0px] group-hover:opacity-100 top-[25px] right-[15px]">
                                            <FaShoppingCart/></button>
                                    </div>
                                    <div className="px-6">
                                    <div className="flex justify-between items-center py-2 border-b-[1px] border-[#9a9ea4] border-opacity-30 mb-3">
                                        <div className="flex gap-6">
                                            <span className="flex gap-3 items-center">
                                                <span className="bg-[#fd7e141a] rounded-full flex justify-center items-center w-[40px] h-[40px]"><FaUserGraduate className="text-[#fd7e14] text-[14px]"/></span>
                                                <span>{box.students}</span>
                                            </span>
                                            <span className="flex gap-3 items-center">
                                                <span className="bg-[#f7c32e1a] rounded-full flex justify-center items-center w-[40px] h-[40px]"><FaStar className="text-[#f7c32e] text-[14px]"/></span>
                                                <span>{box.stars}</span>
                                            </span>
                                        </div>
                                        <div><Image alt="wait" src={`/images/education/courses/${box.perosn}`} width="40px" height="40px" className="rounded-full"/></div>
                                    </div>
                                    <div>
                                        <h2 className=" cursor-pointer hover:text-blue duration-300 leading-[26px] mb-3 text-black font-semibold text-[20px]">{box.title}</h2>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[#17a2b8] bg-[#17a2b81a] px-2 text-[13px] flex justify-center items-center gap-2 rounded-md">
                                                <FaCircle/>
                                                {box.type}
                                                </span>
                                            <span className="text-[#0cbc87] font-bold text-[28px]">{box.price}</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}