import React from "react"

export default function Questions()
{
    const data = 
    [
        {
            question:"What subject can you teach?",
            answer:"Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
            id:"c1",
            on:true
        },
        {
            question:"Will you give me the answer any time?",
            answer:"What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.",
            id:"c2",
            on:false
        },
        {
            question:"How much should I offer the sellers?",
            answer:"Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
            id:"c3",
            on:false
        },
        {
            question:"What subject can you teach?",
            answer:"Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
            id:"c4",
            on:false
        },
        {
            question:"Additional Options and Services",
            answer:"Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.",
            id:"c5",
            on:false
        },
        {
            question:"What's are the difference between a college and a university?",
            answer:"Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
            id:"c6",
            on:false
        }
    ]

    const [info,setInfo] = React.useState(data)

    function showing(id)
    {
        setInfo(back=>back.map(box=>box.id==id?{...box,on:!box.on}:{...box,on:false}));
    }

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[50px]">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-6 font-bold md:leading-[46px] text-black">
                    Frequently Asked Questions
                </h2>
                <div>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+"klq"} className="mx-auto max-w-full mb-5 sm:w-[90%] lg:w-[80%] xl:w-[67%]" onClick={()=>showing(box.id)}>
                                    <div className="sdw font-[600] cursor-pointer text-[16px] px-4 py-[12px] rounded-md flex justify-between items-center">
                                    <h3 className="sm:text-[16px] text-[15px]">{box.question}</h3>
                                    <span className="text-[20px]">{box.on?'-':'+'}</span>
                                    </div>
                                    {box.on&&<p className="text-dark px-[10px] pt-4 text-[15px]">{box.answer}</p>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}