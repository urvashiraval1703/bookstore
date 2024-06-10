import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/footer'
import Freebook from '../components/freeBook'


function home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </>
  )
}

export default home