import React, {useState} from "react"

import "./PopupLayout.scss"

export const PopupLayout = ({ children, closes }) => {
    return (
        <div className="popup-content"
        style={closes ? {display: 'flex'}:{display:'none'}}>
            {children}
        </div>
    )
}
