import Image from "next/image"
export default function Offer()
{
    const data =
    [
        {
            image:"1.svg",
            title:"Preschool",
            desc:"Man children rejoiced. Yet uncommonly his ten.",
            num:'5'
        },
        {
            image:"2.svg",
            title:"Nursery",
            desc:"Children rejoiced. Yet uncommonly his ten. certainly.",
            num:'8'
        },
        {
            image:"3.svg",
            title:"Sports",
            desc:"Yet uncommonly his ten. certainly day sweetness why cordially.",
            num:'6'
        },
        {
            image:"4.svg",
            title:"Music",
            desc:"Certainly day sweetness why cordial Man children rejoiced.",
            num:'7'
        }
    ]

    return(
        <div className="light">
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[50px]">
                <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-3 font-bold md:leading-[46px] text-black">
                    Courses We Offer
                </h2>
                <p className="text-gray mb-8 text-[15px]">Perceived end knowledge certainly day sweetness why cordially</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-14 text-center">
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div key={index+"zxc"} className="shdw rounded-md p-5 group">
                                    <Image src={`/images/Kindergarten/offer/${box.image}`} width="143px" height="100px"/>
                                    <h3 className="text-[20px] group-hover:text-blue duration-300 font-bold mt-2 mb-2">{box.title}</h3>
                                    <p className="text-gray text-[15px] mb-1">{box.desc}</p>
                                    <p className="text-gray text-[15px]">{box.num} Course</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}