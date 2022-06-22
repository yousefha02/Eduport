import Image from "next/image"
export default function Languages()
{
    const info =
    [
        {
            title:'French',
            img:'20.svg'
        },
        {
            title:'German',
            img:'21.svg'
        },
        {
            title:'Espanol',
            img:'22.svg'
        },
        {
            title:'English',
            img:'23.svg'
        },
        {
            title:'Hindi',
            img:'24.svg'
        },
        {
            title:'Italian',
            img:'25.svg'
        },
        {
            title:'Arabic',
            img:'26.svg'
        },
        {
            title:'English',
            img:'23.svg'
        },
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[40px]">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-6 font-bold md:leading-[46px] text-black">
                        Choose Languages
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        info.map((box,index)=>
                        {
                            return<div key={index+'p71'} className="bg-[#f5f7f9] rounded-md flex gap-3 items-center p-4 justify-center">
                                <Image alt="load" width="60px" height="40px" src={`/images/pages-courses/${box.img}`}/>
                                <h3 className="text-black text-[22px] font-bold">{box.title}</h3>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}