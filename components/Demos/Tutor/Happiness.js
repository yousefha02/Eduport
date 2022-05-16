import Image from 'next/image'
import { BsPatchCheckFill} from 'react-icons/bs';
export default function Happiness()
{
    const data = 
    [
        {
            image:'01.svg',
            title:"School tuition",
            student:"168",
            notes:['Private and public classes','Online and offline classes','Mon to Sat classes']
        },
        {
            image:'02.svg',
            title:"College tuition",
            student:"780",
            notes:['Only private classes','Online and offline classes','Sat and Sun classes']
        },
        {
            image:'03.svg',
            title:"Language tuition",
            student:"576",
            notes:['Private and public classes','Online and offline classes']
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[50px]">
                <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-6">
                    <div>
                        <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-2 font-bold md:leading-[46px] text-black">
                            Services that you need to know
                        </h2>
                        <p className="text-gray sm:mb-8 text-[15px]">
                        The 1-hour demo will provide Happiness prosperous impression had conviction For every delay in their Extremity now, strangers
                        </p>
                    </div>
                    {
                        data.map((box,index)=>
                        {
                            return(
                                <div key={index+'oip'} className="shdw px-4 py-5 rounded-md">
                                    <div className='flex items-center gap-4 mb-6'>
                                        <Image width="66px" height="60px" src={`/images/tutor/${box.image}`}
                                        alt="load"/>
                                        <span>
                                            <h3 className='text-[20px] font-[600]'>{box.title}</h3>
                                            <span className='text-[14px] text-dark'>Total {box.student} Students</span>
                                        </span>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        {
                                            box.notes.map((note,index)=>
                                            {
                                                return<span key={index+"nbv"} className="flex items-center gap-[6px]
                                                text-dark text-[13px]">
                                                    <BsPatchCheckFill className='text-[#0cbc87]'/>
                                                    <span>{note}</span>
                                                </span>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}