import { React,useEffect,useState,useContext } from "react"
import { MdKeyboardArrowDown} from 'react-icons/md';
import { MdClose} from 'react-icons/md';
import {showingContext} from './Filter'

export default function Advanced()
{
    const info = 
    [
        {
            title:'All',
            qty:'(1256)'
        },
        {
            title:'Development',
            qty:'(365)'
        },
        {
            title:'Design',
            qty:'(156)'
        },
        {
            title:'Accounting',
            qty:'(45)'
        },
        {
            title:'Translation',
            qty:'(265)'
        },
        {
            title:'Finance',
            qty:'(120)'
        },
        {
            title:'Legal',
            qty:'(65)'
        },
        {
            title:'Photography',
            qty:'(99)'
        },
        {
            title:'Writing',
            qty:'(178)'
        },
        {
            title:'Marketing',
            qty:'(104)'
        }
    ]

    const [all,Setall] = useState(info.slice(0,8))
    const [on,setOn] = useState(false)
    const {show} = useContext(showingContext)
    const {setShow} = useContext(showingContext)

    useEffect(()=>
    {
        if(on)
            Setall(info)
        else
            Setall(info.slice(0,8))
    },[on])

    return(
        <div className="lg:w-[35%] xl:w-[22%] lg:block lg:relative overflow-auto h-[100vh] fixed top-0 right-0 w-[95%] sm:w-[70%] md:w-[50%] bg-[#fff] lg:z-0 z-[200] duration-500 
        lg:p-0 p-4" style={{right:show?'0':'-100vw'}}>
            <div className="lg:hidden flex justify-between mb-5 items-center text-[20px] p-3">
                <h3 className="font-bold text-black">Advance Filter</h3>
                <MdClose className="text-dark text-[28px] cursor-pointer"
                onClick={()=>setShow(false)}/>
            </div>
            <div className="shdw p-6 rounded-md mb-6">
                <h3 className="text-black font-bold text-[24px] mb-3">Category</h3>
                <div>
                    {
                        all.map((box,index)=>
                        {
                            return<div className="flex justify-between items-center mb-2" key={index+'poq3'}>
                                <span>
                                    <input type="checkbox" name={box.title} className="mr-2 rounded-[.25em] w-[15px] h-[15px] accent-blue border border-blue"/>
                                    <span className="text-dark text-[15px]">{box.title}</span>
                                </span>
                                <span className="text-dark text-[14px]">{box.qty}</span>
                            </div>
                        })
                    }
                </div>
                <h4 className="text-blue text-[15px] mt-3 flex gap-1 items-center cursor-pointer" onClick={()=>setOn(back=>!back)}>
                    <span>See {!on?'more':'less'}</span>
                    <span className="font-bold duration-300 text-[18px]" style={{transform:on?'rotate(180deg)':'rotate(0deg)'}}>
                        <MdKeyboardArrowDown/>  
                    </span>  
                </h4>
            </div>

            <div className="shdw p-6 rounded-md mb-6">
                <h3 className="text-black font-bold text-[24px] mb-3">Price Level</h3>
                <div className="flex gap-4 flex-wrap">
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">All</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Free</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Paid</span>
                </div>
            </div>

            <div className="shdw p-6 rounded-md mb-6">
                <h3 className="text-black font-bold text-[24px] mb-3">Skill Level</h3>
                <div className="flex gap-3 flex-wrap">
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">All levels</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Beginner</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Intermediate</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Advanced</span>
                </div>
            </div>

            <div className="shdw p-6 rounded-md mb-6">
                <h3 className="text-black font-bold text-[24px] mb-3">Language</h3>
                <div className="flex gap-3 flex-wrap">
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Arabic</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">English</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Frances</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Russian</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Spanish</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Bengali</span>
                    <span className="bg-[#dddee0] text-black text-[16px] font-[500] rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-[#066ac91a]">Portuguese</span>
                </div>
            </div>
            
            <div>
                <button className="bg-blue text-white font-semibold w-full py-2 rounded-md">Filter Results</button>
            </div>

        </div>
    )
}