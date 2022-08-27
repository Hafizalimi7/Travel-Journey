import React from "react"
import logo from "../images/location.png"



export default function Card(props) {
  return(
    <div className="card">
      <img src={props.item.icon} alt="mountain" className="card--image"/>
        <div className="card--info">
        <img src={logo} alt="location"  className="location--logo"  />{props.item.location}
           <br></br>
            <h2>{props.item.title}</h2>
              <br></br>
                <div className="date--info">
                  {props.item.startDate} - {props.item.endDate} 
                </div>
                  <br></br>
                    <div className="description">
                      <p>{props.item.description}</p>
                    </div>
                   
        </div>
    </div>
  )
}