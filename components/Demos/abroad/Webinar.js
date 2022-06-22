export default function Webinar()
{
    const info = 
    [
        {
            title:"Join Webinar about",
            basic:"Study in Canada",
            desc:"Apply for 2022 May intakes",
            bg:"#f7c32e80",
            color:"#d6293e"
        },
        {
            title:"Just started new",
            basic:"IELTS Batches",
            desc:"Accepted in more than 10K",
            bg:"#f5f7f9",
            color:"#17a2b8"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative grid lg:grid-cols-2 gap-6">
                {
                    info.map((box,index)=>
                    {
                        return(
                            <div key={index+"1o"} className="rounded-md text-center py-[40px] px-[10px]" style={{backgroundColor:box.bg}}>
                                <h4 className="mb-4 text-[18px]">{box.title}</h4>
                                <h2 style={{color:box.color}} className="text-[30px] sm:text-[36px] md:text-[46px] font-bold mb-3">{box.basic}</h2>
                                <h3 className="mb-5 font-bold text-[20px] sm:text-[22px] md:text-[26px]">{box.desc}</h3>
                                <button className="bg-[#24292d] w-[130px] h-[40px] rounded-[6px] text-white font-semibold">Register Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}