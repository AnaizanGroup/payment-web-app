import React, { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

import "./ShowPasswdText.scss"

export const ShowPasswdText = ({ id }) => {
    const [eye, setEye] = useState(false)

    const eyePwd = () => {
        let input = document.getElementById(id)

        if (input.type == "password") {
            setEye(true)
            input.type="text"
        } else {
            setEye(false)
            input.type="password"
        }
    }
    return (
        <span className="eye"
            onClick={eyePwd}> {eye ? <FiEye /> : <FiEyeOff />} </span>
    )
}