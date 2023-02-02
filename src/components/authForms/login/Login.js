import React, { useState } from "react"
import { validInputText } from "../../controlFields/controlField"
import SelectCountryField from "../../selectCountryField/SelectCountryField"

import "../auth.scss"

const Login = ({ setForm }) => {

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

        }
    }

    return (
        <>
            <div className="div-field">
                <label>Email</label>
                <input type="email" placeholder="votre email..."
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    onKeyUp={() => validInputText(value.email, 'email-error', 'email')} />
                <span className="span" id="email-error"></span>
            </div>
            <div className="div-field">
            <a onClick={() => setForm(2)}>Mot de passe oublier ?</a>
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
        </>
    )
}

export default Login;