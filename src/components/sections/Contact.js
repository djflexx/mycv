import React, {useEffect} from 'react'
import "./Contact.css"
import SectionTitle from '../../components/SectionTitle'



export default function Contact(props) {
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
           <div className="contact-section">
           <div className="small-section">
             <div className="icon-and-link">
                 <img src="https://img.icons8.com/color/96/000000/laptop-e-mail.png" alt="icon"/>
                 <a href="mailto:idanatias2@gmail.com">Email</a>
                 <p className="contact-details">idanatias2@gmail.com</p>
             </div>
           </div>
           <div className="small-section">
             <div className="icon-and-link">
                 <img src="https://img.icons8.com/color/48/000000/outgoing-call.png" alt="icon"/>
                 <a href="tel:0505444774">Phone</a>
                 <p className="contact-details">+972-505444774</p>
             </div>
           </div>
           </div>
        </div>
        </div>
    )
}
