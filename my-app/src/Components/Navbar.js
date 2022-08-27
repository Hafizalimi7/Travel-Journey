import React from "react"
import logo from "../images/globe.png"


export default function Navbar(){
  return (
    <nav>
      <h1>My Travel Journal</h1>
      <img src={logo} alt="globe"  className="nav--logo"  />
    </nav>
  )
}