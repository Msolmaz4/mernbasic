import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = ({show}) => {
    const sideDrawerClass = ['sidedrawer']
 
     if(show){

          sideDrawerClass.push('show')
     }

  return (
    <div className={sideDrawerClass.join(' ')}>
        <ul className='sidedrawer_links'>
            <li>
            <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
                Cart <span className='sidedrawer_cartbadge'>0</span>
            </span>
            </Link>
            </li>
            <li>
                <Link to='/'>Shop</Link>
            </li>
           
        </ul>
    </div>
  )
}

export default SideDrawer