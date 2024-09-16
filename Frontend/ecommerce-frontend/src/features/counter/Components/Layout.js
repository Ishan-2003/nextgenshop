import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MetaTitle from '../Components/MetaTitle';

const Layout = () => {
  return (
    <>
    <MetaTitle title="Home" />
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
