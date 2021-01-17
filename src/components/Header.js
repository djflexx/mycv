import React from 'react'
import './Header.css'

export default function Header() {
    const handleClick = () => {
        window.location.href = "https://github.com/djflexx"
        console.log(window.location)
    }
    return (
        <div className="header">
           <div className="header-title">
              <h1>Idan Atias</h1>
              <p>Web-Developer</p>
           </div>
           <div className="github-icon" onClick={handleClick}>
              <img src="https://img.icons8.com/fluent/96/000000/github.png"/>
           </div> 
        </div>
    )
}
