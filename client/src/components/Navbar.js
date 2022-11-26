import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        {/**logo */}
        <div className='navbar_logo'>
            <h2>MERN SHOP CART</h2>
        </div>


        {/**links */}
        <ul className='navabr_links'>
         <li  >
          <Link to='/cart'>
          </Link>
         </li>
        </ul>


         {/**hamburger menu */}
        
    </nav>
  )
}

export default Navbar