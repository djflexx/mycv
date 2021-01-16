import React, {useState, useReducer} from 'react'



import './Section.css'
import Icon from '../Icon'
import SectionTitle from '../SectionTitle'
import About from './About';
import Resume from './Resume';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';


const initialState = '';
    const reducer = (state, action) => {
        switch(action) {
            case "About Me": return state = "about";
            case "Résumé": return state = "resume";
            case "Skill set": return state = "skillset";
            case "Contact": return state = "contact";
            case "Projects": return state = "projects";
            default: return state = null;
        }
    }
export default function Section() {
    const [isClicked, setIsClicked] = useState([
        {clicked: false, name: "About Me"},
        {clicked: false, name: "Résumé"},
        {clicked: false, name: "Skill set"},
        {clicked: false, name: "Projects"},
        {clicked: false , name: "Contact"},
    ])
    const [isOpen, setIsOpen] = useState(false);
    const [sectionName, dispatch] = useReducer(reducer, initialState)
    const sections = [
    {
    content: "About Me",
    icon: "https://img.icons8.com/color/96/000000/about-us-male--v1.png",
    name: "about"
    },
    {
    content: "Résumé",
    icon: "https://img.icons8.com/color/48/000000/work.png",
    name: "resume"
    },
    {
    content: "Skill set",
    icon: "https://img.icons8.com/color/96/000000/development-skill.png",
    name: "skillset"
    },
    {
    content: "Projects",
    icon: "https://img.icons8.com/color/96/000000/google-sites.png",
    name: "projects"
    },
    {
    content: "Contact",
    icon: "https://img.icons8.com/color/96/000000/communication.png",
    name: "contact"
    },
    ]
    const handleClick = (event) => {
    dispatch(event.target.id)    
    setIsOpen(state => !state)
    }

    return (
        <>
            {sections.map((section, index) => {
                return (
                    <div className="container" key={index} onClick={handleClick} id={isClicked[index].name}>
                    <div className="section-heading" onClick={handleClick} id={isClicked[index].name}>
                      <Icon icon= {section.icon}/>
                      <SectionTitle content={section.content}/>
                    </div>
                    <>   
                       {(sectionName === "about" && sectionName === section.name &&  <About />)}
                       {(sectionName === "resume" && sectionName === section.name && <Resume />)}
                       {(sectionName === "skillset" && sectionName === section.name &&  <Skillset />)}
                       {(sectionName === "projects" && sectionName === section.name &&  <Projects />)}
                       {(sectionName === "contact" && sectionName === section.name && <Contact />)}
                    </>                    
                    </div>
                )
            })}
        </>
    )
}
