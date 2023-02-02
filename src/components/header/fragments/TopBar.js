import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HOME } from '../../../settings/constant'
import Auth from '../../authForms/Auth'
import BoxAccount from '../../boxAccount/BoxAccount'

import "../Header.scss"

export const TopBar = () => {
    const [openAuth, setOpenAuth] = useState(false)
    const [openForm, setOpenForm] = useState(0)

    const openForms = (form, auth) => {
        setOpenForm(form)
        setOpenAuth(auth)
    }

    return (
        <>
            <div className="head-div1">
                {openAuth ? <Auth formAuth={openForm} openAuth={setOpenAuth} /> : ''}
                <ul>
                    <li><a href={HOME}>Accueil</a></li>
                    <li><a href="">Comment créer mon boutique ?</a></li>
                </ul>
                <ul>
                    <li>
                        <a href="">Aide</a>
                    </li>
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
                        <a href=""> <FaTwitter /> </a>
                    </li>
                    <div></div>
                    <li>
                        <a href=""> <FaLinkedinIn /> </a>
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