import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { validInputText } from "../controlFields/controlField"
import SelectCountryField from "../selectCountryField/SelectCountryField"

import "./FormAdresse.scss"

export const FormAdresse = ({ isPopup, n, c, cy, z, p, co }) => {
    const dispatch = useDispatch()
    const [names, setNames] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (validInputText(names, 'names-error', 'text')
            && validInputText(city, 'city-error', 'text')
            && validInputText(zipCode, 'code-error', 'alpha')
            && validInputText(phone, 'phone-error', 'tel')) {
/* 
            dispatch(userAddr({
                names,
                city,
                zipCode,
                phone
            })) */
        }
    }

    useEffect(() => {
        setNames(n != null ? n : '')
        setCountry(c != null ? c : '')
        setCity(cy != null ? cy : '')
        setZipCode(z != null ? z : '')
        setPhone(p != null ? p : '')
    }, [n, p, z, c, cy])

    return (
        <form className="form-checkout form-add">
            <span className="close-times"
                onClick={() => isPopup(false)}>&times;</span>
            <h3> Adresse de livraison </h3>
            <div className="div-input">
                <label>Nom complet (Ex: Jean Hugues Houinssou)</label>
                <input type="text" name=""
                    placeholder="..."
                    value={names}
                    onChange={(e) => e.target.value} />
                <span></span>
            </div>
            <div className="div-inputs">
                <p>
                    {/*
                            <input type="text" name="" placeholder="date expiration" />
                            <span></span> */}
                    <label>Pays/Région</label>
                    <SelectCountryField codes={co} countrys={c} />
                </p>
                <p>
                    <label> Ville/Province </label>
                    <input type="text" name=""
                        placeholder="code"
                        value={city}
                        onChange={(e) => e.target.value} />
                    <span></span>
                </p>
                <p>
                    <label> Code postale </label>
                    <input type="text" name=""
                        placeholder="code"
                        value={zipCode}
                        onChange={(e) => e.target.value} />
                    <span></span>
                </p>
            </div>
            <div className="div-input">
                <label> Téléphone </label>
                <input type="text" name=""
                    placeholder="Votre téléphone"
                    value={phone}
                    onChange={(e) => e.target.value} />
                <span></span>
            </div>
            <button className="btn-send" type="submit"> Enrégistré </button>
        </form>
    )
}