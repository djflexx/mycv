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
        {isOpen: false, name: "About Me"},
        {isOpen: false, name: "Résumé"},
        {isOpen: false, name: "Skill set"},
        {isOpen: false, name: "Contact"},
        {isOpen: false , name: "Projects"},
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
    dispatch(event.target.innerText)
    setIsOpen(state => !state)
    if(isClicked > 0){
    isClicked.map(section => {
    if (section.name === event.target.innerText){
        setIsClicked({isOpen: isClicked})
    }
    })
    }
    console.log(sectionName + isClicked.name + isClicked.isOpen)
    }

    return (
        <>
            {sections.map((section, index) => {
                return (
                    <div className="container" key={index} onClick={handleClick}>
                    <div className="section-heading">
                      <Icon icon= {section.icon}/>
                      <SectionTitle content={section.content}/> 
                    </div>
                    <>   
                       {(isClicked && sectionName === "about" && sectionName === section.name &&  <About />)}
                       {(isClicked && sectionName === "resume" && sectionName === section.name &&  <Resume />)}
                       {(isClicked && sectionName === "skillset" && sectionName === section.name &&  <Skillset />)}
                       {(isClicked && sectionName === "projects" && sectionName === section.name &&  <Projects />)}
                       {(isClicked && sectionName === "contact" && sectionName === section.name &&  <Contact />)}
                    </>                    
                    </div>
                )
            })}
        </>
    )
}
