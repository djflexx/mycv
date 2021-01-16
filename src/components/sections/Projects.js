import React,{useEffect} from 'react'
import './Projects.css'
import SectionTitle from '../../components/SectionTitle'

export default function Projects(props) {

  useEffect(() => {
    props.setIsOpen(true)       
}, [])
const handleClick = () => {
    props.setIsOpen(false)
}

    return (
      <div className="big-container" onClick={handleClick}>
      {props.open && <SectionTitle content={props.title}/>}
        <div className="section-content">
          <div className="project-header-description">
            <h1>Ecoswap</h1>
            <p>The hub for eco-conscious consumers,<br /> 
            Where they can find eco friendly<br/>
            alternatives for every-day items</p>
           <a href="https://ecoswap.me" target="_blank" >View Project</a>
          </div>
          <div className="project-image">
             <img src="https://ecoswap.me/wp-content/uploads/2020/09/Untitled-3-05.png" alt="ecoswap"/>
          </div>
        </div>
        </div>
    )
}
