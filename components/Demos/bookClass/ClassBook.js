import Image from "next/image"
import { FaStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa';
export default function ClassBook()
{
    const info =
    [
        {
            image:'1.svg',
            title:"We care about students",
            desc:"Man children rejoiced yet uncommonly his ten who. Yet uncommonly his ten who diminution astonished."
        },
        {
            image:'2.svg',
            title:"Helping struggling students",
            desc:"Children rejoiced yet uncommonly his ten who. Yet uncommonly his ten who diminution astonished."
        }
    ]

    const list = [
        '06.jpg','03.jpg','04.jpg','05.jpg','06.jpg'
    ]

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[100px] grid lg:grid-cols-2 gap-16 items-center">
                <div className="lg:w-[475px] max-w-full">
                    <h2 className="text-[24px] sm:text-[30px] text-black font-bold leading-8 md:leading-10 mb-8">
                    Get awesome experience in an online class with our superior instructor
                    </h2>
                    <div className="mb-12">
                        {
                            info.map((box,index)=>
                            {
                                return(
                                    <div key={index+'mn1'} className="flex gap-4 mb-8">
                                        <div className="w-[80px] h-[80px] rounded-full shdw flex justify-center items-center shrink-0">
                                            <Image src={`/images/class/${box.image}`} width="45px" height="40px" alt="load"/>
                                        </div>
                                        <div>
                                            <h3 className="text-[20px] font-bold">{box.title}</h3>
                                            <p className="text-[15px] text-dark">{box.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-between flex-col gap-5s sm:flex-row">
                        <div>
                            <p className="text-dark text-[15px] mb-2">Our daily activated student</p>
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
                        </div>
                        <div>
                            <p className="text-dark text-[15px] mb-2">Based on 3265 ratings</p>
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
                </div>
                <div className="bg-[#066ac91a] rounded-md px-6 sm:px-12 py-8">
                    <h3 className='text-black font-bold text-[28px] md:text-[34px] mb-4'>
                        Book online class
                    </h3>
                    <div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label className='text-[#404448] text-opacity-50 text-[15px]'>First name *</label>
                            <input type="text" className='border-0 focus:border-0 focus:outline-0 duration-300 bg-[white] p-2 rounded-[4px]'/>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label className='text-[#404448] text-opacity-50 text-[15px]'>Last name *</label>
                            <input type="text" className='border-0 focus:border-0 focus:outline-0 duration-300 bg-[white] p-2 rounded-[4px]'/>
                        </div>
                        <div className='flex flex-col gap-2 mb-4'>
                            <label className='text-[#404448] text-opacity-50 text-[15px]'>Email *</label>
                            <input type="text" className='border-0 focus:border-0 focus:outline-0 duration-300 bg-[white] p-2 rounded-[4px]'/>
                        </div>
                        <div className='flex flex-col gap-2 mb-7'>
                            <label className='text-[#404448] text-opacity-50 text-[15px]'>Phone number *</label>
                            <input type="number" className='border-0 focus:border-0 focus:outline-0 duration-300 bg-[white] p-2 rounded-[4px]'/>
                        </div>
                        <div className='mb-3'>
                            <button className='w-[100%] h-[44px] flex items-center justify-center bg-blue text-white rounded-md font-[500]'>Book a class</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}