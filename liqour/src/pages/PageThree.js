import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./PageThree.css"
export default function PageThree() {

    function onClick(){
        alert("you clicked me");
    }

  return (
    <><><>
     <Navbar/>
    
    <div className='Form1'>
          <form>
              <label>Full Name</label>
              <input
                  type="text"
                  required />
              <label>Email Address</label>
              <input
                  type="Email"
                  required />
              <label>Date of Birth</label>
              <input
                  type="date"
                  required />

          </form>

      </div>
      </><div className='Page3'>

              <svg width="100%" height="100%">
                  <rect x="10" y="10" /></svg>
                 
              <h1 x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Explore Your Favorites</h1>
          </div></><div className='But3'>
          <button onClick={onClick}>Create an Account</button>
        <Footer/>
            </div></>

 
    )
}
