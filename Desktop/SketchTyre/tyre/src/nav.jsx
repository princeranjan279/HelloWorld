import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div className="navbar">
        <div className="nav1">
            <HiOutlineMailOpen /><a href='hello@testyantraglobal.com'>hello@testyantraglobal.com</a>
        </div>
        <div className="nav2">
            <ImFacebook/><FaTwitter/><FaInstagram/><BiLogoLinkedin/>    
        </div>
   
    </div>

    <section className='mainContainer'>
        <div className='head'>
            <img src='https://testyantraglobal.com/wp-content/uploads/2022/03/logo_testyantra_global.png' alt=''/>
        </div>
        <div className='link'>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Products">Products</Link>
                </li>
                <li>
                    <Link to="/Industries">Industries</Link>
                </li>
                <li>
                    <Link to="/Articles">Articels</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default nav
