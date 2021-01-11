import React from 'react'
import './Skillset.css'

export default function Skillset() {
    return (
        <div className="section-content">
            <div className="skillset">
               <div className="small-section">
                  <div className="title-and-header">
                    <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
                    <h1>language</h1>
                  </div>
                  <p>Javascript</p>
                </div>
                <div className="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
                      <h1>Frontend</h1>
                    </div>
                      <p>React.js</p>
                </div>
                <div className ="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/windows/48/000000/nodejs.png"/>
                      <h1>Backend</h1>
                    </div>
                    <p>Node.js</p>
                </div>
                <div className ="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                      <h1>Database</h1>
                    </div>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    )
}
