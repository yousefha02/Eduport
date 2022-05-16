import React from "react"
import Video from '../Default/Video'
import { FaPlay} from 'react-icons/fa';

export default function Institutions()
{
    const [play,setPlay]= React.useState(false)
    function change(word)
    {
        word=='close'?setPlay(false):setPlay('true')
    }

    React.useEffect(()=>
    {
        if(typeof window !='undefined')
            play?document.body.style.overflow='hidden':document.body.style.overflow='visible'
    },[play])

    return(
        <>
        <div className="px-2 py-[90px] bg-[#fff]">
            <div className="sm:text-left text-center rounded-xl before:rounded-xl px-5 relative overlay flex items-center sm:px-6 md:px-10 xl:px-24 mx-auto bg-no-repeat bg-cover bg-center min-h-[85vh]" 
            style={{backgroundImage:`url(/images/education/03.jpg)`}}>
                <div className=" relative z-30 w-[600px] max-w-full">
                    <h4 className="bg-white m-auto sm:ml-0 rounded-full py-2 px-4 mb-6 text-[14px] w-fit">
                        <span className="rounded-full bg-[#0cbc87] text-white px-3 py-1 mr-2">New</span>
                        <span>One to one video call using web browser</span>
                    </h4>
                    <h2 className="text-white text-[36px] leading-[54px] sm:text-[42px] md:text-[48px] md:leading-[60px] lg:text-[56px] lg:leading-[72px] font-bold mb-4">
                    Start learning from <span className="text-[#ffc107]">best institutions</span>
                    </h2>
                    <p className="text-white mb-6">Demesne far-hearted suppose venture excited see had has. Dependent on so extremely delivered by. Yet no jokes worse her why.</p>
                    <div className='flex sm:flex-row flex-col  gap-8 items-center justify-start mb-6'>
                            <button className='bg-blue duration-300 hover:opacity-95 text-white rounded-md py-2 px-4'>Get Started</button>
                            <div className='flex items-center gap-5'>
                                <button onClick={()=>setPlay(true)} className='redvideo h-[40px] w-[40px] bg-white flex items-center justify-center rounded-full'><FaPlay className='text-[#d6293e]'/></button>
                                <span className='text-white font-semibold text-[14px]'>Watch Video</span>
                            </div>
                    </div>
                </div>
            </div>
            <figure className="absolute bottom-[-50px] left-0 w-full block mb-3">
            <svg className="fill-white" width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
            </svg>
            </figure>
        </div>
        <Video play={play} change={change}/>
        </>
    )
}