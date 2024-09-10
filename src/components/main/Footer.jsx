import React from 'react'
import classes from './Footer.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { PiSignIn } from 'react-icons/pi'
import { FaFacebook, FaInstagram, FaUserPlus } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { CiDiscount1, CiMail } from 'react-icons/ci'
import { LuBadgeInfo } from 'react-icons/lu'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link to={'/'}><img src={logo} alt='MD Transportation'/></Link>
      <div className={classes.footerLinks}>
          <p>Quick Links</p>
          <Link to={'/#about'}><LuBadgeInfo/> About</Link>
          <Link to={'/#contact'}><CiMail/> Contact</Link>
          <Link to={'/sales'}><CiDiscount1/> Hot Deals</Link>
      </div>
      <div className={classes.footerLinks}>
          <p>Quick Links</p>
          <Link to={'/auth'}><PiSignIn /> Sign In</Link>
          <Link to={'/auth/sign-up'}><FaUserPlus /> Sign Up</Link>
      </div>
      <div className={classes.footerLinks}>
          <p>Social Links</p>
          <div className={classes.social}>
            <Link to={'#'}><FaFacebook /></Link>
            <Link to={'#'}><FaInstagram /></Link>
            <Link to={'#'}><BsTwitterX /></Link>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer