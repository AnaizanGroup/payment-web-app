import React, {useState} from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { userRegister } from "../../../store/userAuth/userReducer"
import { validInputText } from "../../controlFields/controlField"
import SelectCountryField from "../../selectCountryField/SelectCountryField"
import { ShowPasswdText } from "../../showPasswdText/ShowPasswdText"

import "../auth.scss"

const Register = () => {
    const dispatch = useDispatch()

    const [role, setRole] = useState("Achecteur")

    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        country: '',
        telephone: '',
        email: '',
        password: '',
        passwordC: '',
        role: role,
    })

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    } 

    const handleSubmit = e => {
        e.preventDefault()

        if(validInputText(value.firstname, 'firstname-error', 'text')
        && validInputText(value.lastname, 'lastname-error', 'text')
        && validInputText(value.telephone, 'tel-error', 'tel')
        && validInputText(value.email, 'email-error', 'email')
        && validInputText(value.password, 'pwd-error', 'pwd')) {
            if (value.passwordC == value.password) {
                let firstname = value.firstname,
                    lastname = value.lastname,
                    telephone = value.telephone,
                    email = value.email,
                    password = value.password,
                    role = value.role;

                    dispatch(userRegister({
                        firstname,
                        lastname,
                        telephone,
                        email,
                        password,
                        role
                    }))
            } else {
                let pwdC = document.getElementById("pwdC-error")
                pwdC.innerText = "Mot de passe incorrect"
            }
        }
    }

    return (
        <>
            <div className="div-field">
                <label> Nom complet</label>
                <div className="groups-field">
                    <p>
                        <input type="text" placeholder="Entrer votre nom..."
                        name="firstname"
                        value={value.firstname}
                        onChange={handleChange} 
                        onKeyUp={() => validInputText(value.firstname, 'firstname-error', 'text')} />
                        <span className="span" id="firstname-error"></span>
                    </p>
                    <p>
                        <input type="text" placeholder="Entrer votre prénom..."
                        name="lastname"
                        value={value.lastname}
                        onChange={handleChange}
                        onKeyUp={() => validInputText(value.lastname, 'lastname-error', 'text')} />
                        <span className="span" id="lastname-error"></span>
                    </p>
                </div>
            </div>
            <div className="div-field">
                <label>Pays/Région</label>
                <SelectCountryField />
            </div>
            <div className="div-field">
                <label>Téléphone</label>
                <input type="tel" placeholder="votre téléphone..."
                name="telephone"
                value={value.telephone}
                onChange={handleChange}
                onKeyUp={() => validInputText(value.telephone, 'tel-error', 'tel')} />
                <span className="span" id="tel-error"></span>
            </div>
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
                <label>Mot de passe</label>
                <span className="notice-pwd" id="notice-pwd"> 
                Au mois six (06) caractères alphanumérique
                (Ex: Mon012x0)
                </span>
                <div className="groups-field">
                    <p>
                        <input type="password" placeholder="Créer votre mot de passe..."
                        name="password"
                        id="password"
                        value={value.password}
                        onChange={handleChange}
                        onKeyUp={() => validInputText(value.password, 'pwd-error', 'pwd')} />
                        <ShowPasswdText id="password" />
                        <span className="span" id="pwd-error"></span>
                    </p>
                    <p>
                        <input type="password" placeholder="Confirmer votre mot de passe..."
                        name="passwordC"
                        value={value.passwordC}
                        onChange={handleChange}
                        onKeyUp={() => validInputText(value.firstname, 'pwdC-error', 'pwd')}/>
                        <span className="span" id="pwdC-error"></span>
                    </p>
                </div>
            </div>
            <div className="div-field">
                <p> Définissez votre rôle</p>
                <div className="role">
                    <div className="box-input">
                        <div className={`radio-input ${role=='Achecteur' ? 'radio-select':''}`}
                        onClick={() => setRole("Achecteur")}></div>
                        <label> Acheteur</label>
                    </div>
                    <div className="box-input">
                        <div className={`radio-input ${role=='Vendeur' ? 'radio-select':''}`}
                        onClick={() => setRole("Vendeur")}></div>
                        <label> Vendeur</label>
                    </div>
                    <div className="box-input">
                        <div className={`radio-input ${role=='Achecteur/Vendeur' ? 'radio-select':''}`}
                        onClick={() => setRole("Achecteur/Vendeur")}></div>
                        <label> Acheteur/Vendeur</label>
                    </div>
                </div>
            </div>
            <div className="btn-submit">
                <button onClick={handleSubmit} type="submit">Soumettre</button>
            </div>
            <p className="text-foot"> En appuyant sur Soumettre, vous accepter notre
                <a href="">&nbsp;Conditions d'utilisation</a> et notre
                <a href="">&nbsp;Politique de confidentialité.</a>
            </p>
        </>
    )
}

export default Register;