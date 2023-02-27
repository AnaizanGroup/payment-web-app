import React, { useContext, useEffect, useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { userRegister } from "../../../store/userAuth/userReducer"
import { validInputText } from "../../controlFields/ControlField"
import { countries } from "../../countrylist/countrylist"
import { RadioButton } from "../../radioButton/RadioButton"
import SelectCountryField from "../../selectCountryField/SelectCountryField"
import { ShowPasswdText } from "../../showPasswdText/ShowPasswdText"

import "../auth.scss"
import Auth from "../Auth"
import BoxAccount from "../../boxAccount/BoxAccount"
import PersonnalForm from "./PersonnalForm"
import ProfessionnalForm from "./ProfessionnalForm"

const Register = () => {
    const [option, setOption] = useState(0)
    const [typeAccount, setTypeAccount] = useState(0)

    const active = {
        background: "var(--orange-400)",
        color: "var(--white-500)"
    }
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        country: '',
        telephone: '',
        email: '',
        password: '',
        passwordC: ''
    })

    const [dialCode, setDialCode] = useState(sessionStorage.getItem('dial_code'))

    const handleChange = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (validInputText(value.firstname, 'firstname-error', 'text')
            && validInputText(value.lastname, 'lastname-error', 'text')
            && validInputText(value.telephone, 'tel-error', 'tel')
            && validInputText(value.email, 'email-error', 'email')
            && validInputText(value.password, 'pwd-error', 'pwd')) {
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

    useEffect(() => {
        setInterval(() => {
            defineDialCodeCountry()
        }, 1000);
    }, [dialCode])

    return (
        <Auth>
             <div className="choice-type-account">
                    <h1> Create account </h1>
                    <p> Select type of account </p>
                    <div className="btn-group">
                        <button
                            style={typeAccount == 0 ? active : null}
                            onClick={() => setTypeAccount(0)}>Personnal</button>
                        <button
                            style={typeAccount == 1 ? active : null}
                            onClick={() => setTypeAccount(1)}>Professionnal</button>
                    </div>
                    <div className="auth-sociaux">
                        <BoxAccount />
                    </div>
                </div>
            {typeAccount==0? <PersonnalForm />:<ProfessionnalForm /> }
        </Auth>
    )
}

export default Register;