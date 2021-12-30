import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import {HiOutlineMenuAlt1} from 'react-icons/hi'

const Navbar = () => {

   const navigate = useNavigate()
   const [width] = useState(window.visualViewport.width)

   console.log(width)

   const handleLogout = () => {
      navigate('/login', {
         replace: true         
      })
   }

   return (
      <nav className='navbar'>
         <Link to="/" className='logo'>
            Heroes-App
         </Link>  
         <div className={width > 768 ? `navbar__options` : `navbar__options oculta`}>
            <NavLink to="/marvel" className={ ({isActive}) => isActive ? 'active' : ''}>Marvel</NavLink>
            <NavLink to="/dc" className={ ({isActive}) => isActive ? 'active' : '' }>DC</NavLink>
         </div>
         <div className={width > 768 ? `navbar__options` : `navbar__options oculta`}>
            <span className='user'>Angel</span>
            <button className='btn-logout' onClick={ handleLogout }>Logout</button>
         </div>
         {
            width < 768 && (
               <button className='btn-menu'> <HiOutlineMenuAlt1 value={{className: 'menu'}}/> </button>
            )
         }
      </nav>
   )
}

export default Navbar
