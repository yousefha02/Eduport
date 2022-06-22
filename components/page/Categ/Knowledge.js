import Image from 'next/image'
export default function Knowledge()
{
    const info = 
    [
        {
            img:'1.svg',
            title:'Data Science',
            color:'#0cbc871a',
            num:'15'
        },
        {
            img:'2.svg',
            title:'IT & Software',
            color:'#fd7e171a',
            num:'22'
        },
        {
            img:'3.svg',
            title:'Engineering',
            color:'#d6293d1a',
            num:'53'
        },
        {
            img:'4.svg',
            title:'Web Development',
            color:'#6f42c11a',
            num:'10'
        },
        {
            img:'5.svg',
            title:'Finance',
            color:'#fd7e171a',
            num:'18'
        },
        {
            img:'6.svg',
            title:'Medical',
            color:'#343a401a',
            num:'12'
        },
        {
            img:'7.svg',
            title:'Architecture',
            color:'#0cbc871a',
            num:'30'
        },
        {
            img:'8.svg',
            title:'Art & Design',
            color:'#343a401a',
            num:'44'
        },
        {
            img:'9.svg',
            title:'Photoprahy',
            color:'#6f42c11a',
            num:'37'
        },
        {
            img:'10.svg',
            title:'Musics',
            color:'#d6293d1a',
            num:'11'
        },
        {
            img:'11.svg',
            title:'Marketing',
            color:'#0cbc871a',
            num:'48'
        },
        {
            img:'12.svg',
            title:'Accounting',
            color:'#066ac91a',
            num:'15'
        },
    ]

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[40px]">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-2 font-bold md:leading-[46px] text-black">
                    Choose a Categories
                </h2>
                <p className='text-[15px] text-dark mb-7 text-center'>
                    Perceived end knowledge certainly day sweetness why cordially
                </p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+'nab5'} style={{backgroundColor:box.color}} className="rounded-md p-6 text-center group
                                hover:translate-y-[-4px] relative duration-300">
                                    <div className='w-[80px] h-[80px] bg-white rounded-full mx-auto flex justify-center items-center'>
                                        <Image alt='load' src={`/images/pages-courses/${box.img}`} width="56px" height="52px"/>
                                    </div>
                                    <h3 className='text-black text-[20px] font-bold mt-4 mb-1 group-hover:text-blue duration-300'>{box.title}</h3>
                                    <h4 className='text-black text-[16px] font-semibold'>{box.num} courses</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}