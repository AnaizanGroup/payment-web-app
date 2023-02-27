import React, { useContext, useState } from "react"
import AuthContext from "../../../context/AuthContext"
import { REGISTER, RESETFORM } from "../../../settings/constant"
import BoxAccount from "../../boxAccount/BoxAccount"
import { validInputText } from "../../controlFields/ControlField"
import Auth from "../Auth"

import "../auth.scss"

const Login = ({ setForm }) => {
    const { loginUser } = useContext(AuthContext)
    const [done, isDone] = useState(false)
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

    const handleSubmit = e => {
        e.preventDefault()

        if (validInputText(value.email, 'email-error', 'email')) {
            let email = value.email,
                password = value.password;
            loginUser(email, password, isDone)
        }
    }

    return (
        <Auth>
            <form>
                <h2>Sign in</h2>
                <div className="div-field">
                    <label>Email or Phone Number</label>
                    <input type="email" placeholder="votre email..."
                        name="email"
                        value={value.email}
                        onChange={handleChange}
                        onKeyUp={() => validInputText(value.email, 'email-error', 'email')} />
                    <span className="span" id="email-error"></span>
                </div>
                <div className="div-field">
                    <a href={RESETFORM}>Mot de passe oublier ?</a>
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Créer votre mot de passe..."
                        name="password"
                        id="password"
                        value={value.password}
                        onChange={handleChange} />
                    <span className="span" id="pwd-error"></span>
                </div>
                <div className="btn-submit">
                    <button type="submit" onClick={handleSubmit}>Connexion</button>
                </div>
                <p className="text-foot">
                    Create free account, <a href={REGISTER}>Sign up</a>
                </p>
                <BoxAccount />
            </form>

        </Auth>
    )
}

export default Login;