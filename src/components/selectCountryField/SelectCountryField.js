import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { countries } from "../countrylist/countrylist";

import "./SelectCountryField.scss";

const SelectCountryField = ({codes, countrys}) => {
    const [country, setCountry] = useState(sessionStorage.getItem('country'))

    const [code, setCode] = useState(codes)

    const selectedCountry = (id, name, code) => {
        setCountry(name)
        setCode(code.toLowerCase())
        sessionStorage.setItem("country", name)
        sessionStorage.setItem("code", code.toLowerCase())
    }

    useEffect(() => {
    })

    return (
        <ul className="select-country">
            <li className="selected">
                <div className="selected-item">
                    <span className={`flag-icon flag-icon-${code}`}>
                    </span>
                    <span> {country} </span>
                </div>
                <FiChevronDown className="arrow" />
            </li>
            <ul className="options-select">
                {countries.map((list, index) => {
                    return <span className="option"
                        onClick={() => selectedCountry(index, list.name, list.code)}
                        key={index}>
                        <span className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></span>
                        <span>  {list.name} </span>
                    </span>
                })}
            </ul>
        </ul>
    )
}

export default SelectCountryField;