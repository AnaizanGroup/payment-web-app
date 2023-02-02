import React, { useEffect, useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'

import "./Header.scss"
import logo from "../../assets/images/svg/logo.svg";
import { CART_SHOPPING, CHECKOUT, HOME } from "../../settings/constant"
import { FaShoppingBag, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";


const Header = ({ children1, children2, children3, children4 }) => {

    const [title, setTitle] = useState(1)

    useEffect(() => {
        let path = window.location.pathname.split("/")[1]
        if (path != "categories") {
            sessionStorage.removeItem("nameCat")
            sessionStorage.removeItem("nameProd")
            sessionStorage.removeItem("indexCat")
            sessionStorage.removeItem("active-sublink")
        }

        if (path == CART_SHOPPING.split('/')[1]) {
            setTitle(1)
        } else if (path == CHECKOUT.split('/')[1]) {
            setTitle(2)
        } else {
            setTitle(0)
        }
    })

    const renderParty = () => {
        if (title == 1) {
            return <>
             <h2 className="title-page"> <FiShoppingBag /> Panier d'Achat </h2>
             </>
        } else if (title == 2) {
            return <>
             <h2 className="title-page">  Vérification et Paiement </h2>
             </>
        }
    }
    return (
        <header>
            {children1}
            <div className="head-div2">
                <li>
                    <a href={HOME} className="logo-link">
                        <img src={logo} alt="" />
                    </a>
                </li>
               { renderParty()}
                <div className="div2-child">
                    {children2}
                    {children3}
                </div>
            </div>
            {children4}
        </header>
    )
}

export default Header;