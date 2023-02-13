import React, { useEffect, useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'

import "./Header.scss"
import logo from "../../assets/images/svg/logo.svg";
import { CART_SHOPPING, CHECKOUT, HOME } from "../../settings/constant"
import { FaShoppingBag, FaShoppingBasket, FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag, FiHeart, FiMenu } from "react-icons/fi";
import { SearchBarShop } from "./fragments/SearchBarShop";


const Header = ({ children1, children2, children3, children4, children5 }) => {

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

    const showCategorie = () => {
        let drop = document.querySelector(".head-div3")

        if (drop.style.width == "0vh") {
            drop.style.width ="100%"
        }else {
            drop.style.width ="0vh"
        }
    }

    return (
        <header>
            {children1}
            <div className="head-div2">
                <div className="div2">
                    <li>
                        <FiMenu onClick={showCategorie} />
                        <a href={HOME} className="logo-link">
                            <img src={logo} alt="" />
                        </a>
                    </li>
                    {renderParty()}
                    {children5}
                    <div className="div2-child">
                        {children2}
                        {children3}
                    </div>
                </div>
                <div className="div-search-phone">
                    {children2}
                </div>
            </div>
            {children4}
        </header>
    )
}

export default Header;