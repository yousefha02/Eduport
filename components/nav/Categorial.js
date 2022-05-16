import Link from 'next/link'
import { BsUiRadiosGrid} from 'react-icons/bs';
import { HiDotsHorizontal} from 'react-icons/hi';
import React from 'react'
export default function Categorial(props)
{
    const [show2,setShow2] = React.useState(false) 
    const [show3,setShow3] = React.useState(false) 

    function view()
    {
        props.click('categ')
        setShow2(false)
        setShow3(false)
    }

    return(
        <div className='relative xl:border-none border-b border-[#9a9ea4] px-8 xl:px-0 xl:py-0 pt-1 pb-3'>
                        <span className='flex gap-3 xl:px-0 px-5  items-center w-full h-[54px] justify-start xl:w-[120px] xl:h-[44px] bg-[#066bc927] xl:justify-center rounded-lg cursor-pointer'
                        onClick={view}>
                            <BsUiRadiosGrid className='text-blue text-[15px]'/>
                            <span className='text-blue text-[15px] font-semibold m-w-full'>Category</span>
                        </span>
                        <div className='px-3 xl:py-0 py-1 xl:p-0'>
                        {
                            props.categ&&
                            <div className='xl:absolute relative w-full rounded-lg xl:top-[43px] left-0 px-3 py-4 smallScreen xl:bg-white demos xl:w-[240px]'>
                            <ul className='flex flex-col'>
                            <li className='relative'>
                                <span className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'
                                onClick={()=>setShow2(back=>!back)}>
                                    <span className=' font-medium text-[15px]'>Development</span>
                                    <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                                </span>
                                {
                                    show2&&
                                    <ul className='xl:bg-white xl:absolute relative xl:left-[228px] smallScreen  demos top-0 flex flex-col w-full xl:w-[270px] p-4'>
                                    <li className='relative'>
                                    <span className='flex justify-between items-center cursor-pointer hover:bg-[#066bc927] duration-300 text-dark p-2 rounded-md hover:text-blue'
                                    onClick={()=>setShow3(back=>!back)}>
                                        <span className='font-medium  text-[15px]'>Web Development</span>
                                        <HiDotsHorizontal className='text-dark font-bold text-[22px]'/>
                                    </span>
                                        {
                                            show3&&
                                            <ul className='xl:bg-white smallScreen  demos xl:absolute relative xl:left-[254px] top-0 flex flex-col w-full xl:w-[200px] p-4 pl-4'>
                                            <li className='navItem'>HTML</li>
                                            <li className='navItem'>CSS</li>
                                            <li className='navItem'>JavaScript</li>
                                            <li className='navItem'>React</li>
                                            <li className='navItem'>PHP</li>
                                            <li className='navItem'>Angular</li>
                                            </ul>
                                        }
                                    </li>
                                    <li className='navItem'>Data Science</li>
                                    <li className='navItem'>Mobile Development</li>
                                    <li className='navItem'>Programing Language</li>
                                    <li className='navItem'>Software Testing</li>
                                    <li className='navItem'>Software Engineering</li>
                                    <li className='navItem'>Software Development Tools</li>
                                </ul>
                                }
                            </li>
                            <li className='navItem'>Design</li>
                            <li className='navItem'>Marketing</li>
                            <li className='navItem'>Music</li>
                            <li className='navItem'>Lifestyle</li>
                            <li className='navItem'>IT &#38; software</li>
                            <li className='navItem'>Personal Development</li>
                            <li className='navItem'>Health &#38; fitness</li>
                            <li className='navItem'>Teaching</li>
                            <li className='navItem'>Socail science</li>
                            <li className='navItem'>Math &#38; logic</li>
                        </ul>
                        <hr className='bg-[#9a9ea4] mt-3 mb-2 h-[1px] opacity-30'/>
                        <button className='text-[15px] h-[40px] w-[240px] max-w-full text-blue bg-[#066bc927] font-semibold rounded-lg'>View all categories</button>
                        </div>
                        }
                        </div>
                    </div>
    )
}