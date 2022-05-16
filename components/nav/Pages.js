import Link from 'next/link'
import { MdKeyboardArrowDown} from 'react-icons/md';
import React, { useState } from 'react'
import { HiDotsHorizontal} from 'react-icons/hi';

export default function Pages(props)
{
    const links = 
    {
        course:false,
        about:false,
        shop:false,
        help:false,
        auth:false
    }

    const[data,setData]=useState(links)

    function display(word)
    {
        setData(back=>
            {
                return{
                    ...back,
                    course:false,
                    about:false,
                    shop:false,
                    help:false,
                    auth:false,
                    [word]:!back[word]
                }
            })
    }
    function view()
    {
        setData(back=>
            {
                return{
                    ...back,
                    course:false,
                    about:false,
                    shop:false,
                    help:false,
                    auth:false,
                }
            })
            props.click('pages')
    }

    return(
        <div className='w-full relative xl:border-none  border-b border-[#9a9ea4] xl:py-0 py-[6px]'>
            <span className='flex xl:justify-center justify-between items-center cursor-pointer px-6 xl:px-0'
            onClick={view}>
                <span className='text-dark p-[6px] rounded-md text-[15px] font-semibold'>Pages</span>
                <MdKeyboardArrowDown className='font-bold h-[36px] pt-[6px]'/>
            </span>
            {
                props.pages&&
                <div className='px-9 xl:px-0'>
                <ul className='xl:absolute xl:w-[240px] relative w-full xl:bg-white smallScreen demos rounded-lg p-3'>
                    <li className='relative'>
                        <span onClick={()=>display('course')} 
                        className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                        <span className=' font-medium  text-[15px] flex items-center gap-[6px]'> Course</span>
                        <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                        </span>  
                            {
                                data.course&&
                                <ul className='categ xl:absolute xl:w-[240px] rounded-lg relative w-full xl:bg-white smallScreen xl:left-[228px] top-0 flex flex-col p-4 pl-4'>
                                <li className='navItem'>Course Categorial <span className='new'>New</span></li>
                                <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
                                <li className='navItem'>Course Grid Classic</li>
                                <li className='navItem'>Course Grid Minmal</li>
                                <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
                                <li className='navItem'>Course List Classic</li>
                                <li className='navItem'>Course List Minmal</li>
                                <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
                                <li className='navItem'>Course Detail Classic</li>
                                <li className='navItem'>Course Detail Minmal</li>
                                <li className='navItem'>Course Detail Advanced</li>
                                <li className='navItem'>Course Full Screen Video</li>
                                </ul>
                            }
                    </li>
                    <li className='relative'>
                    <span onClick={()=>display('about')} 
                        className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                        <span className=' font-medium  text-[15px] flex items-center gap-[6px]'> About</span>
                        <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                        </span>  
                            {
                                data.about&&
                                <ul className='categ xl:absolute xl:w-[240px] rounded-lg relative w-full xl:bg-white smallScreen xl:left-[228px] top-0 flex flex-col p-4 pl-4'>
                                <Link href={'/'}><li className='navItem'>About Us</li></Link>
                                <Link href={'/'}><li className='navItem'>Contact Us</li></Link>
                                <Link href={'/'}><li className='navItem'>Blog Grid</li></Link>
                                <Link href={'/'}><li className='navItem'>Blog Masonry</li></Link>
                                <Link href={'/'}><li className='navItem'>Blog Detail</li></Link>
                                <Link href={'/'}><li className='navItem'>Pricing</li></Link>
                                </ul>
                            }
                    </li>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Instructor List</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Instructor Single</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Become an Instructor</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Abroad Single <span className='new'>New</span></li></Link>
                <li className='relative'>
                        <span onClick={()=>display('shop')} 
                        className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                        <span className=' font-medium  text-[15px] flex items-center gap-[6px]'> Shop</span>
                        <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                        </span>      
                            {
                                data.shop&&
                                <ul className='categ xl:absolute xl:w-[240px] rounded-lg relative w-full xl:bg-white smallScreen xl:left-[228px] top-0 flex flex-col p-4 pl-4'>
                                <Link href={'/'}><li className='navItem'>Shop Grid</li></Link>
                                <Link href={'/'}><li className='navItem'>Product Detail</li></Link>
                                </ul>
                            }
                </li>
                <li className='relative'>
                            <span onClick={()=>display('help')} 
                            className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                            <span className=' font-medium  text-[15px] flex items-center gap-[6px]'> Help</span>
                            <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                            </span>  
                            {
                                data.help&&
                                <ul className='categ xl:absolute xl:w-[240px] rounded-lg relative w-full xl:bg-white smallScreen xl:left-[228px] top-0 flex flex-col p-4 pl-4'>
                                <Link href={'/'}><li className='navItem'>Help Center Grid</li></Link>
                                <Link href={'/'}><li className='navItem'>Help Center</li></Link>
                                </ul>
                            }
                </li>
                <li className='relative'>
                        <span onClick={()=>display('auth')} 
                        className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                        <span className='font-medium  text-[15px] flex items-center gap-[6px]'> Authentication</span>
                        <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                        </span>  
                            {
                                data.auth&&
                                <ul className='categ xl:absolute xl:w-[240px] rounded-lg relative w-full xl:bg-white smallScreen xl:left-[228px] top-0 flex flex-col p-4 pl-4'>
                                <Link href={'/'}><li className='navItem'>Sign In</li></Link>
                                <Link href={'/'}><li className='navItem'>Sign Up</li></Link>
                                <Link href={'/'}><li className='navItem'>Forgot Password</li></Link>
                                </ul>
                            }
                </li>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>FAQs</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Error 404</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Coming Soon</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Cart</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Checkout</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Empty Cart</li></Link>
                <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'>Wishlist</li></Link>
            </ul>
            </div>
            }
        </div>
    )
}