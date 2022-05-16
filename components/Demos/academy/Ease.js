import Image from 'next/image'
export default function Ease()
{
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <div className='relative gradient rounded-md p-8 pb-14 sm:pb-8 '>
                    <div className='absolute bottom-[-7px] xl:left-8 left-0 lg:block hidden'>
                        <Image src='/images/academy/01.png' width="260px" height="323px"/>
                    </div>
                        <div className='flex flex-1 md:flex-row flex-col text-white items-start md:items-center justify-center md:justify-between px-[16px] lg:px-0 min-h-[180px]'>
                            <div className='lg:block hidden'></div>
                            <div className='lg:pl-24 xl:pl-10 md:w-[50%] lg:w-fit'>
                                <h3 className='text-[24px] sm:text-[30px] leading-[36px] mb-2 lg:text-[34px] font-bold'>Become an Instructor!</h3>
                                <p className='text-[15px] mb-3'>Teach thousands of students and earn money with ease!</p>
                            </div>
                            <div className='pr-2'>
                                <button className='bg-white text-[black] rounded-[4px] text-[15px] px-4 py-[10px]'>Get Started Now!</button>
                            </div>
                        </div>
                    <div className=' absolute top-[-26px] right-8'>
                        <Image src="/images/academy/pencil.svg" width="74px" height="63px"/>
                    </div>
                    <div className=' absolute bottom-[-30px] rotate-[80deg] left-[50%]'>
                        <Image src="/images/academy/graduated.svg" width="68px" height="69px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}