import React, {useState} from "react"
import { validInputText } from "../../controlFields/controlField"


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

    const handleSubmit = e => {
        e.preventDefault()

        if (validInputText(value.email, 'email-error', 'email')) {
            let email = value.email,
                password = value.password;

        }
    }
    return (
        <>
        <h3 className="title-reset-pwd"> Réinitialiser votre Mot de passe</h3>
            <div className="div-field reset-pwd-email">
                <label>Renseigner l'email du compte</label>
                <input type="email" placeholder="votre email..."
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    onKeyUp={() => validInputText(value.email, 'email-error', 'email')} />
                <span className="span" id="email-error"></span>
            </div>
            <div className="btn-submit">
                <button type="submit" onClick={handleSubmit}>Continuer</button>
            </div>
        </>
    )
}

export default ResetPwd;