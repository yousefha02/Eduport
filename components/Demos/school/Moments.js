import Image from "next/image"
import React from 'react'
import { BiFullscreen} from 'react-icons/bi';
import { IoIosArrowBack} from 'react-icons/io';
import { IoIosArrowForward} from 'react-icons/io';
export default function Moments()
{
    const [imageToShow, setImageToShow] = React.useState({});
    const [lightboxDisplay, setLightBoxDisplay] = React.useState(false);

    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };
    
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };
    
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = info.findIndex(box=>box.id==imageToShow.id);
        if (currentIndex >= info.length - 1) {
        setLightBoxDisplay(false);
        } else {
        let nextImage = info[currentIndex + 1];
        setImageToShow(nextImage);
        }
    };
    
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = info.findIndex(box=>box.id==imageToShow.id);
        if (currentIndex <= 0) {
        setLightBoxDisplay(false);
        } else {
        let nextImage = info[currentIndex - 1];
        setImageToShow(nextImage);
        }
    };

        const info = 
        [
        {
            image:"/images/school/11.jpg",
            wid:'519px',
            hig:'692px',
            id:1
        },
        {
            image:"/images/school/12.jpg",
            wid:'519px',
            hig:'692px',
            id:2
        },
        {
            image:"/images/school/13.jpg",
            wid:'1038px',
            hig:'692px',
            id:3
        },
        {
            image:"/images/school/14.jpg",
            wid:'519px',
            hig:'692px',
            id:4
        },
        {
            image:"/images/school/15.jpg",
            wid:'1038px',
            hig:'692px',
            id:5
        },
        {
            image:"/images/school/16.jpg",
            wid:'519px',
            hig:'692px',
            id:6
        },
        {
            image:"/images/school/17.jpg",
            wid:'519px',
            hig:'692px',
            id:7
        }
    ]

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[60px] relative">
                <h2 className="text-center text-[26px] sm:text-[30px] leading-[36px] sm:leading-[44px] md:text-[34px] xl:text-[40px] mb-8 font-bold md:leading-[46px] text-black">
                    Our Best Moments
                </h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="flex gap-4 flex-col">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className=" relative group overs">
                                <Image src="/images/school/11.jpg" width="900px" height="1200px" className="rounded-md image-card "/>
                                <div onClick={() => showImage(info[0])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                                </div>
                            </div>
                            <div className="relative group overs">
                                <Image src="/images/school/12.jpg" width="900px" height="1200px" className="rounded-md image-card "/>
                                <div onClick={() => showImage(info[1])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                                </div>
                            </div>
                        </div>
                        <div className=" relative group overs">
                            <Image src="/images/school/13.jpg" width="900px" height="600px" className="rounded-md image-card "/>
                            <div onClick={() => showImage(info[2])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                            </div>    
                        </div>
                    </div>
                    <div>
                        <div className=" relative group overs">
                            <Image src="/images/school/14.jpg" width="900px" height="1200px" className="rounded-md image-card "/>
                            <div onClick={() => showImage(info[3])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                            </div>    
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col ">
                        <div className=" relative group overs">
                            <Image src="/images/school/15.jpg" width="900px" height="600px" className="rounded-md image-card "/>
                            <div onClick={() => showImage(info[4])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                            </div>    
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className=" relative group overs">
                                <Image src="/images/school/16.jpg" width="900px" height="1200px" className="rounded-md image-card "/>
                                <div onClick={() => showImage(info[5])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                                </div>
                            </div>
                            <div className=" relative group overs">
                                <Image src="/images/school/17.jpg" width="900px" height="1200px" className="rounded-md image-card "/>
                                <div onClick={() => showImage(info[6])} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
                                text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
                                <BiFullscreen/>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {lightboxDisplay?
            <div id="lightbox" className='px-6' onClick={hideLightBox}>
                <button onClick={showPrev}><IoIosArrowBack className='text-white text-[48px]'/></button>
                <Image src={imageToShow.image} width={imageToShow.wid} 
                height={imageToShow.hig} alt='load'></Image>
                <button onClick={showNext} className='text-white text-[48px]'><IoIosArrowForward/></button>
            </div>
            :''}
        </div>
    )
}