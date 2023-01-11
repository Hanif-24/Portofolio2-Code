import React from 'react'
import Logo from '../Aset/Logo.png'
import ArrowUp from '../Aset/up-chevron.png'
import InstaImg from '../Aset/instagram.png'
import FacebookImg from '../Aset/facebook.png'
import TwitterImg from '../Aset/twitter.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
       <div className="footer-logo">
          <img src={Logo} alt="logo" className="logo" />
          <ul className="contact">
            <li>m.alihanif249@gmail.com</li>
            <li>+6281 - 2345 - 67890</li>
            <li>Jl. Jalan, Jakarta. 11020</li>
          </ul>
       </div>
        <a href='#Navbar'>
          <img src={ArrowUp} alt=""  className='arrow-up'/>
        </a>
       <div className="sosial-media">
        <img src={FacebookImg} alt="" className="facebook" />
        <img src={InstaImg} alt="" className="insta" />
        <img src={TwitterImg} alt="" className="twitter" />
       </div>
    </div>
  )
}