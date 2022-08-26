import React from "react"



export default function Card(props) {
  return(
    <div className="card">
      <img src={props.item.icon} alt="mountain" className="card--image"/>
      <div className="card--info">
        <span className="title">{props.item.title}</span>
        <br></br>
        <span className="gray">{props.item.location}</span>
        <br></br>
        <span className ="dates">{props.item.startDate} - {props.item.endDate}</span>
        <br></br>
      </div>
    </div>
  )
}