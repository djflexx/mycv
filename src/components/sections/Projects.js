import React,{useEffect} from 'react'
import './Projects.css'
import SectionTitle from '../../components/SectionTitle'
import {projects} from '../.././ProjectsData'

export default function Projects(props) {

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
          {projects.map((i, index) => {
            return (
              <div className="project-header-description" key={index}>
              <h1>{i.title}</h1>
              <p>{i.description}</p>
              <a href={i.link} target="_blank" >View Project</a>
              <div className="project-image">
                 <img src={i.img} alt={i.alt}/>
              </div>
              </div>
            )
          })}
        </div>
        </div>
    )
}
