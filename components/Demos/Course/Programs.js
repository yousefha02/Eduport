import Image from 'next/image'
export default function Programs()
{
    const info =[
        {
            image:"01.svg",
            title:"Earn a Certificate",
            desc:"Get the right professional certificate program for you.",
            btn:"View Programs",
            btn_text:"white",
            btn_bg:"#066ac9",
            bg:"#0d6dfd1a"
        },
        {
            image:"02.svg",
            title:"Best Rated Courses",
            desc:"Enroll now in the most popular and best rated courses.",
            btn:"View Courses",
            btn_text:"black",
            btn_bg:"#f7c32e",
            bg:"#24292d1a"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <div className='flex lg:flex-row flex-col gap-6 justify-end'>
                    {
                        info.map((box,index)=>
                        {
                            return  <div key={index+"qui"} className="flex sm:flex-row flex-col sm:gap-4 items-center rounded-md px-8 pt-8" 
                                    style={{backgroundColor:box.bg}}>
                                    <div className='mb-2 sm:mb-10'>
                                        <h2 className="text-left text-[30px] leading-[40px] md:text-[30px] mb-3 font-[700] sm:leading-[38px] text-black">{box.title}</h2>
                                        <p className='text-black text-[16px] sm:text-[18px] mb-4'>{box.desc}</p>
                                        <button style={{backgroundColor:box.btn_bg,color:box.btn_text}}
                                        className="text-[15px] rounded-md px-4 py-2 font-[500]">{box.btn}</button>
                                    </div>
                                    <Image src={`/images/course/${box.image}`} width="314px" height="200px"/>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}