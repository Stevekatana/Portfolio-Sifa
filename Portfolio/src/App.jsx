import React, { useRef, useState } from 'react'
import AboutImg from './assets/about.JPG'
import Landing from './assets/landing.jpg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function App() {
  const [isDrop, setIsDrop] = useState(false)
  const dropdown = document.querySelector('#dropdown')

  const goNav = useRef(null)
  const goHome = useRef(null)
  const goAbout = useRef(null)
  const goPortfolio = useRef(null)
  const goContact = useRef(null)


  function scrollNav(){
    goNav.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollHome(){
    goHome.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollAbout(){
    goAbout.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollPortfolio(){
    goPortfolio.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollContact(){
    goContact.current?.scrollIntoView({behaviour: 'smooth'})
  }

  function dropdownMenu(){
    setIsDrop(true)
    if(isDrop == true){
      dropdown.style.display = 'block'
      setIsDrop(false)
    }else if(!isDrop){
      dropdown.style.display = 'none'
    }
  }

  return (
    <div className='bg-midnight'>
      {/* Home */}
      <section ref={goNav} className='bg-midnight flex sticky top-0'>
        <div className='w-1/2 flex items-center justify-center p-3 lg:mt-3'>
            <h1 className='text-3xl lg:text-4xl text-Highlight' onClick={scrollNav}>Basai Jr</h1>
        </div>
        <div className='flex justify-center items-center'>
            <GiHamburgerMenu className='text-3xl ml-30 lg:hidden text-Primary-Text' onClick={dropdownMenu}/>
            <div id='dropdown' 
                 className=' opacity-[1] z-50 w-full hidden bg-midnight lg:w-auto lg:h-full lg:bg-midnight absolute top-15 right-0 text-right p-2 lg:flex lg:gap-10 lg:right-60 lg:top-0 lg:p-4 lg:-ml-20'>
                <p className='pt-2 pb-2 text-xl text-Highlight lg:text-3xl' onClick={scrollHome}>Home</p>
                <p className='pt-2 pb-2 text-xl text-Highlight lg:text-3xl' onClick={scrollAbout}>My Story</p>
                <p className='pt-2 pb-2 text-xl text-Highlight lg:text-3xl' onClick={scrollPortfolio}>Portfolio</p>
                <p className='pt-2 pb-2 text-xl text-Highlight lg:text-3xl' onClick={scrollContact}>Contact Me</p>
            </div>
        </div>
      </section>

      {/* <Home /> */}
      <section ref={goHome} className='bg-midnight text-white h-screen'>
        <div className='bg-black h-full opacity-[0.4]'>
          <img src={Landing} alt="image not found" className='h-full w-full'/>
        </div>
        <div className=' absolute top-[50%] w-full text-center'>
          <p className='text-4xl lg:text-6xl lg:font-semibold'>Telling stories through lens & light</p>
        </div>
      </section>

      {/* <About /> */}
        <section ref={goAbout} className='bg-midnight p-2'>
          <h1 className='text-Highlight mt-5 :pt-2 pb-2 text-center text-3xl lg:text-4xl lg:pt-2 capitalize'>basai jr</h1>
          <div className='lg:flex lg:items-center lg:justify-center lg:gap-20'>
            <div className='flex items-center justify-center'>
              <img src={AboutImg} alt="No about image found" className='rounded-md h-52 w-52 lg:w-72 lg:h-72'/>
            </div>
            <div className='mt-5 text-center lg:w-[500px] pb-5'>
              <p className='text-Accent lg:text-xl'>
                I am a visual storyteller, drawn to the poetry of light, motion, and emotion. Through photography, film, and editing, I seek not just to capture moments, but to translate feeling into frame—where every shot speaks, and silence has texture. My work lives in the space between reality and reverie, guided by instinct, rhythm, and a deep love for the unseen stories all around us. Whether crafting a fleeting still or a moving sequence, I approach each project like a canvas—layering perspective, color, and soul to evoke something honest and unforgettable.
              </p>
            </div>
          </div>
        </section>

      {/* <Gallery /> */}
      <section ref={goPortfolio} className='text-white p-3'>
        <div className='text-center'>
          <h1 className='text-3xl text-Highlight'>My Work</h1>
        </div>
        <div className='flex items-center justify-center mt-5 mb-5'>
          <div>
            <div className='mb-5 lg:hover:bg-Highlight lg:hover:border-solid lg:hover:font-semibold lg:hover:text-midnight flex items-center justify-center rounded-md text-center text-Highlight border-2 border-solid lg:border-dashed  w-72 h-10'>
              <p className='text-2xl'>Potrait Shots</p>
            </div>
            <div className='mb-2 lg:hover:bg-Highlight lg:hover:border-solid lg:hover:font-semibold lg:hover:text-midnight flex items-center justify-center rounded-md text-center text-Highlight border-2 border-solid lg:border-dashed  w-72 h-10'>
              <p className='text-2xl'>Product Shots</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Contact /> */}
        <div ref={goContact} className=' p-2 '>
            <h1 className='text-center text-3xl text-Highlight'>Reach Out To Me!</h1>
            <div className='mt-5 flex items-center justify-center mb-5'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
                <div className='flex items-center justify-center border-2 text-Highlight hover:bg-Highlight hover:text-midnight rounded-md p-1 w-72 mb-4 h-10 lg:border-dashed lg:hover:border-solid border-Highlight'>
                  <IoIosCall className='text-2xl '/>
                  <a href="tel:+254712870529" className='ml-3 text-2xl'>Call me</a>
                </div>
                <div className=' hover:text-midnight text-Highlight hover:bg-Highlight rounded-md border-Highlight  flex items-center justify-center border-2 p-1 w-72 mb-4 h-10 lg:border-dashed'>
                  <MdEmail className='text-2xl'/>
                  <a href="mailto:sifashady@gmail.com" className='ml-3 text-2xl'>Email me</a>
                </div>
                <div className=' hover:text-midnight text-Highlight hover:bg-Highlight rounded-md border-Highlight  flex items-center justify-center border-2 p-1 w-72 mb-4 h-10 lg:border-dashed'>
                  <FaWhatsapp className='text-2xl'/>
                  <a href="https://wa.me/254712870529" className='ml-3 text-2xl'>WhatsApp</a>
                </div>
                <div className=' hover:text-midnight text-Highlight hover:bg-Highlight rounded-md border-Highlight flex items-center justify-center border-2 p-1 w-72 mb-4 h-10 lg:border-dashed'>
                  <FaInstagram className='text-2xl'/>
                  <a href="https://www.instagram.com/basai_jr?igsh=NHMzMnRjdWpwdTNv&utm_source=ig_contact_invite" className='ml-3 text-2xl'>Instagram</a>
                </div>
                <div className=' hover:text-midnight text-Highlight hover:bg-Highlight rounded-md border-Highlight flex items-center justify-center border-2 p-1 w-72 mb-4 h-10 lg:border-dashed'>
                  <BsTwitterX className='text-2xl'/>
                  <a href="https://x.com/basai_jr?s=21" className='ml-3 text-2xl'>My Twitter</a>
                </div>
                <div className=' hover:text-midnight text-Highlight hover:bg-Highlight flex rounded-md border-Highlight items-center justify-center border-2 p-1 w-72 h-10 lg:border-dashed'>
                  <FaFacebook className='text-2xl'/>
                  <a href="https://www.facebook.com/share/197memtRxW/?mibextid=wwXIfr" className='ml-3 text-2xl'>My Facebook</a>
                </div>
              </div>
            </div>
        </div>

        <div className=' opacity-[0.5] border-2 border-black lg:hidden w-10 h-10 bg-white flex items-center justify-center rounded-[999px] sticky bottom-10 left-3' onClick={scrollNav}>
          <FaChevronUp className='text-3xl'/>
        </div>

      <div className='text-center bg-midnight '>
        <p className='text-Highlight'>&copy; 2024 all rights reserved</p>
      </div>
    </div>
  )
}

export default App
