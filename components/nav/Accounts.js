import Link from 'next/link'
import { MdKeyboardArrowDown} from 'react-icons/md';
import { HiDotsHorizontal} from 'react-icons/hi';
import { FaUserTie} from 'react-icons/fa';
import { MdDashboard} from 'react-icons/md';
import { BsFillBasketFill} from 'react-icons/bs';
import { MdCreateNewFolder} from 'react-icons/md';
import { MdLibraryAddCheck} from 'react-icons/md';
import { MdQuiz} from 'react-icons/md';
import { SiFuturelearn} from 'react-icons/si';
import { FaUserGraduate} from 'react-icons/fa';
import { FaShoppingCart} from 'react-icons/fa';
import { AiFillStar} from 'react-icons/ai';
import { RiWechatPayFill} from 'react-icons/ri';
import { MdUnsubscribe} from 'react-icons/md';
import { MdPayments} from 'react-icons/md';
import { RiAdminFill} from 'react-icons/ri';
import { RiFileEditFill} from 'react-icons/ri';
import { MdSettings} from 'react-icons/md';
import { AiFillDelete} from 'react-icons/ai';

import React, { useState } from 'react'

export default function Accounts(props)
{
    const objLinks =
    {
        instructor :false,
        students:false
    } 
    const [data,setData]= useState(objLinks)

    function view(word)
    {
        setData(back=>
            {
                return{
                    ...back,
                    instructor:false,
                    students:false,
                    [word]:!back[word]
                }
            })
    }
    function click()
    {
        setData(back=>
            {
                return{
                    ...back,
                    instructor:false,
                    students:false,
                }
            })
            props.click('accounts')
    }

    return(
        <div className="relative w-full xl:border-none  border-b border-[#9a9ea4] xl:py-0 py-[6px]">
            <span className='flex xl:justify-center justify-between items-center cursor-pointer px-6 xl:px-0'
            onClick={click}>
                <span className='text-dark p-[6px] rounded-md text-[15px] font-semibold'>Accounts</span>
                <MdKeyboardArrowDown className='font-bold h-[36px] pt-[6px]'/>
            </span>
            { props.accounts&&
            <div className='px-9 xl:px-0'>
            <ul className='xl:absolute xl:w-[240px] w-full relative smallScreen xl:bg-white demos rounded-lg p-3'>
            <li className='relative'>
                <span onClick={()=>view('instructor')} 
                    className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                    <span className=' font-medium  text-[15px] flex items-center gap-[6px]'><FaUserTie className='text-[18px]'/> Instructor</span>
                    <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                </span>    
                    {
                    data.instructor&&
                    <ul className='smallScreen categ xl:bg-white xl:absolute left-[228px] rounded-lg xl:w-[240px] top-0 flex flex-col p-4 pl-4'>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdDashboard className='text-[18px]'/> Dashboard</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><BsFillBasketFill className='text-[18px]'/> Courses</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdCreateNewFolder className='text-[18px]'/> Create Course</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdLibraryAddCheck className='text-[18px]'/> Course Added</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdQuiz className='text-[18px]'/> Quiz <span className='new'>New</span></li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><SiFuturelearn className='text-[18px]'/> Earnings</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><FaUserGraduate className='text-[18px]'/> Students</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><FaShoppingCart className='text-[18px]'/> Orders</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><AiFillStar className='text-[18px]'/> Reviews</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><RiWechatPayFill className='text-[18px]'/> Payouts</li></Link>
                    </ul>
                    }
            </li>
            <li className='relative'>
                <span onClick={()=>view('students')} 
                    className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'>
                    <span className=' font-medium  text-[15px] flex items-center gap-[6px]'><FaUserGraduate className='text-[18px]'/> Students</span>
                    <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                </span>    
                    {
                    data.students&&
                    <ul className='categ xl:bg-white smallScreen xl:absolute left-[228px] w-full rounded-lg xl:w-[240px] top-0 flex flex-col p-4 pl-4'>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdDashboard className='text-[18px]'/> Dashboard</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><BsFillBasketFill className='text-[18px]'/> Courses</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdLibraryAddCheck className='text-[18px]'/> Course Resume <span className='new'>New</span></li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdUnsubscribe className='text-[18px]'/> My Subscriptions</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdQuiz className='text-[18px]'/> Quiz <span className='new'>New</span></li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><MdPayments className='text-[18px]'/> Payment Info</li></Link>
                    <Link href={'/'}><li className='navItem flex items-center gap-[6px]'><FaShoppingCart className='text-[18px]'/> Wishlist</li></Link>
                    </ul>
                    }
            </li>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><RiAdminFill className='text-[18px]'/> Admin</li></Link>
            <hr className='bg-[#9a9ea4] my-3 h-[1px] opacity-30'/>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><RiFileEditFill className='text-[18px]'/>Edit Profile</li></Link>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><MdSettings className='text-[18px]'/> Settings</li></Link>
            <Link href={'/'}><li className='hover:bg-[#066bc927] duration-300 text-dark py-[6px] px-[7px] rounded-md hover:text-blue font-medium  text-[15px] cursor-pointer flex items-center gap-[6px]'><AiFillDelete className='text-[18px]'/> Delete Profile</li></Link>
            </ul>
            </div>
            }
        </div>
    )
}