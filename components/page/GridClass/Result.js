import {BiSearch} from 'react-icons/bi';
import { IoIosArrowDown} from 'react-icons/io';
import { RiPlayList2Line} from 'react-icons/ri';
import React,{useState,useContext} from 'react';
import Courses from './Courses';
import Pagination from './Pagination';
import {showingContext} from './Filter'
export default function Result()
{
    const [select,setSelect]=useState('Most Viewed')
    const [on,setOn] = useState(false)
    const choice = ['Most Viewed','Most popular','Recently search','Top rated']

    const {setShow} = useContext(showingContext)
    const {show} = useContext(showingContext)
    
    function choose(word)
    {
        setSelect(word)
        setOn(false)
    }

    function blur()
    {
        setOn(false)
    }

    React.useEffect(()=>
    {
        if(typeof window !='undefined')
            {
                show?document.body.style.overflow='hidden':document.body.style.overflow='visible'
            }
    },[show])

    return(
        <div className="w-full lg:w-[65%] xl:w-[74%]">
            <from className="flex gap-8 xl:items-center xl:flex-row flex-col">
                <div className='border-[#0000001a] border px-3 py-[6px] rounded-md flex justify-between items-center'>
                    <input className='focus:outline-none w-[345px] max-w-full' placeholder='Find your course'/>
                    <span className='bg-blue rounded-md w-[49px] h-[40px] flex justify-center items-center'>
                        <BiSearch className='text-white font-bold text-[22px]'/>
                    </span>
                </div>

                <div className='flex flex-col relative z-[10]' tabIndex={0}
                            onBlur={blur}>
                    <div onClick={()=>setOn(back=>!back)}
                    className={`border ${select=="Select subject"?'text-dark':'text-black'} text-[15px] cursor-pointer
                    border-[#dde0e3] py-[6px] px-4 focus:outline-none rounded-md flex items-center justify-between 
                    xl:w-[200px] h-[56px]`}>
                        <span className='text-dark'>{select}</span>
                        <IoIosArrowDown className='text-dark'/>
                    </div>
                        {on&&
                            <div className='absolute left-0 top-[54px] rounded-md bg-white z-1 w-full'>
                            <ul className='pt-1 rounded-b-[4px] w-full border border-[#dde0e3] border-t-0'>
                                {
                                    choice.map((item,index)=>
                                    {
                                        return(
                                            <li key={index+'asd'} className={`cursor-pointer text-[15px] 
                                            text-dark hover:text-blue hover:bg-[#066ac91a] 
                                            px-3 py-1`} 
                                            style={{backgroundColor:item==select?'#066ac91a':'',color:item==select?'#066ac9':''}}
                                            onClick={()=>choose(item)}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                            </div>
                            }
                </div>
                
                <div className='flex justify-between items-center'>
                    <button className='lg:hidden flex items-center gap-2 w-[135px] h-[40px] text-white font-semibold justify-center text-[16px] bg-blue rounded-md'
                    onClick={()=>setShow(true)}>
                        <RiPlayList2Line/>
                        <span>Show Filter</span>
                    </button>
                    <div className='text-dark text-[15px]'>Showing 1-7 of 32 result</div>
                </div>
            </from>
            <Courses/>
            <Pagination/>
        </div>
    )
}