import React from 'react'
import './Icon.css'

export default function Icon(props) {
    return (
        <div className="icon-styles">
            <img src={props.icon} alt="about"/>
        </div>
    )
}
