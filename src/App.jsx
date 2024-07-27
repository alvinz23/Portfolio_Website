import { useState } from 'react'
import './App.css'
import React from 'react'
import backgroundImage from './images/deepspace.jpg'
import NavBar from './components/DrawerAppBar'
import person from './images/person.webp'
import TypeAnimation from './components/TypeAnimation'
import LinkedInButton from './components/LinkedInButton'
import Connect from './components/connect'
function App() {
  return (
    <div>
      <NavBar/>
      <img src = {person} alt = "logo" style={{position:"absolute", width:"600px",marginTop: "65px", right: "0"}}>
      </img>
      <TypeAnimation> 
      </TypeAnimation>
      <Connect></Connect>
      <LinkedInButton/>

    </div>
  )
}

export default App
