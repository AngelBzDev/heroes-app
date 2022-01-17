import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import {HiOutlineMenuAlt1} from 'react-icons/hi'
import AuthContext from '../../auth/authContext'
import { types } from '../../types/types'

const Navbar = () => {

   //Contexto
   const {dispatch} = useContext(AuthContext)

   //Navegacion
   const navigate = useNavigate()
   const param = window.location.href

   //Ocultar o mostrar menu
   const [width] = useState(window.visualViewport.width)
   const [showMenu, setShowMenu] = useState(false)


   useEffect(() => {
      setShowMenu(false)
   }, [param])

   const handleLogout = () => {

      dispatch({type: types.logout})

      navigate('/login', {
         replace: true 
      })
   }

   const handleShowMenu = () => setShowMenu(!showMenu)

   return (
      <nav className='navbar'>
         <div className='logo__menu'>
            <Link to="/" className='logo'>
               Heroes-App
            </Link>
            {
               width < 768 && (
                  <button 
                     className='btn-menu'
                     onClick={handleShowMenu}
                  >
                     <HiOutlineMenuAlt1 value={{className: 'menu'}}/>
                  </button>
               )
            }
         </div>
         <div className={`navbar_menu ${!showMenu && 'oculta'}`}>
            <div className={width > 768 ? `navbar__options` : `navbar__options`}>
               <NavLink to="/marvel" className={ ({isActive}) => isActive ? 'active' : ''}>Marvel</NavLink>
               <NavLink to="/dc" className={ ({isActive}) => isActive ? 'active' : '' }>DC</NavLink> 
               <NavLink to="/search" className={ ({isActive}) => isActive ? 'active' : '' }>Search</NavLink>
               <button className='btn-logout' onClick={ handleLogout }>Logout</button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
