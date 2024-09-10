import React, { useState } from 'react'
import classes from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import logo from '../../assets/logo.png'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { LuBadgeInfo } from "react-icons/lu";
import { CiDiscount1, CiMail } from "react-icons/ci";
import { PiSignIn } from 'react-icons/pi'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    if(toggle) {
        return (
            <nav className={classes.mobileNav}>
                <div className={classes.navheader}>
                  <Link to={'/'} onClick={() => setToggle(!toggle)} className={classes.logo}><img src={logo} alt='MD Transportation'/></Link>
                  <button onClick={() => setToggle(!toggle)}>
                      <IoMdClose/>
                  </button>
                </div>
                <div className={classes.navLinks}>
                <Link to={'/#contact'} onClick={() => setToggle(!toggle)}><LuBadgeInfo/> About</Link>
                <Link to={'/#contact'} onClick={() => setToggle(!toggle)}><CiMail/> Contact</Link>
                <Link to={'/sales'} onClick={() => setToggle(!toggle)}><CiDiscount1 /> Hot Sales</Link>
                <Link to={'/sales'} onClick={() => setToggle(!toggle)}><PiSignIn /> Sign In</Link>
                </div>
            </nav>
        )
    }
  return (
    <nav className={classes.nav}>
        <Link to={'/'} className={classes.logo}><img src={logo} alt='MD Transportation'/></Link>
        <div className={classes.navLinks}>
        <Link to={'/#contact'}><LuBadgeInfo/> About</Link>
        <Link to={'/#contact'}><CiMail/> Contact</Link>
        <Link to={'/sales'}><CiDiscount1 /> Hot Sales</Link>
        </div>
        <div className={classes.actions}>
            <Button to={'/auth'} text={'Sign In'} sm/>
        </div>
        <button className={classes.toggleButton} onClick={() => setToggle(!toggle)}>
          <MdOutlineMenu/>
        </button>
    </nav>
  )
}

export default Navbar