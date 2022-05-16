import { HiDotsHorizontal} from 'react-icons/hi';
import { HiOutlineSupport} from 'react-icons/hi';
import { TiDocumentText} from 'react-icons/ti';
import { MdAdsClick} from 'react-icons/md';
import { FaCloudUploadAlt} from 'react-icons/fa';
import { BsPuzzleFill} from 'react-icons/bs';

import Link from 'next/link'

export default function List(props)
{
    return(
        <div className='relative xl:border-none border-b border-[#9a9ea4] xl:py-0 py-[10px] w-full'>
            <span className='flex xl:justify-center justify-between items-center cursor-pointer px-6 xl:px-0'
            onClick={()=>props.click('list')}>
                <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
            </span>
            {
            props.list&&
            <div className='px-9 xl:p-0'>
            <ul className='xl:absolute relative w-full xl:w-[240px] smallScreen demos xl:bg-white rounded-lg p-3'>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><HiOutlineSupport className='text-[#ffc107] text-[18px]'/> Support</li></Link>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><TiDocumentText className='text-[#d63384] text-[18px]'/> Documentation</li></Link>
            <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><MdAdsClick className='text-[#0dcaf0] text-[18px]'/> RTL Demo</li></Link>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><FaCloudUploadAlt className='text-[#20c997] text-[18px]'/> Buy Eduport!</li></Link>
            <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><BsPuzzleFill className='text-[#fd7e14] text-[18px]'/> Components</li></Link>
            </ul>
            </div>
            }
        </div>

    )
}