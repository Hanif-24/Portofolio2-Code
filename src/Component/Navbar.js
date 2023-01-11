import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../Aset/Logo.png'
import Profil from '../Aset/Profile.png'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  
  const [display,setDisplay] = useState(false);
  
  return (
    <div className="navbar" id='Navbar'>
       <img src={Logo} alt="logo" className="logo" />
       <ul className="navlist">
          <li className="nav-item">
            <NavLink to='/' activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/planet-list' activeClassName="active">Planet List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/edit' activeClassName="active">Edit Profile</NavLink>
          </li>
       </ul>
       <div className="user-section">
          <img src={Profil} alt="Profile Img" className="user" onClick={()=>setDisplay(!display)}/>
          {
            display && (
            <ul className="user-dropdown">
              <li onClick={()=>setDisplay(false)}> <NavLink to='/edit'>Edit Profile</NavLink></li>
              <li onClick={()=>setDisplay(false)}>Logout</li>
            </ul>
            )
          }
       </div>
    </div>
  )
}
