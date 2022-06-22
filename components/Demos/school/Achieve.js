import { BsFillPatchCheckFill} from 'react-icons/bs';
import Image from 'next/image'
export default function Achieve()
{
    const info = 
    [
        'You will never think that knowing education',
        'Never mess with education and here is the reason why',
        'This is why this year will be the year of education'
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[40px] mb-4 font-bold md:leading-[46px] text-black">
                        Achieve Your Goals With Eduport
                    </h2>
                    <p className="text-dark mb-8 text-[15px]">
                        Two before narrow not relied on how except moment myself Dejection assurance Mrs led certainly So gate at no only none open Betrayed. Narrow not relied on how except moment myself Dejection gate at no only none open Betrayed.
                    </p>
                    <div className='flex flex-col gap-3'>
                        {
                            info.map((box,index)=>
                            {
                                return(
                                    <div className='flex gap-[8px]' key={index+'az28'}>
                                        <BsFillPatchCheckFill className='text-[#0cbc87]'/>
                                        <p className='text-gray text-[15px] font-[500]'>{box}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='w-[132px] h-[52px] bg-[#24292d] font-bold text-white rounded-md mt-8'>Read More</button>
                </div>
                <div className='relative flex md:flex-row flex-col gap-8'>
                    <div className='flex flex-col gap-6'>
                        <div className='xl:w-[192px] xl:h-[170px] lg:w-[155px] lg:h-[122px] md:w-[262px] md:h-[120px] py-5 w-full bg-[#d6293e1a] rounded-md flex justify-center items-center
                        flex-col'>
                            <span className='text-black font-bold'>Since</span>
                            <h4 className='text-[#d6293e] text-[36px] font-bold'>1995</h4>
                        </div>
                        <div className='xl:w-[192px] xl:h-[170px] lg:w-[155px] lg:h-[122px] md:w-[262px] md:-[120px] py-5 w-full bg-[#066ac91a] rounded-md flex justify-center items-center
                        flex-col'>
                            <span className='text-blue text-[36px] font-bold'>26+</span>
                            <h4 className='text-black font-bold'>certified professor</h4>
                        </div> 
                    </div>
                    <div>
                        <Image src="/images/school/7.jpg" width="667px" height="1000px" alt='load' 
                        className='rounded-md'/>
                    </div>
                </div>
            </div>
        </div>
    )
}