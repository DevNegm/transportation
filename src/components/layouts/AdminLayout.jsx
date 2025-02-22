import React from 'react'
import classes from './AdminLayout.module.scss'
import Navbar from '../main/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../main/Footer'
const AdminLayout = () => {
  return (
    <main className={classes.main}>
    <Navbar/>
    <div className={classes.pages}>
    <Outlet/>
    </div>
    <Footer/>
</main>
  )
}

export default AdminLayout