import Image from "next/image"
export default function It()
{
    const info =
    [
        {
            image:'01.jpg',
            title:'Digital Marketing',
            course:"23"
        },
        {
            image:'02.jpg',
            title:'Figma',
            course:"16"
        },
        {
            image:'03.jpg',
            title:'Python',
            course:"32"
        },
        {
            image:'04.jpg',
            title:'Angular',
            course:"48"
        },
        {
            image:'05.jpg',
            title:'React-Native',
            course:"31"
        },
        {
            image:'06.jpg',
            title:'Sketch',
            course:"38"
        },
        {
            image:'07.jpg',
            title:'Javascript',
            course:"29"
        },
        {
            image:'08.jpg',
            title:'Bootstrap',
            course:"21"
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative">
                <h2 className="text-center text-[30px] sm:text-[36px] leading-[40px] sm:leading-[44px] md:text-[40px] mb-3 lg:text-[42px] font-[700] md:leading-[50px] text-black">Top Courses for IT</h2>
                <p className="text-dark text-center text-[15px] mb-6">Information Technology Courses to expand your skills and boost your career &amp; salary</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
                    {
                        info.map((box,index)=>
                        {
                            return(
                                <div key={index+'xbz'} className="mx-auto rounded-md relative over before:rounded-md">
                                    <Image src={`/images/course/langs/${box.image}`} className='rounded-md' width="484px" height="363px"/>
                                    <div className=" z-10 absolute bottom-[25px] left-[20px] text-white">
                                        <h3 className="font-bold text-[20px]">{box.title}</h3>
                                        <p className="text-[15px]">{box.course} Courses</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}