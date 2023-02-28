import React, { useEffect, useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'
import axios from "axios"

import "./Header.scss"
import { HOME_PAGE } from "../../settings/constant"
import logo from "../../assets/images/svg/logo.svg"


const Header = () => {

    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data)
        sessionStorage.setItem('code_country', res.data.code_country)
        sessionStorage.setItem('country', res.data.country)
        sessionStorage.setItem('city', res.data.city)
    }


    useEffect(() => {

    }, [])


    return (
        <header className="header">
            <div className="topbar">
                <a href={HOME_PAGE} className="logo">
                    <img src={logo} />
                </a>

                <nav className="ul-nav-flex">
                    <ul className="ul1">
                        <a href="">Particular</a>
                        <a href="">Professionnal</a>
                    </ul>
                    <ul className="ul2">
                        <a href="">Pricing</a>
                        <a href="">Developpers</a>
                        <a href="">Company</a>
                        <ul className="btn-auth">
                            <a href="">Sign in</a>
                            <a href="">Sign up</a>
                        </ul>
                        <ul className="right-ul2">
                            <li>
                                <i className={`flag-icon flag-icon-ml`}></i>
                                <span>XOF</span>
                            </li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;