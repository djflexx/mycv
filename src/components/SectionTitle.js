import React from 'react'
import './SectionTitle.css'

export default function SectionTitle(props) {
    const handleClick = () => {
    props.setIsOpen(prevState => !prevState)
    }
    return (
        <h1 className="section-title" onClick={handleClick}>{props.content}</h1>
    )
}
