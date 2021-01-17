import React, { useEffect } from 'react'
import './About.css'
import SectionTitle from '../../components/SectionTitle'

export default function About(props) {
    useEffect(() => {
        props.setIsOpen(true)       
    }, [props])
    const handleClick = () => {
        props.setIsOpen(prevState => !prevState)
    }
    return (
        <div onClick={handleClick} className="big-container">
        {props.open && <SectionTitle content={props.title}/>}
        <div className="section-content">
          <p>
          My name is Idan Atias, I am 29 years old,<br />
          Born and raised in Israel.<br /> 
          I enjoy developing websites,<br />
          I have always been passionate about technology and innovations.<br /> 
          I became interested in code 4 years ago. <br /> 
          I have good interpersonal skills,<br />
          I enjoy working with people around me and always look forward to learn.<br /> 
          I feel satisfied solving difficult and complicated problems.<br /> 
          Now , this hobby has become my biggest passion and my goal is<br /> to make it my way of living.
          </p>
         <div className="about-image">
             <img src="https://www.dropbox.com/s/30g5jaqkgjrjxwe/IMG-0170%20%282%29.JPG?raw=1" alt="me"></img>
         </div> 
        </div>
        </div>
    )
}
