import Image from "next/image"
export default function Brands()
{
    const brands =
    ['1svg.svg',"2svg.svg","3svg.svg","4svg.svg","5svg.svg","6svg.svg","7svg.svg","8svg.svg","9svg.svg","10svg.svg","11svg.svg"]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[100px]">
                <div className="flex flex-wrap justify-center gap-y-8 gap-x-10 lg:gap-x-16 lg:w-[90%] mx-auto">
                {
                    brands.map((img,index)=>
                    {
                        return(
                            <div className="lg:w-[80px] xl:w-[100px] md:w-[140px] sm:w-[182px] w-[134px]" key={index+"io1"}>
                                <Image src={`/images/access/${img}`} width="213px" height="46px" className="grayscale hover:grayscale-0 duration-300" alt="load"/>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}