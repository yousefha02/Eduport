import Image from 'next/image'
export default function Grades()
{
    const info = 
    [
        {
            desc:'1st to 6th grades',
            title:'Primary school',
            image:'03.svg',
            lessons:'35',
            color:'#f7c32e80'
        },
        {
            desc:'7th to 10th grades',
            title:'Middle school',
            image:'04.svg',
            lessons:'54',
            color:'#6f42c180'
        },
        {
            desc:'11th to 12th grades',
            title:'High school',
            image:'05.svg',
            lessons:'70',
            color:'#fd7e1780'
        },
        {
            desc:'11th to 12th grades',
            title:'Exams',
            image:'06.svg',
            lessons:'120',
            color:'#17a4ba80'
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        info.map((box,index)=>
                            {
                                return <div key={index+'uyi'} className="rounded-md px-6 group cursor-pointer"
                                style={{backgroundColor:box.color }}>
                                    <div className='py-4'>
                                        <p className='font-bold mb-4'>{box.desc}</p>
                                        <h2 className='text-[28px] font-bold group-hover:text-blue duration-300'>{box.title}</h2>
                                        <h3 className='text-[18px]'>{box.lessons} lessons</h3>
                                    </div>
                                    <div className=' opacity-50'>
                                        <Image src={`/images/school/${box.image}`} width="300px" height="280px"/>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </div>
        </div>
    )
}