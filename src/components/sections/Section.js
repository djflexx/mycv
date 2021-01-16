import React, {useState, useReducer} from 'react'



import './Section.css'
import Icon from '../Icon'
import SectionTitle from '../SectionTitle'
import About from './About';
import Resume from './Resume';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';
import ClosingSection from './ClosingSection'


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
    const [isClicked, setIsClicked] = useState('')
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
    const currentItem = event.target.id;
    dispatch(currentItem);
    setIsClicked(currentItem)
    setIsOpen(prevstate => !prevstate)
    const scroll = document.getElementById(currentItem)
    scroll.scrollIntoView();
    console.log(isOpen)
    }

    return (
        <>
            {sections.map((section, index) => {
                return (
                    <div className="container" key={index} onClick={handleClick} id={sections[index].content}>
                    {isOpen && isClicked === section.content ? <ClosingSection setIsOpen={setIsOpen}/> :
                    <div className={ isClicked === section.content && isOpen ? "section-open" : "section-heading"} onClick={handleClick} id={sections[index].content}>
                      <>
                      <Icon icon= {section.icon}/>
                      <SectionTitle content={section.content} setIsOpen={setIsOpen}/>
                      </>                     
                    </div>
                    }
                    <>   
                       {(sectionName === "about" && sectionName === section.name && <About title={section.content} open={isOpen} setIsOpen={setIsOpen}/> )}
                       {(sectionName === "resume" && sectionName === section.name &&  <Resume title={section.content} open={isOpen} setIsOpen={setIsOpen}/>)}
                       {(sectionName === "skillset" && sectionName === section.name && <Skillset title={section.content} open={isOpen} setIsOpen={setIsOpen}/>)}
                       {(sectionName === "projects" && sectionName === section.name &&  <Projects title={section.content} open={isOpen} setIsOpen={setIsOpen}/>)}
                       {(sectionName === "contact" && sectionName === section.name && <Contact title={section.content} open={isOpen} setIsOpen={setIsOpen} />)}
                    </>                    
                    </div>
                )
            })}
        </>
    )
}
