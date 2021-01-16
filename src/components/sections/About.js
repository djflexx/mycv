import React, { useEffect } from 'react'
import './About.css'
import SectionTitle from '../../components/SectionTitle'

export default function About(props) {
    useEffect(() => {
        props.setIsOpen(true)       
    }, [])
    const handleClick = () => {
        props.setIsOpen(false)
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
             <img src="https://previews.dropbox.com/p/thumb/ABCQuih4t3_YFZoDaxS2d-IQoF0RooMMal9bQAxsB3mOlDl9Hg7UgaB0SFr7UzkszKq4UZyQFt0sZQ4Hyg11wSvLXcJcslCha8WgTKLHJRQ3yXHJiyk2BMvQJWhuqAS8sYVwdrTjt_jlNj9Sr3qwmOh7iCDhr_b4c7AXrhTyH2-0xF3d98gwTki5Q8TIZWrVLBJfxH2JC7BJjVmWsAErJChnBck2qlXeCyCwDlwJMSrvMhoLMtHDkLdCKzVI7syNTlda_F-cMVklam5vRWkXsOGZxaZ6XSJBd5uiDPD8YUTRjGQrV4CZlFfvxS5pAshlou-0_0tdgfALA8wlByl612QnJDzeHvkqrDnVLc0u4XuHNQ/p.jpeg?fv_content=true&size_mode=5" alt="me"></img>
         </div> 
        </div>
        </div>
    )
}
