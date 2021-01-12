import React from 'react'
import "./Contact.css"



export default function Contact() {
    return (
        <div className="section-content">
           <div className="contact-section">
           <div className="small-section">
             <div className="icon-and-link">
                 <img src="https://img.icons8.com/color/96/000000/laptop-e-mail.png"/>
                 <a href="mailto:idanatias2@gmail.com">Email</a>
                 <p className="contact-details">idanatias2@gmail.com</p>
             </div>
           </div>
           <div className="small-section">
             <div className="icon-and-link">
                 <img src="https://img.icons8.com/color/48/000000/outgoing-call.png"/>
                 <a href="tel:0505444774">Phone</a>
                 <p className="contact-details">+972-505444774</p>
             </div>
           </div>
           </div>
        </div>
    )
}
