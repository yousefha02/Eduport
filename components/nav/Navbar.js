import Image from 'next/image'
import Categorial from '../nav/Categorial'
import Demos from '../nav/Demos'
import Pages from '../nav/Pages'
import Link from 'next/link'
import { useState } from 'react'
import Accounts from '../nav/Accounts'
import List from './List'
import {BiSearch} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';

export default function Navbar()
{
    let [border,setBorder]=useState(false);
    let [ipt,setIpt]=useState('');
    let [list,setList]=useState(false)

    const objLink = 
    {
        demos:false,
        categ:false,
        pages:false,
        accounts:false,
        list:false
    }

    const [data,setData]=useState(objLink)

    function click(word)
    {
        setData(back=>
            {
                return{
                    ...back,
                    categ:false,
                    demos:false,
                    pages:false,
                    accounts:false,
                    list:false,
                    [word]:!back[word]                
                }
            })
    }

    return(
        <nav className='fixed w-full z-40 bg-white'>
            <div className="mx-auto xl:px-6 relative flex items-center py-3 justify-between">
                <div className='xl:px-5 px-3 flex items-center'>
                    <Link href={'/'}><Image alt="wait" src={'/images/logo.svg'} width="140x" height="28px"/></Link>
                </div>

                <div className={`max-h-[550px] xl:overflow-visible overflow-auto xl:flex flex-grow justify-between xl:relative xl:top-0 xl:shadow-none shdw absolute w-full left-0 top-[72px] 
                py-3 xl:p-0 ${list?"block":'hidden'} bg-white `}>
                    <Categorial click={click} {...data}/>
                    <ul className=' xl:flex gap-6'>
                        <li className='flex items-center'><Demos click={click} {...data}/></li>
                        <li className='flex items-center'><Pages click={click} {...data}/></li>
                        <li className='flex items-center'><Accounts click={click} {...data}/></li>
                        <li className='flex items-center pt-2'><List click={click} {...data}/></li>
                    </ul>
                    
                    <div className='px-6 xl:px-0 xl:py-0 pt-3 pb-1'>
                    <form tabIndex='0' className={` duration-200 ${border?'border-[#066ac9]':''} ${border?'border-opacity-100':""}
                    relative border-dark border border-opacity-40 p-1 max-w-full xl:w-[260px] w-full 
                    rounded-md flex items-center mr-5`}>
                        <input onChange={(e)=>setIpt(e.target.value)}
                        value={ipt}
                        onClick={()=>setBorder(true)}
                        onBlur={()=>setBorder(false)} 
                        className='px-3 py-[6px] w-[85%] xl:w-[180px] max-w-full focus:outline-none border-none' placeholder='Search'/>
                        <span className={`${ipt.length==0?"opacity-0":""}`} onClick={()=>setIpt('')}>
                            <MdClose className='font-bold text-[22px] mr-5 text-blue'/>
                        </span>
                        <span onClick={()=>setBorder(false)}><BiSearch className='text-dark font-bold text-[22px] absolute right-[4px] -translate-y-2/4'/></span>
                    </form>
                    </div>
                </div>

                <div className='flex items-center gap-3 px-6'>
                    <div className='xl:hidden relative' onClick={()=>setList(back=>back=!back)}>
                        <div className="container nav-container">
                            <input className="checkbox" type="checkbox" />
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                        </div> 
                    </div>
                    </div>
                    <Image alt="wait" src={'/images/تنزيل.jpg'} className="rounded-full" width="40px" height="40px"/>
                </div>
            </div>
        </nav>
    )
}