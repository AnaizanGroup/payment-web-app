import React, { useEffect, useState } from "react"
import { FaRegEnvelope } from "react-icons/fa"
import { FiMessageCircle } from "react-icons/fi"
import { RESETPWD } from "../../../settings/constant"
import { ControlField } from "../../controlField/ControlField"
import { Timer } from "../../minuteur/minuteur"
import Auth from "../Auth"


const ResetPwd = () => {
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (index, e) => {
        e.preventDefault()

        setIndex(1)

        if (ControlField(value.email, 'email-error', 'email')) {
            let email = value.email,
                password = value.password;

        }
    }
    
    const handleSubmit2 = (index, e) => {
        e.preventDefault()

        setIndex(2)

        if (ControlField(value.email, 'email-error', 'email')) {
            let email = value.email,
                password = value.password;

        }
    }

    const [index, setIndex] = useState(0)
    const [method, setMethod] = useState(0)
    const [count, setCount] = useState(60)

    const verify = (link, e) => {
        e.preventDefault()
        window.location.href=link
    }

    useEffect(() => {
        setInterval(() =>{ 
            if(count > 0) {
                setCount(count-1) 
            } else {
                setCount(0)
            }
        },1000);
    },[count])

    const returnForm = () => {
        if (index == 0) {
            return (
                <div className="choice-method">
                    <div className={`choice1 ${method == 0 ? "select-m" : ""}`}
                        onclick={() => setMethod(0)}>
                        <FiMessageCircle />
                        <p>
                            <span>via SMS</span>
                            <b>+229****0</b>
                        </p>
                    </div>
                    <div className={`choice1 ${method == 1 ? "select-m" : ""}`}
                        onclick={() => setMethod(1)}>
                        <FaRegEnvelope />
                        <p>
                            <span>via email</span>
                            <b>dev.****anaizan.com</b>
                        </p>
                    </div>
                    <button onClick={(e) => handleSubmit(1,e)}> Continue </button>
                </div>
            )
        } else if (index == 1) {
            return (
                <>
                    <h3 className="title-reset-pwd"> Reset Password</h3>
                    <div className="div-field">
                        <input type="email" placeholder="Email or Phone number"
                            name="email"
                            value={value.email}
                            onChange={handleChange}
                            onKeyUp={() => ControlField(value.email, 'email-error', 'email')} />
                        <span className="span" id="email-error"></span>
                    </div>
                    <div className="btn-submit">
                        <button type="submit" onClick={(e) => handleSubmit(2,e)}>Continuer</button>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="div-verify">
                        <div className="groups-input">
                            <input type="password" />
                            <input type="password" />
                            <input type="password" />
                            <input type="password" />
                        </div>
                        <div className="btn-submit">
                            <button onClick={(e) => verify(RESETPWD)}>Verify</button>
                        </div>
                        <p>Resend code in <span>{count} <Timer /> </span></p>
                    </div>
                </>
            )
        }
    }

    return (
        <Auth>
            <form className="reset-password">
               {returnForm()}
        </form>
        </Auth >
    )
}

export default ResetPwd;