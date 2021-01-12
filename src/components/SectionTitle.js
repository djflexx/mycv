import React from 'react'
import './SectionTitle.css'

export default function SectionTitle(props) {
    return (
        <h1 className="section-title">{props.content}</h1>
    )
}
