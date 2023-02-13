import React, { useState } from "react"
import { FaCheck } from "react-icons/fa"

import "./Checkbox.scss"

export const Checkbox = ({text, value, setValue}) => {

    const setVal = () => {
        let input = document.getElementById(value)

        if (input.checked == true) {
            setValue(value)
        } else {
            setValue(null)
        }
    }

    return (
        <div className="box-checkbox">
            <div className="checkbox" onClick={setVal}>
                <input type="checkbox" name={value} id={value} />
                <FaCheck />
            </div>
            <span> {text} </span>
        </div>
    )
}