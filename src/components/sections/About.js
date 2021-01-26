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
          My name is Idan and I am 29 years old.
          <br />
          For as long as I can remember, I have always been drawn to technology. 
          <br />
          I taught myself Adobe suite when I was 15 and dabbled with HTML and CSS in high school.
          <br />
          My passion for technology and music led me to music production studies at BPM Collage, Tel-aviv.  
          <br />
          I have worked as a professional DJ and Music Producer for the last decade, while programming as a side hobby.  
          <br />
          This passion for coding evolved and grew in the past year. I have taught myself all the popular languages. 
          <br />
          I feel I am now ready to join a company as a junior full-stack developer. I enjoy working with people and solving challenging, complex, problems.
          </p>
         <div className="about-image">
             <img src="https://www.dropbox.com/s/30g5jaqkgjrjxwe/IMG-0170%20%282%29.JPG?raw=1" alt="me"></img>
         </div> 
        </div>
        </div>
    )
}
