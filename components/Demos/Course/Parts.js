import { AiTwotoneSetting} from 'react-icons/ai';
import { RiHeartPulseLine} from 'react-icons/ri';
import { FaPhotoVideo} from 'react-icons/fa';
import { BiCodeBlock} from 'react-icons/bi';
import { MdOutlineDesignServices} from 'react-icons/md';
import { BsFillBagFill} from 'react-icons/bs';
import { FaMusic} from 'react-icons/fa';
import { BsPaintBucket} from 'react-icons/bs';

export default function Parts()
{
    const info =
    [
        {
            icon:AiTwotoneSetting,
            title:'Math & Logic',
            course:'89',
            color:'#6f42c1',
            bg:"#6f42c11a"
        },
        {
            icon:RiHeartPulseLine,
            title:'Health & Fitness',
            course:'95',
            color:'#d6293e',
            bg:"#d6293d1a"
        },
        {
            icon:FaPhotoVideo,
            title:'Photography',
            course:'38',
            color:'#24292d',
            bg:"#24292d1a"
        },
        {
            icon:BiCodeBlock,
            title:'Development',
            course:'105',
            color:'#0cbc87',
            bg:"#0cbb861a"
        },
        {
            icon:MdOutlineDesignServices,
            title:'Design',
            course:'72',
            color:'#fd7e14',
            bg:"#fd7e171a"
        },
        {
            icon:BsFillBagFill,
            title:'Busniess',
            course:'68',
            color:'#0d6efd',
            bg:"#0d6dfd1a"
        },
        {
            icon:FaMusic,
            title:'Music',
            course:'51',
            color:'#17a2b8',
            bg:"#17a4ba1a"
        },
        {
            icon:BsPaintBucket,
            title:'Painting',
            course:'69',
            color:'#f7c32e',
            bg:"#f7c32e1a"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px]">
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+'opq'} className="flex items-center shdw py-4 px-5 gap-4 rounded-md">
                                    <span style={{backgroundColor:box.bg,color:box.color}} 
                                    className="w-[56px] h-[56px] flex items-center justify-center rounded-full">   
                                        <box.icon className='text-[24px]'/>
                                    </span>
                                    <span className='flex flex-col'>
                                        <span className='text-[20px] font-bold text-black'>{box.title}</span>
                                        <span className='text-dark text-[14px]'>{box.course} Courses</span>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}