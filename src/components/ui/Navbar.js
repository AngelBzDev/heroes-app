import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

   const navigate = useNavigate()

   const handleLogout = () => {
      navigate('/login', {
         replace: true         
      })
   }

   return (
      <nav className='navbar'>
         <Link to="/" className='active'>
            xd
         </Link>
         <div className='navbar__options'>
            <NavLink to="/marvel" className={ ({isActive}) => isActive ? 'active' : ''}>Marvel</NavLink>
            <NavLink to="/dc" className={ ({isActive}) => isActive ? 'active' : '' }>DC</NavLink>
         </div>
         <div className='navbar__options'>
            <span className='user'>Angel</span>
            <button className='btn-logout' onClick={ handleLogout }>Logout</button>
         </div>
      </nav>
   )
}

export default Navbar
