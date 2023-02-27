import React, { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { validInputText } from "../../controlFields/ControlField"
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

        if (validInputText(value.password, 'pwd-error', 'pwd')) {

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
                                style={{ marginBottom: '1.5rem' }}> Réinitialiser votre Mot de passe</h3>
                            <div className="div-field">

                                <div className="div-field">
                                    <label>Nouveau Mot de passe</label>
                                    <span className="notice-pwd" id="notice-pwd">
                                        Au mois six (06) caractères alphanumérique
                                        (Ex: Mon012x0)
                                    </span>
                                    <input type="password" placeholder="Créer votre mot de passe..."
                                        name="password"
                                        id="password"
                                        value={value.password}
                                        onChange={handleChange}
                                        onKeyUp={() => validInputText(value.password, 'pwd-error', 'pwd')} />
                                    <span className="span" id="pwd-error"></span>
                                </div>
                            </div>
                            <div className="div-field">
                                <label>Retaper le Mot de passe</label>
                                <input type="password" placeholder="Confirmer votre mot de passe..."
                                    name="passwordC"
                                    value={value.passwordC}
                                    onChange={handleChange}
                                    onKeyUp={() => validInputText(value.passwordC, 'pwdC-error', 'pwd')} />
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