import React from "react"
import SelectCountryField from "../../selectCountryField/SelectCountryField"

import "../auth.scss"

const Login = ({ setForm }) => {

    return (
        <>
            <div className="div-field">
                <label>Email</label>
                <input type="email" placeholder="votre email..." />
                <span className="span"></span>
            </div>
            <div className="div-field">
                <a onClick={() => setForm(2)}>Mot de passe oublier ?</a>
                <label>Mot de passe</label>
                <input type="password" placeholder="Mot de passe..." />
                <span className="span"></span>
            </div>
            <div className="btn-submit">
                <button type="submit">Connexion</button>
            </div>
        </>
    )
}

export default Login;