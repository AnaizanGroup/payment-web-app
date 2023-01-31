import React from "react"
import { ImSpinner3 } from "react-icons/im"

import "./Spinner.scss"

export const Spinner = () => {
    return (
        <div className="spin-anim">
            <div className="svg">
                <ImSpinner3 />
            </div>
        </div>
    )
}