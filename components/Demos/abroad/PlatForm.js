import Image from 'next/image'
import { ImHome} from 'react-icons/im'
import { RiGlobalLine} from 'react-icons/ri'
import { FaHandshake} from 'react-icons/fa'
export default function Platform()
{
    const info = 
    [
        {
            icon:ImHome,
            number:'400+',
            title:'Universities',
            color:'#17a2b8',
            bgcolor:'#17a2b81a'
        },
        {
            icon:RiGlobalLine,
            number:'25+',
            title:'Countries',
            color:'#6f42c1',
            bgcolor:'#6f42c11a'
        },
        {
            icon:FaHandshake,
            number:'12+',
            title:'Years of Experience',
            color:'#f7c32e',
            bgcolor:'#f7c12b1a'
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative pb-[15px] pt-[120px]">
                <h2 className='text-[36px] text-black sm:text-[50px] md:text-[56px] lg:text-[70px] leading-[50px] sm:leading-[66px] 
                    lg:leading-[80px] font-bold mb-8 w-[730px] max-w-full'>
                    Best platform for study in Abroad.
                </h2>
                <div className='flex lg:flex-row flex-col gap-6'>
                    <div className=''>
                        <p className='text-[15px] text-dark mb-8'>
                            Contrasted by oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes
                        </p>
                        <button className='text-[#066ac9] bg-[#066ac91a] w-[133px] h-[51px] rounded-md font-[600] mb-6'>Get Inquiry</button>
                        <div className='grid sm:grid-cols-2 gap-5'>
                            {
                                info.map((box,index)=>
                                {
                                    return<div key={index+'pvb'} className="flex gap-4 items-center">
                                        <span className='w-[56px] h-[56px] rounded-md text-[28px] flex items-center justify-center' 
                                        style={{color:box.color,backgroundColor:box.bgcolor}}
                                        ><box.icon/></span>
                                        <span className='flex flex-col'>
                                            <span className='text-[24px] font-bold text-black'>{box.number}</span>
                                            <span className='text-[15px] text-dark'>{box.title}</span>
                                        </span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <Image src="/images/abroad/04.jpg" width="834px" height="551px" className='rounded-md'/>
                    </div>
                </div>
            </div>
        </div>
    )
}