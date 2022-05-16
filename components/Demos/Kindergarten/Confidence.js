import Image from "next/image"
export default function Confidence()
{
    const data = 
    [
        {
            image:"1.svg",
            title:"We care about kids",
            desc:"Man children rejoiced. Yet uncommonly his ten who diminution astonished."
        },
        {
            image:"2.svg",
            title:"Building life-long learners",
            desc:"Who diminution astonished. Yet uncommonly his ten who diminution astonished"
        },
        {
            image:"3.svg",
            title:"Helping struggling students",
            desc:"Man children rejoiced. Yet uncommonly his ten who diminution astonished."
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative pb-[50px]">
                <div className="grid md:grid-cols-2 md:gap-16 md:items-center mb-14">
                    <h2 className="text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-3 font-bold md:leading-[46px] text-black">
                        How we care for our students and build their confidence
                    </h2>
                    <span>
                        <p className="text-[15px] mb-4 text-gray">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
                        <button className="bg-[#f7c32e] rounded-md w-[122px] h-[40px] flex justify-center items-center">Contact Us</button>
                    </span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-20">
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div key={index+"asdo"} className="text-center">
                                    <div className="shdw mb-4 w-[112px] h-[112px] rounded-full mx-auto flex justify-center items-center">
                                        <Image src={`/images/Kindergarten/confidence/${box.image}`} width="64px" height="56px"/>
                                    </div>
                                    <h3 className="text-[20px] font-[600]">{box.title}</h3>
                                    <p className="text-[15px] text-gray">{box.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}