import Image from 'next/image'
export default function Discipline()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pb-[50px] flex lg:flex-row flex-col items-center gap-14">
                <div className='xl:w-[40%] lg:w-[50%] w-full'>
                    <div className='flex md:items-center justify-between border-b-[1px] border-[#9a9ea4] border-opacity-60 py-5
                    md:flex-row flex-col'>
                        <div className='flex md:items-center gap-4 md:flex-row flex-col items-start'>
                            <Image width="73px" height="70px" src="/images/school/01.svg"/>
                            <span className='text-[20px] text-black font-bold'>
                                Best school of the year
                            </span>
                        </div>
                        <span className='text-[20px] text-black font-bold'>2021</span>
                    </div>
                    <div className='flex md:items-center justify-between py-5
                    md:flex-row flex-col'>
                            <div className='flex md:items-center gap-4 md:flex-row flex-col items-start'>
                            <Image width="73px" height="70px" src="/images/school/01.svg"/>
                            <span className='text-[20px] text-black font-bold'>
                            Best discipline school of the year
                            </span>
                        </div>
                        <span className='text-[20px] text-black font-bold'>2022</span>
                    </div>
                </div>
                <div className='lg:w-[50%] xl:w-[60%]'>
                    <Image src="/images/school/06.jpg" width="867px" height="578px" className='rounded-md'/>
                </div>
            </div>
        </div>
    )
}