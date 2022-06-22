import { MdOutlineMailOutline} from 'react-icons/md';
import { FaWhatsapp} from 'react-icons/fa';
import { BsTelephoneOutbound} from 'react-icons/bs';
import { MdWeb} from 'react-icons/md';
import { IoIosArrowDown} from 'react-icons/io';
import React,{useState} from 'react';

export default function Touch()
{
    const data = 
    [
        {
            icon:MdOutlineMailOutline,
            title:"Email",
            details:"example@gmail.com",
            color:'#f7c32e'
        },
        {
            icon:FaWhatsapp,
            title:"WhatsApp number",
            details:"+256 359 556",
            color:'#0cbc87'
        },
        {
            icon:BsTelephoneOutbound,
            title:"Telephone",
            details:"+123 456 789",
            color:'#6f42c1'
        },
        {
            icon:MdWeb,
            title:"Website",
            details:"http://example.com",
            color:'#fd7e14'
        },
    ]
    const choice = ['Contact Purpose','GRE','IELTS','PTE','study in CANADA','study in U.K']
    const [select,setSelect]=useState('Marketing')
    const [on,setOn] = useState(false)
    const [part,setPart] = useState(choice)
    const [kind,setKind] = useState('')
    const ipt = React.useRef(null)

    React.useEffect(()=>
    {   
        on?ipt.current.focus():''
    },[on])

    React.useEffect(()=>
    {
        if(kind=='')
            setPart(choice)
        else
            setPart(choice.filter(item=>item.includes(kind.split(' ').join(''))))
    },[kind])

    function choose(word)
    {
        setSelect(word)
        setOn(false)
    }

    function blur()
    {
        setTimeout(() => {
            setOn(false)
        }, 250);
    }

    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto py-[50px]">
                <div className="lg:grid-cols-2 grid gap-12 items-center">
                    <div>
                        <h2 className="text-[26px] sm:text-[30px] leading-[40px] sm:leading-[44px] md:text-[34px] xl:text-[36px] mb-2 font-bold md:leading-[46px] text-black">
                        Get in touch with us
                        </h2>
                        <p className="text-gray mb-14 text-[15px]">
                            Claim your free 10-minute phone call to see if we are right for your kid.
                        </p>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-12'>
                            {
                                data.map((box,index)=>
                                {
                                    return(
                                        <div key={index+"iopq"} className="shdw relative p-4 rounded-[8px]">
                                            <h3 className='text-[15px] text-black font-[600] mb-2'>{box.title}</h3>
                                            <h4 className='text-dark text-[15px]'>{box.details}</h4>
                                            <div className='absolute rounded-full top-[-27px] right-[27px] w-[56px] h-[56px] flex items-center justify-center' 
                                            style={{backgroundColor:box.color}}>
                                                <box.icon className='text-white text-[24px] font-bold'/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='shdw p-12 flex flex-col gap-4'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-dark text-[15px]'>First name *</label>
                                <input type="text" className='border border-[#dde0e3] p-2 focus:outline-none 
                                rounded-[4px]'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-dark text-[15px]'>Last name *</label>
                                <input type="text" className=' border border-[#dde0e3] p-2 focus:outline-none 
                                rounded-[4px]'/>
                            </div>
                        </div>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-dark text-[15px]'>Email *</label>
                                <input type="email" className=' border border-[#dde0e3] p-2 focus:outline-none 
                                rounded-[4px]'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-dark text-[15px]'>Phone number *</label>
                                <input type="number" className=' border border-[#dde0e3] p-2 focus:outline-none 
                                rounded-[4px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col relative'>
                            <label className='text-dark text-[15px] mb-[8px]'>Contact Purpose</label>
                            <div onClick={()=>setOn(back=>!back)}
                            className={`border ${select=="Select subject"?'text-dark':'text-black'} text-[15px] cursor-pointer
                            border-[#dde0e3] py-2 px-4 focus:outline-none rounded-t-[4px] flex items-center justify-between`}>
                            <span>{select}</span>
                            <IoIosArrowDown/>
                            </div>
                            { on&&
                            <div className='absolute left-0 top-[71px] bg-white z-1 w-full' tabIndex={0}
                            onBlur={blur} >
                            <input onChange={(e)=>setKind(e.target.value)} ref={ipt}
                            className='px-2 py-[6px] border border-[#dde0e3] border-t-0 w-full focus:outline-none' type="text"/>
                            <ul className='pt-1 rounded-b-[4px] w-full border border-[#dde0e3] border-t-0'>
                                {
                                    part.map((item,index)=>
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
                        <div className='flex flex-col gap-2'>
                            <label className='text-dark text-[15px]'>Message *</label>
                            <textarea rows={3} cols={5} className=' border border-[#dde0e3] p-2 
                            focus:outline-none rounded-[4px]'></textarea>
                        </div>
                        <div>
                            <button className='w-[139px] h-[41px] flex items-center justify-center bg-blue text-white rounded-md font-[500]'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}