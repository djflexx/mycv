import React from 'react'
import './Header.css'

export default function Header() {
    const handleClick = (event) => {
        if(event.target.id === "github"){
            window.location.href = "https://github.com/djflexx"
        }
        if (event.target.id === "linkedin"){
            window.location.href = "https://www.linkedin.com/in/idan-atiasdev/"
        }
    }
    return (
        <div className="header">
           <div className="header-title">
              <h1>Idan Atias</h1>
              <p>Web-Developer</p>
           </div>
           <div className="icons" onClick={handleClick}>
              <img src="https://img.icons8.com/fluent/96/000000/github.png" id="github"/>
              <img src="https://img.icons8.com/fluent/96/000000/linkedin.png" id="linkedin"/>
           </div> 
        </div>
    )
}
