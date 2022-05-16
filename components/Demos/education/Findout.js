import Image from 'next/image'
import { FaUser} from 'react-icons/fa'
import { FaBook} from 'react-icons/fa'
import { FaClock} from 'react-icons/fa'
import { FaHome} from 'react-icons/fa'

export default function Findout()
{
let data =
[
    {
        icon:FaUser,
        title:"Learn with Experts",
        desc:"In no impression assistance contrasted Manners she wishing justice hastily new anxious At discovery objection we"
        ,color:"#ffc107",
        bg:"#FFF8D5"
    },
    {
        icon:FaBook,
        title:"Learn Anything",
        desc:"In no impression assistance contrasted Manners she wishing justice hastily new anxious At discovery objection we"
        ,color:"#0cbc87",
        bg:"#0cbc871a"
    },
    {
        icon:FaClock,
        title:"Flexible Learning",
        desc:"In no impression assistance contrasted Manners she wishing justice hastily new anxious At discovery objection we"
        ,color:"#6f42c1",
        bg:"#D9D7F1",
    },
    {
        icon:FaHome,
        title:"Industrial Standards",
        desc:"In no impression assistance contrasted Manners she wishing justice hastily new anxious At discovery objection we"
        ,color:"#17a2b8",
        bg:"#CAF0F8",
    }
]

{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <div className='flex lg:flex-row flex-col gap-8 items-center'>
                    <div className='w-[1000px] max-w-full'>
                        <h3 className='text-[24px] sm:text-[34px] text-black font-bold mb-2'>Find Out More About us, <span className='text-[#ffc107]'>Eduport</span> insides.</h3>
                        <Image alt="wait" className='rounded-md' src="/images/education/07.jpg" width="1000px" height="480px"/>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-x-4 gap-y-5'>
                        {
                            data.map((box,index)=>
                            {
                                return<div key={index+950}>
                                    <div style={{backgroundColor:box.bg}} className='mb-2 rounded-md w-[50px] h-[50px] flex items-center justify-center'><box.icon style={{color:box.color}}/></div>
                                    <h2 className='text-black text-[20px] font-bold '>{box.title}</h2>
                                    <p className='text-dark text-[14px]'>{box.desc}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
}