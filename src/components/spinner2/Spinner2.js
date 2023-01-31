import React from "react"
import { ImSpinner3 } from "react-icons/im"

import "./Spinner2.scss"

export const Spinner2 = () => {
    return (
        <div className="spin-anim">
            <div className="svg">
                <ImSpinner3 />
            </div>
        </div>
    )
}