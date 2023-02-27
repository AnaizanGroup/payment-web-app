import React, { useState } from "react"

import "./auth.scss"
import Login from "./login/Login"
import Register from "./register/Register"
import ResetPwd from "./resetPwd/ResetPwd"
import logo from "../../assets/images/svg/logo.svg"
import { FiChevronDown, FiChevronsDown, FiCircle, FiGlobe } from "react-icons/fi"
import BoxAccount from "../boxAccount/BoxAccount"

const Auth = ({ children }) => {

    return (
        <div className="background-form">
            <div className="head-forms-page">
                <img className="logo" src={logo} />
                <p>
                    <div className="div-select-lang">
                        <span>
                            <FiGlobe />
                            <span>Fr</span>
                            <FiChevronDown />
                        </span>
                    </div>
                    <div className="bar"></div>
                    <button><FiCircle /></button>
                </p>
            </div>
            <div className="block-forms">
               
                {children}
            </div>
        </div>
    )
}

export default Auth;