import React from "react"

import "./RadioButton.scss"

export const RadioButton = ({role, setRole}) => {
    return (
        <div className="role">
            <div className="box-input">
                <div className={`radio-input ${role == 'Achecteur' ? 'radio-select' : ''}`}
                    onClick={() => setRole("Achecteur")}></div>
                <label> Acheteur</label>
            </div>
            <div className="box-input">
                <div className={`radio-input ${role == 'Vendeur' ? 'radio-select' : ''}`}
                    onClick={() => setRole("Vendeur")}></div>
                <label> Vendeur</label>
            </div>
            <div className="box-input">
                <div className={`radio-input ${role == 'Achecteur/Vendeur' ? 'radio-select' : ''}`}
                    onClick={() => setRole("Achecteur/Vendeur")}></div>
                <label> Acheteur/Vendeur</label>
            </div>
        </div>
    )
}