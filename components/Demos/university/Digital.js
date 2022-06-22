import Image from 'next/image'
export default function Digital()
{
    return(
        <div>
            <div>
                <div className="digital before:rounded-md relative bg-no-repeat bg-cover bg-center h-[70vh] sm:h-[80vh] rounded-md flex justify-center items-center">
                    <div className="w-[600px] max-w-full mx-auto relative px-4 text-center">
                        <Image src='/images/university/uni-logo-01.svg' width="70px" height="70px" alt='load'/>
                        <h2 className='text-white leading-[45px] md:leading-[65px] mb-2 text-[34px] md:text-[42px] lg:text-[54px] text-center font-bold'> 
                            Get New Skills <br/> for the digital world
                        </h2>
                        <p className='text-white text-[15px] text-center mb-6'>
                        Get the right professional certificate program for you. See what course other students and experts in your domain are learning on
                        </p>
                        <div>
                            <button className="text-black bg-white text-[15px] w-[118px] h-[40px] flex justify-center items-center rounded-[4px] mx-auto font-normal">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}