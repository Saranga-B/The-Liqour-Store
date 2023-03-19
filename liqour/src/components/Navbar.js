import React from 'react'
import '../navbar.css';


export default function Navbar() {
  return (
    <nav className='nav'>
      <a href="#" className='brand'>The Liqour</a>
      <ul className='nav__menu'>
          <li className='nav__item'><a href='#'className='nav__link'>Wine</a></li>
          <li className='nav__item'><a href='#'className='nav__link'>Scotch</a></li>
          <li className='nav__item'><a href='#'className='nav__link'>Whiskey</a></li>
          <li className='nav__item'><a href='#'className='nav__link'>Champagn</a></li>
          <li className='nav__item'><a href='#'className='nav__link'>Vodka</a></li>
      </ul>
      <div className='nav__toggler'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  )
}
