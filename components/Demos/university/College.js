import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import universitydata from "../../../Data/universitydata"
import Image from "next/image"
import { FaStar} from 'react-icons/fa';
import { FaStarHalfAlt} from 'react-icons/fa';
import { FaRegStar} from 'react-icons/fa';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { BsCheckLg} from 'react-icons/bs';
export default function College()
{
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

    return(
        <div className="college">
            <div className="py-[50px]">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-3 font-bold md:leading-[46px] text-black">
                    Top Listed College
                </h2>
                <p className="text-dark text-center text-[15px] mb-6">Perceived end knowledge certainly day sweetness why cordially.</p>
                <Swiper 
                navigation
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    }}>
                    {
                        universitydata.map((box,index)=>
                        {
                            return(
                                <SwiperSlide key={index+"nx"}>
                                <div className="border border-[#0000001a] rounded-md">
                                    <div className="relative">
                                        <Image className="rounded-t-md" src={`/images/university/${box.image}`} width="700px" height="496px"/>
                                        <div className="absolute flex justify-between w-full items-center bottom-[-30px] px-4">
                                            <div className="shdw bg-white rounded-md p-[.5rem] flex items-center justify-center"><Image src={`/images/university/${box.logo}`} width="60x" height="60px"/></div>
                                            <span className="text-white px-[12px] py-[2px] text-[18px] rounded-[4px]"
                                            style={{backgroundColor:box.open?"#0cbc87":"#d6293e"}}>Admission {box.open?"Open":"Closed"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-6 pt-12">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-white bg-black rounded-[4px] px-2 py-[2px] text-[14px]">{box.state}</span>
                                            <span className="flex gap-2 items-center">
                                                {rating(parseFloat(box.rate))}
                                                <span className="text-black text-[14px]">({box.rate})</span>
                                            </span>
                                        </div>
                                        <h3 className="text-black mb-3 text-[20px] font-bold hover:text-blue duration-300 cursor-pointer">{box.title}</h3>
                                        <p className="text-dark mb-3 text-[15px] flex gap-2 items-center">
                                            <FaMapMarkerAlt/>
                                            {box.address}
                                        </p>
                                        <ul className="desc flex text-[15px] flex-wrap text-black mb-4">
                                            {
                                                box.desc.map((des,index)=>
                                                {
                                                    return <li key={index+"mnz"}>{des}</li>
                                                })
                                            }
                                        </ul>
                                        <ul className="grid grid-cols-2 justify-between gap-y-2 mb-5">
                                            {
                                                box.services.map((service,index)=>
                                                {
                                                    return <li className="text-dark flex items-center gap-2 text-[15px]" key={index+"mqpa"}>
                                                            <BsCheckLg className="text-[#0cbc87]"/> 
                                                            <span>{service}</span>
                                                            </li>
                                                })
                                            }
                                        </ul>
                                        <button className="text-blue bg-[#066ac91a] hover:text-white text-[14px] font-[600]
                                        hover:bg-blue duration-300 w-[110px] h-[41px] flex items-center justify-center rounded-md">View More</button>
                                    </div>
                                </div>
                                </SwiperSlide>
                            )  
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}