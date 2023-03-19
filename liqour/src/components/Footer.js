import React from 'react'
import "../body/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                 <div className='sb_footer-links-div'>
                 <a href="#home">
                    <h4>Home</h4>
                 </a>
                 </div>
            <div className='sb_footer-links-div'>
                 <a href="#About">
                    <h4>About</h4>
                 </a>
                 </div>
            <div className='sb_footer-links-div'>
                 <a href="#My Cart">
                    <h4>My Cart</h4>
                 </a>
                 </div>
            <div className='sb_footer-links-div'>
                 <a href="#Profile">
                    <h4>Profile</h4>
                 </a>
                 </div>

            </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} The Liqour Store.  All right reserved.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="/Privacy"><div><p>Privacy</p></div></a>
                    <a href="/Secutiy"><div><p>Secutiy</p></div></a>
                    <a href="/Cookie"><div><p>Cookie Declarations</p></div></a>
                </div>
            </div>
        </div>
    </div>

    
  )
}
