import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Wallet from '../components/Wallet'
import Exchange from '../components/Exchange'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Wallet/>
      <Exchange/>
    </div>
  )
}

export default Landing