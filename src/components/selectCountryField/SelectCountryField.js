import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { countries } from "../countrylist/countrylist";

import "./SelectCountryField.scss";

const SelectCountryField = () => {

    const selectedCountry = (id) => {
        var allOpt = document.querySelectorAll(".option"),
            options = document.querySelector(".selected-item");
        alert(id)
        options.innerHtml = allOpt[id].innerHTML
    }

    return (
        <ul className="select-country">
            <li className="selected">
                <div className="selected-item">
                    <span className="flag-icon flag-icon-us">
                    </span>
                    <span> USA</span>
                </div>
                <FiChevronDown className="arrow" />
            </li>
            <ul className="options-select">
                {countries.map((list, index) => {
                    return <span className="option"
                        onClick={() => selectedCountry(index)}
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