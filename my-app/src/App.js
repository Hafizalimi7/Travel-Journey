import React from "react"
import Navbar from "./Components/Navbar";
import Card from "./Components/Card"
import data from "./data"




export default function App() {
  const cards = data.map(item => {
      return(
      <Card 
        id={item.id}
        item={item}
      />
      )
  })
      
    return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}


