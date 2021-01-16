import React, { useEffect } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import './CloseingSection.css'

export default function ClosingSection({setIsOpen}) {
    useEffect(() => {
        setIsOpen(true)
        return (() => {
            setIsOpen(false)
        })
    }, [])
    return (
        <div className="cancel-icon">
            <CancelIcon />
        </div>
    )
}
