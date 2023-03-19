import React from 'react'
import "./PageFour.css"

import Navbar from '../components/Navbar'
import bottle1 from '../Photos/Bottle1.png'
import bottle2 from '../Photos/Bottle2.png'
import bottle3 from '../Photos/Bottle3.png'
import cover from '../Photos/cover.jpg'
import Footer from '../components/Footer'

export default function PageFour() {
  return (
    <><div className='body-4'>
      <Navbar/>
        
    <div className='bottle'>
    <img className='bottle1-img' src={bottle1} alt='bottle1' />
    <svg className='bottle1-rec' width="100%" height="100%">
                  <rect x="0" y="0" /></svg>
    <img className='bottle2-img' src={bottle2} alt='bottle2' />
    <svg className='bottle2-rec' width="100%" height="100%">
                  <rect x="0" y="0" /></svg>
    <img className='bottle3-img' src={bottle3} alt='bottle3' />
    <svg className='bottle3-rec' width="100%" height="100%">
                  <rect x="0" y="0" /></svg>
    </div>
      <Footer/>
    </div>
    
   
    </>
  )
}
