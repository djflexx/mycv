import React, {useEffect} from 'react'
import './Skillset.css'
import SectionTitle from '../../components/SectionTitle'

export default function Skillset(props) {

  useEffect(() => {
    props.setIsOpen(true)       
}, [props])
const handleClick = () => {
    props.setIsOpen(prevState => !prevState)
}

    return (
        <div className="big-container" onClick={handleClick}>
        {props.open && <SectionTitle content={props.title}/>}
        <div className="section-content">
            <div className="skillset">
               <div className="small-section">
                  <div className="title-and-header">
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="icon"/>
                    <h1>language</h1>
                  </div>
                  <p>Javascript</p>
                </div>
                <div className="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="icon"/>
                      <h1>Frontend</h1>
                    </div>
                      <p>React.js</p>
                </div>
                <div className ="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/windows/48/000000/nodejs.png" alt="icon"/>
                      <h1>Backend</h1>
                    </div>
                    <p>Node.js</p>
                </div>
                <div className ="small-section">
                    <div className="title-and-header">
                      <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="icon"/>
                      <h1>Database</h1>
                    </div>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
        </div>
    )
}
