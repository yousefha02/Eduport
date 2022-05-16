import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/nav/Navbar'
import Footer from '../components/Footer'
import { FiArrowUp} from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps }) {

  const [on,setOn] = useState(false)
  const arrow = useRef()

  function scrolling()
  {
    if(typeof window!=='undefined')
    {
      if(window.scrollY>1000)
        setOn(true)
      else  
        setOn(false)
    }
  }

  useEffect(()=>
  {
    if(typeof window !=='undefined')
        {
            window.addEventListener("scroll",scrolling)
            return ()=>window.removeEventListener("scroll",scrolling)
        }
  },[scrolling])

  function up()
  {
    if(typeof window!=='undefined')
    {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
  }

  const moving = {
    initial: {
      opacity:0 ,
    },
    animate: {
      opacity:1,
      transition: { duration: .3 },
    },
  };

  return(
    <>
    <Head>
    <meta charset="UTF-8"/>
    <meta name="description" content="Free Web tutorials"/>
    <meta name="keywords" content="Tailwind, Nextjs"/>
    <meta name="author" content="Yousef Abohani"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <AnimatePresence>
      {on&&
      <motion.button onClick={up} ref={arrow} 
      className={`fixed hover:text-white hover:bg-blue duration-300 w-[50px] h-[50px] text-blue flex justify-center items-center 
      bottom-[40px] rounded-md bg-[#066ac933] right-[30px] z-[90]`}
      variants={moving} initial="initial" animate="animate" exit="initial"
      >
        <FiArrowUp className='text-[20px]'/>
      </motion.button>
      }
      </AnimatePresence>
    </>
  )
}

export default MyApp
