import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack} from 'react-icons/io';
import { IoIosArrowForward} from 'react-icons/io';
import { BiFullscreen} from 'react-icons/bi';

export default function Movements()
{
    const images =
    [
        {
            image:'/images/Kindergarten/movement/1.jpg',
            height:"440px",
            width:"376px",
            id:0,
            wid:"519px",
            hig:"692px"
        },
        {
            image:'/images/Kindergarten/movement/2.jpg',
            height:"260px",
            width:"376px",
            id:1,
            wid:"800px",
            hig:"600px"
        },
        {
            image:'/images/Kindergarten/movement/3.jpg',
            height:"440px",
            width:"376px",
            id:2,
            wid:"519px",
            hig:"692px"
        },
        {
            image:'/images/Kindergarten/movement/4.jpg',
            height:"260px",
            width:"376px",
            id:3,
            wid:"800px",
            hig:"600px"
        },
        {
            image:'/images/Kindergarten/movement/5.jpg',
            height:"260px",
            width:"376px",
            id:4,
            wid:"800px",
            hig:"600px"
        },
        {
            image:'/images/Kindergarten/movement/6.jpg',
            height:"440px",
            width:"376px",
            id:5,
            wid:"519px",
            hig:"692px"
        },
        {
            image:'/images/Kindergarten/movement/7.jpg',
            height:"260px",
            width:"376px",
            id:6,
            wid:"800px",
            hig:"600px"
        },
        {
            image:'/images/Kindergarten/movement/8.jpg',
            height:"440px",
            width:"376px",
            id:7,
            wid:"519px",
            hig:"692px"
        }
    ]

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
        let currentIndex = images.findIndex(box=>box.id==imageToShow.id);
        if (currentIndex >= images.length - 1) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex + 1];
          setImageToShow(nextImage);
        }
      };
    
      const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = images.findIndex(box=>box.id==imageToShow.id);
        if (currentIndex <= 0) {
          setLightBoxDisplay(false);
        } else {
          let nextImage = images[currentIndex - 1];
          setImageToShow(nextImage);
        }
      };

    const imageCards = images.map((box,index) => {
    return(
        <div key={index+"opl"} className="group mb-[10px] mx-1 overs before:duration-300 rounded-md before:rounded-md relative">
            <Image className="image-card rounded-md" width={box.width} height={box.height} alt="" 
            src={box.image}/>
            <div onClick={() => showImage(box)} className=' cursor-pointer absolute group-hover:opacity-100 opacity-0 duration-300 top-[50%] left-[50%] group-hover:-translate-y-2/4 -translate-x-2/4 bg-black 
            text-[24px] px-[6px] z-[10] py-1 rounded-[6px] text-white -translate-y-1/4'>
               <BiFullscreen/>
            </div>
        </div>
    )
});


    return(
        <>
        <div className='gallery'>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto relative py-[50px]">
                <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-2 font-bold md:leading-[46px] text-black">
                    Our Lovely Movements
                </h2>
                <p className="text-gray mb-8 text-[15px]">
                    Perceived end knowledge certainly day sweetness why cordially
                </p>
                <div className='md:columns-3 columns-2 lg:columns-4'>
                    {imageCards}
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
        </>
    )
}