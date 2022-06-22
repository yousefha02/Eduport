import Image from 'next/image'
export default function Learn()
{
    return(
        <div className='bg-[#f5f7f9]'>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative pt-[120px] pb-[80px] flex flex-wrap md:flex-nowrap gap-16 items-center justify-center">
                <div className='md:order-1 order-2 md:w-fit w-[37%]'>
                    <Image src="/images/pages-courses/category-1.svg" alt="load" width="298px" height="339px"/>
                </div>
                <div className='md:order-2 order-1 md:w-fit w-full'>
                    <h2 className="text-center text-[26px] sm:text-[30px] leading-[32px] sm:leading-[40px] md:text-[36px] lg:text-[42px] xl:text-[44px] mb-6 font-bold md:leading-[46px] text-black">
                        What do you want to learn?
                    </h2>
                    <p className='text-[15px] text-dark mb-6 text-center'>
                        Grow your skill with the most reliable online courses and certifications
                    </p>
                    <div className='w-full bg-white flex justify-between p-2 rounded-md'>
                        <input type="text" placeholder="Search course" className='bg-transparent focus:outline-none px-4 w-[80%]'/>
                        <button className='w-[84px] h-[40px] bg-[black] text-white font-bold rounded-md'>Search</button>
                    </div>
                </div>
                <div className='md:order-3 order-3 md:w-fit w-[37%]'>
                    <Image src="/images/pages-courses/category-2.svg" alt="load" width="264px" height="268px"/>
                </div>
            </div>
        </div>
    )
}