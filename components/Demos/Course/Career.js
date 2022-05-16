import { GoSearch} from 'react-icons/go';
import ImageVideo from './ImageVideo';
export default function Career()
{
    return(
        <div className='light relative z-[-2]'>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pt-[140px] pb-[0px] relative">
                <div className='lg:w-[65%] max-w-full mx-auto text-center'>
                    <h2 className="text-[30px] sm:text-[36px] leading-[40px] sm:leading-[44px] md:text-[40px] mb-3 lg:text-[42px] font-[700] md:leading-[50px] text-black">
                        Education, talents, and career opportunities. All in one place.
                    </h2>
                    <p className="text-dark text-[15px] mb-6">
                    Get inspired and discover something new today. Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science.
                    </p>
                    <div className='border-none shdw rounded-md border flex justify-between 
                        px-4 py-2 items-center mb-5 gap-2 md:w-[500px] mx-auto max-w-full '>
                            <input placeholder='Find your course' className='focus:outline-0 bg-transparent sm:flex-1'/>
                            <span className='bg-blue text-white flex items-center justify-center px-3 py-3 rounded-md font-bold
                            text-[18px]'><GoSearch/></span>
                    </div>
                </div>
            <ImageVideo/>
            </div>
            <div className='absolute bottom-0 left-0 bg-[#fff] z-[-1] h-[80px] lg:h-[240px] w-full'></div>
        </div>
    )
}