import React from "react"

import "./Toggle.scss"

const Toggle = ({ label, value, setValue  }) => {
    
    const setVal = () => {
        let input = document.getElementById(value)

        if (input.checked == true) {
            setValue(value)
        } else {
            setValue(null)
        }
    }

    return (
        <div className="box-checkboxs" >
            <label> {label} </label>
            <div className="box-child" onClick={setVal}>
                <input type="checkbox" name={value} id={value} />
                <div className="slider round" ></div>
            </div>
        </div>
    )
}

export default Toggle;