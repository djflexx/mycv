import React, { useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle'
import './Resume.css'

export default function Resume(props) {
    useEffect(() => {
        props.setIsOpen(true)       
    }, [])
    const handleClick = () => {
        props.setIsOpen(false)
    }
    return (
        <div className="big-container" onClick={handleClick}>
        {props.open && <SectionTitle content={props.title}/>}
        <div className="section-content">
            <ul>
                <h1>Army :</h1>
                <li><p>Soldier and commandor @ Paratroopers</p></li>
                <h1>Education :</h1>
                <li><p>Bachlor degree in music production & sound @ BPM Collage</p></li>
                <h1>Employment Experience :</h1>
                <li><p>Last 5th Years - self-employed Dj</p></li>
            </ul>
        </div>
        </div>
    )
}
