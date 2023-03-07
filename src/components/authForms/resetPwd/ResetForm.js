import React, { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { ControlField } from "../../controlField/ControlField"
import { ShowPasswdText } from "../../showPasswdText/ShowPasswdText"
import { Spinner } from "../../spinner/Spinner"
import Auth from "../Auth"

import '../auth.scss'

const ResetForm = () => {

    const [reset, setReset] = useState(false)

    const [value, setValue] = useState({
        password: '',
        passwordC: ''
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (ControlField(value.password, 'pwd-error', 'pwd')) {

            if (value.passwordC == value.password) {
                let password = value.password;
            } else {
                let pwdC = document.getElementById("pwdC-error")
                pwdC.innerText = "Mot de passe incorrect"
            }
        }
    }


    return (
        <Auth>
            {
                reset ? (
                    <Spinner />
                ) : (
                    <form>
                        <h3 className="title-reset-pwd"
                            style={{ marginBottom: '1.5rem' }}>
                            Create a new Password
                        </h3>
                        <div className="div-field">
                            
                            <input type="password" placeholder="New Password..."
                                name="password"
                                id="password"
                                value={value.password}
                                onChange={handleChange}
                                onKeyUp={() => ControlField(value.password, 'pwd-error', 'pwd')} />
                                <ShowPasswdText id={"pwd-error"} />
                            <span className="span" id="pwd-error"></span>
                        </div>
                        <div className="div-field">
                            
                            <input type="password" placeholder="Re-enter your password..."
                                name="passwordC"
                                value={value.passwordC}
                                onChange={handleChange}
                                onKeyUp={() => ControlField(value.passwordC, 'pwdC-error', 'pwd')} />
                            <span className="span" id="pwdC-error"></span>
                          
                        </div>
                        <div className="btn-submit">
                            <button onClick={handleSubmit} type="submit">Réinitialiser</button>
                        </div>
                    </form>
                )
            }

        </Auth>
    )
}

export default ResetForm;