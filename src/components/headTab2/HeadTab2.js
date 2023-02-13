import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { FiHeart, FiList, FiLogOut, FiMessageSquare, FiShoppingCart } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { DASHBOARD_SELLER_MESSAGE } from "../../settings/constant"
import { RightBtns } from "../header/fragments/RightBtns"
import "./HeadTab2.scss"

import logo from "../../assets/images/svg/logo.svg";

export const HeadTabs = ({ title }) => {
    const navigate = useNavigate()

    const showMenu = () => {
        let menu = document.querySelector(".nav-bar")

            if(menu.style.width == "210px") {
                menu.style.width = "0px"
            } else {
                menu.style.width = "210px"
            }
        
    }

    return (
        <h2 className="title-tabs">
            <span>
                <span>
                <FiList onClick={showMenu} />
                <img src={logo} />
                </span>
                <span>{title}</span>
            </span>
    
            <p>
                <button onClick={() => navigate(DASHBOARD_SELLER_MESSAGE)}>
                    <FaEnvelope /> <span>0</span> </button>
                    <div className="bar"></div>
                <button> <FiHeart /> <span>0</span> </button>
                <div className="bar"></div>
                <button> <FiShoppingCart /> <span>0</span> </button>
                
            </p>
        </h2>
    )
}