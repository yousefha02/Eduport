import { BsCheck} from 'react-icons/bs'
import Image from'next/image'
export default function Education()
{
    const info = 
    [
        {
            title:'Extensive tie-ups',
            des:'Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.'
        },
        {
            title:'Committed to your success',
            des:'Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.'
        },
        {
            title:'Affordable solutions',
            des:'Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.'
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative grid lg:grid-cols-2 gap-6 items-center">
                <div>
                    <h2 className="text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[40px] mb-8 font-bold md:leading-[46px] text-black">
                        About Eduport Abroad Education
                    </h2>
                    <p className="text-[15px] text-dark mb-6">
                        How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask to style Me mean able my by in they Extremity now strangers contained.
                    </p>
                    <div className='grid gap-6 mb-6'>
                        {
                            info.map((box,index)=>
                            {
                                return(
                                    <div className='flex ms:flex-row flex-col gap-3' key={index+'qqq'}>
                                        <div className=' shrink-0 w-[42px] h-[42px] text-[24px] rounded-md bg-[#20c997] flex items-center justify-center text-white'>
                                            <BsCheck/>
                                        </div>
                                        <div>
                                            <h3 className='text-[20px] font-bold'>{box.title}</h3>
                                            <p className='text-dark text-[15px]'>{box.des}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='bg-black w-[111px] h-[41px] rounded-md text-white'>Read more</button>
                </div>
                <div>
                    <Image src="/images/abroad/1.jpg" width="902px" height="993px" className='rounded-md'/>
                </div>
            </div>
        </div>
    )
}