import Image from 'next/image'
import { FaFacebookF} from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn} from 'react-icons/fa';

export default function Footer()
{
    return(
        <div className='footer'>
            <div className='px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px] relative flex gap-12 lg:flex-row flex-col'>
                <div className='w-[100%] lg:w-[24%]'>
                    <div className='mb-1'><Image src='/images/logo-light.svg' width="191px" height="40px"/></div>
                    <p className='text-[#cfd3d7] mb-4 text-[15px]'>Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
                    <ul className='flex gap-4'>
                        <li className='text-[#4267B2] bg-white p-3 text-[13px] shdw'><FaFacebookF/></li>
                        <li className='text-[#C13584] bg-white p-3 text-[13px] shdw'><BsInstagram/></li>
                        <li className='text-[#1DA1F2] bg-white p-3 text-[13px] shdw'><BsTwitter/></li>
                        <li className='text-[#0A66C2] bg-white p-3 text-[13px] shdw'><FaLinkedinIn/></li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-0 gap-4 w-[100%] lg:w-[52%]'>
                <div>
                    <h2 className='text-white text-[20px] font-bold mb-2 md:mb-6'>Company</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>About us</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Contact us</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>News and Blogs</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Library</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Career</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[20px] font-bold mb-2 md:mb-6'>Community</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Documentation</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Faq</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Forum</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Sitemap</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-[20px] font-bold mb-2 md:mb-6'>Teaching</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Become a teacher</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>How to guide</li>
                        <li className='text-[#cfd3d7] text-[16px] cursor-pointer hover:text-blue duration-300'>Terms &#38; Conditions</li>
                    </ul>
                </div>
                </div>
                <div className='w-[100%] lg:w-[24%]'>
                    <h2 className='text-white text-[20px] font-bold mb-6'>Contact</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[#cfd3d7] text-[16px] flex flex-col'>
                            <span>Toll free: <span className='text-white'>+1234 568 963</span></span>
                            <span className='text-[14px]'>(9:AM to 8:PM IST)</span>
                        </li>
                        <li className='text-[#cfd3d7] text-[16px]'>Email: <span className='text-white'>example@gmail.com</span></li>
                    </ul>
                    <div className='flex gap-2 mt-4'>
                        <Image src={'/images/app-store.svg'} width="140px" height="53px"/>
                        <Image src={'/images/google-play.svg'} width="140px" height="53px"/>
                    </div>
                </div>
            </div>
        </div>
    )
}