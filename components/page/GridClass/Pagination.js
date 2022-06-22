import { MdKeyboardArrowRight} from 'react-icons/md';
import { MdKeyboardArrowLeft} from 'react-icons/md';
export default function Pagination()
{
    const nums = ["1","2",'..','6']
    return(
        <ul className="mt-6 flex justify-center gap-3">
            <li className='w-[45px] h-[45px] text-blue bg-[#066ac91a] rounded-md flex justify-center items-center font-bold text-[18px]'><MdKeyboardArrowLeft/></li>
            {
                nums.map((num,index)=>
                {
                    return(
                        <li 
                        className={`w-[40px] h-[45px] hover:text-white hover:bg-blue duration-300 cursor-pointer
                        rounded-md flex justify-center items-center text-[16px]`} key={index+'ma3'}
                        style={{color:num=='2'?'white':'#066ac9',backgroundColor:num=='2'?'#066ac9':'#066ac91a'}}>{num}</li>
                    )
                })
            }
            <li className='w-[45px] h-[45px] text-blue bg-[#066ac91a] rounded-md flex justify-center items-center font-bold text-[18px]'><MdKeyboardArrowRight/></li>
        </ul>
    )
}