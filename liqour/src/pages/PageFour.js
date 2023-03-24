import React from 'react'
import './PageFour.css'
import Product from '../components/Product';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Content from '../components/Content';

export default function PageFour() {
  return (
    <><div >
    <Navbar/>
      <div className="body-4">
      {Content.map(Content =>(
         <Product
          key={Content.id}
          image={Content.image}
          name={Content.price}
        />
        ))}
        </div>  
      <Footer className='foot'/>
    </div>
    
   
    </>
  )
}
