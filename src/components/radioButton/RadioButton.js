import React from "react"

import "./RadioButton.scss"

export const RadioButton = ({label1, label2, role, setRole}) => {
    return (
        <div className="role">
            <div className="box-input">
                <div className={`radio-input ${role == 'Achecteur' ? 'radio-select' : ''}`}
                    onClick={() => setRole("Achecteur")}></div>
                <label> {label1} </label>
            </div>
            <div className="box-input">
                <div className={`radio-input ${role == 'Vendeur' ? 'radio-select' : ''}`}
                    onClick={() => setRole("Vendeur")}></div>
                <label> {label2} </label>
            </div>
        </div>
    )
}