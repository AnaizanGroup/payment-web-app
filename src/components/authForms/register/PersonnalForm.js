import React, { useState } from "react"
import { LOGIN } from "../../../settings/constant"
import { ControlField } from "../../controlField/ControlField"
import { countries } from "../../countrylist/countrylist"
import SelectCountryField from "../../selectCountryField/SelectCountryField"
import { ShowPasswdText } from "../../showPasswdText/ShowPasswdText"
import ChoiceContact from "./ChoiceContact"

const PersonnalForm = () => {

    const [option, setOption] = useState(0)

    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        country: '',
        telephone: '',
        email: '',
        password: '',
        passwordC: ''
    })

    const active = {
        background: "var(--orange-400)",
        color: "var(--white-500)"
    }

    const [dialCode, setDialCode] = useState(sessionStorage.getItem('dial_code'))

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (ControlField(value.firstname, 'firstname-error', 'text')
            && ControlField(value.lastname, 'lastname-error', 'text')
            && ControlField(value.telephone, 'tel-error', 'tel')
            && ControlField(value.email, 'email-error', 'email')
            && ControlField(value.password, 'pwd-error', 'pwd')) {
            if (value.passwordC == value.password) {
                let firstname = value.firstname,
                    lastname = value.lastname,
                    country = value.country,
                    phone = dialCode + value.telephone,
                    email = value.email,
                    password = value.password;


            } else {
                let pwdC = document.getElementById("pwdC-error")
                pwdC.innerText = "Mot de passe incorrect"
            }
        }
    }


    const defineDialCodeCountry = () => {
        let country = sessionStorage.getItem('country')
        let find = countries.find(
            (item) => item.name == country
        )
        if (find) {
            sessionStorage.setItem('dial_code', find.dial_code)
            setDialCode(find.dial_code)
        }
    }

    return (
        <form>
            <h2> Create your account with</h2>
            <ChoiceContact option={option}
                setOption={setOption} />
            <div className="div-field">
                {option == 0 ? (
                    <>
                        <label>Email or Phone number</label>
                        <input type="email" placeholder="votre email..."
                            name="email"
                            value={value.email}
                            onChange={handleChange}
                            onKeyUp={() => ControlField(value.email, 'email-error', 'email')} />
                        <span className="span" id="email-error"></span>
                    </>
                ) : (
                    <div className="div-field">
                        <label>Téléphone</label>
                        <span className="span" id="tel-error"></span>
                        <div className="phones">
                            <p> {dialCode} </p>
                            <input type="tel" placeholder="votre téléphone..."
                                name="telephone"
                                value={value.telephone}
                                onChange={handleChange}
                                onKeyUp={() => ControlField(value.telephone, 'tel-error', 'tel')} />
                        </div>
                    </div>
                )}
            </div>
            <div className="div-field">
                <label> Full Name</label>
                <div className="groups-field">
                    <p>
                        <input type="text" placeholder="Entrer votre nom..."
                            name="firstname"
                            value={value.firstname}
                            onChange={handleChange}
                            onKeyUp={() => ControlField(value.firstname, 'firstname-error', 'text')} />
                        <span className="span" id="firstname-error"></span>
                    </p>
                    <p>
                        <input type="text" placeholder="Entrer votre prénom..."
                            name="lastname"
                            value={value.lastname}
                            onChange={handleChange}
                            onKeyUp={() => ControlField(value.lastname, 'lastname-error', 'text')} />
                        <span className="span" id="lastname-error"></span>
                    </p>
                </div>
            </div>
            <div className="div-field">
                <label>Country</label>
                <SelectCountryField />
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
                            onKeyUp={() => ControlField(value.password, 'pwd-error', 'pwd')} />
                        <ShowPasswdText id="password" />
                        <span className="span" id="pwd-error"></span>
                    </p>
                    <p>
                        <input type="password" placeholder="Confirmer votre mot de passe..."
                            name="passwordC"
                            value={value.passwordC}
                            onChange={handleChange}
                            onKeyUp={() => ControlField(value.firstname, 'pwdC-error', 'pwd')} />
                        <span className="span" id="pwdC-error"></span>
                    </p>
                </div>
            </div>
            <p className="p-checks">
                <input type="checkbox" />
                <span> By continuing you accept our <a href="">Privacy Policy</a> </span>
            </p>
            <div className="btn-submit">
                <button onClick={handleSubmit} type="submit">Soumettre</button>
            </div>
            <p className="text-foot">
                Si vous avez un compte, <a href={LOGIN}>Sign in</a>
            </p>
        </form>
    )
}

export default PersonnalForm;