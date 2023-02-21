import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HOME, SHOP_HOME } from '../../../settings/constant'
import Auth from '../../authForms/Auth'
import BoxAccount from '../../boxAccount/BoxAccount'

import "../Header.scss"

export const TopBar = () => {
    const [part, isPart] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)
    const [openForm, setOpenForm] = useState(0)

    const openForms = (form, auth) => {
        setOpenForm(form)
        setOpenAuth(auth)
    }

    useEffect(() => {
        let path = window.location.pathname.split('/')[1]
        if (path == SHOP_HOME.split('/')[1]) {
            isPart(true)
        }
    })

    const renders = () => {
        if (!part) {
            return (
                <>
                    <li><a href={HOME}>Accueil</a></li>
                    <li><a href="">Comment créer mon boutique ?</a></li>
                </>
            )
        }
    }
    return (
        <>
            <div className="head-div1">
                {openAuth ? <Auth formAuth={openForm} openAuth={setOpenAuth} /> : ''}
                <ul>
                    {renders()}
                </ul>
                <ul>
                    <div></div>
                    <li className="user-account">
                        <a href=""> Mon compte</a>
                        <BoxAccount openAuth={openForms} />
                    </li>
                    <div></div>
                    <li>
                        <a href=""><FaFacebookF /></a>
                    </li>
                    <div></div>
                    <li>
                        <a href=""> <FaPinterest /> </a>
                    </li>
                    <div></div>
                    <li>
                        <a href=""> <FaInstagram /> </a>
                    </li>
                    <div></div>
                    <li>
                        <a href=""> <FaYoutube />  </a>
                    </li>
                </ul>
            </div>
        </>
    )
}