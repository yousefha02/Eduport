import Image from 'next/image'
export default function Curiosity()
{
    let info = 
    [
        {
            image:'01.jpg',
            name:"Jacqueline Miller",
            desc:"12th Board Exam",
            grade:'1',
            sympol:'st'
        },
        {
            image:'02.jpg',
            name:"Louis Ferguson",
            desc:"12th Board Exam",
            grade:'2',
            sympol:'nd'
        },
        {
            image:'03.jpg',
            name:"Frances Guerrero",
            desc:"12th Board Exam",
            grade:'1',
            sympol:'st'
        }
    ]
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative pb-[15px] pt-[120px] lg:flex-row flex-col flex justify-between">
                <div className='lg:w-[580px] xl:w-[700px] max-w-full'>
                    <h2 className='text-[42px] text-black sm:text-[50px] md:text-[56px] lg:text-[70px] leading-[50px] sm:leading-[66px] 
                    lg:leading-[80px] font-bold mb-4 flex'>
                        <span>
						<svg className="fill-[#f7c32e] inline" width="103" height="100" viewBox="0 0 103 100">
							<path d="M69.0166 69.7017C56.5959 80.712 39.8019 84.7239 25.181 80.1338C24.3382 79.9118 23.8242 78.9676 24.1599 78.1317C24.3819 77.2889 25.3261 76.7749 26.162 77.1106C39.7195 81.3514 55.3555 77.6122 66.9322 67.3502C78.5088 57.0882 84.0965 42.0136 81.5127 28.0453C81.3934 27.1819 81.9032 26.2994 82.7665 26.1801C83.6299 26.0608 84.5124 26.5706 84.6317 27.4339C87.4951 42.4465 81.4374 58.6914 69.0166 69.7017Z"></path>
							<path d="M26.0436 85.7222C25.923 85.8291 25.8627 85.8825 25.6887 85.9291C24.8651 86.3362 23.9689 86.0539 23.5015 85.2838C22.0666 82.5718 21.1317 76.2941 27.8958 72.0209C28.6659 71.5536 29.6224 71.7824 30.0898 72.5525C30.5571 73.3227 30.3283 74.2792 29.5582 74.7466C23.8589 78.3989 26.0805 83.213 26.3875 83.8023C26.7479 84.4518 26.5863 85.2412 26.0436 85.7222Z"></path>
							<path d="M90.0771 28.9603C89.5344 29.4413 88.7314 29.5071 88.1298 29.0713C87.635 28.7562 83.0688 25.9128 78.8126 31.1931C78.2562 31.9017 77.2257 31.9538 76.5706 31.4577C75.8621 30.9014 75.81 29.8708 76.306 29.2158C81.3597 23.0131 87.48 24.6943 90.0002 26.4442C90.769 26.9471 90.9349 27.9845 90.3786 28.693C90.258 28.7999 90.1374 28.9068 90.0771 28.9603Z"></path>
							<path d="M26.6015 44.2033C28.5257 46.3739 28.3271 49.6725 26.1565 51.5966C23.9859 53.5208 20.6873 53.3222 18.7632 51.1516C16.8391 48.981 17.0376 45.6824 19.2082 43.7583C21.3788 41.8342 24.6774 42.0327 26.6015 44.2033Z"></path>
							<path d="M56.8095 17.4259C58.7337 19.5965 58.5351 22.895 56.3645 24.8192C54.1939 26.7433 50.8953 26.5447 48.9712 24.3741C47.0471 22.2035 47.2456 18.905 49.4162 16.9808C51.5869 15.0567 54.8854 15.2552 56.8095 17.4259Z"></path>
						</svg>
                        School Might be Close, Not Your Curiosity
                        </span>
                    </h2>
                    <p className="text-[15px] text-gray mb-4 w-[500px] max-w-full">
                        We are so eager to be working with kids and making a difference in their careers. Being a mentor is what we have always wanted to be.
                    </p>
                    <button className='w-[131px] h-[51px] mb-8 bg-[#1d3b53] rounded-[6px] text-white'>
                        Apply Now
                    </button>
                </div>
                <div className='xl:w-[23%] max-w-full'>
                    <h3 className="text-black text-[26px] font-bold mb-4">Our 2022 Top-Ranked Student</h3>
                    <div className='flex flex-col gap-4'>
                        {
                            info.map((box,index)=>
                                {
                                    return(
                                        <div key={index+"b9"} className="flex items-center gap-4">
                                            <div className=' relative'>
                                                <Image alt='load' src={`/images/school/${box.image}`} width="82px" height="82px"
                                                className="rounded-full"/>
                                                <div className=' absolute right-0 bottom-0'>
                                                <Image src={`/images/school/sun.png`} width="32px" height="32px"/>
                                                <span className='absolute text-[12px] text-black font-bold top-[20%] left-[8px]'>
                                                    {box.grade}<sup>{box.sympol}</sup>
                                                </span>
                                            </div>
                                            </div>
                                            <div>
                                                <h3 className='text-[22px] text-black font-bold'>{box.name}</h3>
                                                <h4 className='text-[16px] text-dark'>{box.desc}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}