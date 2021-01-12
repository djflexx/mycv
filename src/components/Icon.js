import React from 'react'
import './Icon.css'

export default function Icon(props) {
    return (
        <button className="icon-styles" id="unselectable"><img src={props.icon} alt="about"/></button>
    )
}
