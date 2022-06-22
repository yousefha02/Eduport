import Image from 'next/image'
export default function Countries()
{
    const info = 
    [
        {
            img:'1.svg',
            title:'Canada'
        },
        {
            img:'2.svg',
            title:'Germany'
        },
        {
            img:'3.svg',
            title:'New Zealand'
        },
        {
            img:'4.svg',
            title:'United Kingdom'
        },
        {
            img:'5.svg',
            title:'USA'
        },
        {
            img:'6.svg',
            title:'Australia'
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative xl:flex gap-4">
                <h2 className='text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[40px] mb-4 font-bold md:leading-[46px] text-black xl:w-[25%]'>
                Top countries to study
                </h2>
                <div className='sm:grid-cols-2 md:grid-cols-3 grid gap-6 xl:w-[75%]'>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div className='flex gap-3 shdw rounded-md px-6 py-6 items-center' key={index+'a129'}>
                                    <Image src={`/images/abroad/${box.img}`} width="60px" height="40px" alt='load'/>
                                    <h3 className='font-bold text-[20px]'>{box.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}