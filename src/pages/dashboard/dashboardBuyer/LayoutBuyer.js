import React, { Children, useEffect, useState } from "react";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiGlobe, FiHeart, FiHome, FiList, FiMessageSquare, FiShoppingBag, FiUser, FiUsers } from "react-icons/fi";

import "./LayoutBuyer.scss"

import logo from "../../../assets/images/svg/logo.svg";
import { DASHBOARD_BUYER_FAVORIS, DASHBOARD_BUYER_HOME, DASHBOARD_BUYER_MESSAGE, DASHBOARD_BUYER_ORDER, DASHBOARD_BUYER_PROFIL } from "../../../settings/constant";
import LayoutBuyers from "../../../layouts/layoutSite/LayoutBuyers";

const LayoutBuyer = ({ children }) => {
    const [tabIndex, setTabIndex] = useState(0)
    const [indexDashboard, setIndexDashboard] = useState()

    const activeLink = (index) => {
        setTabIndex(index)
        let allLi = document.querySelectorAll(".nav-li");

        for (var i = 0; i < allLi.length; i++) {
            allLi[i].classList.remove('active-sublink')
        }
        allLi[index].classList.add('active-sublink')
    }

    const active = {
        background: 'var(--orange)',
        color: 'white'
    }

    const menu = [
        {
            label: 'Accueil',
            url: DASHBOARD_BUYER_HOME,
            icon: <FiHome />,
        },
        {
            label: 'Profil',
            url: DASHBOARD_BUYER_PROFIL,
            icon: <FiUser />
        },
        {
            label: 'Messages',
            url: DASHBOARD_BUYER_MESSAGE,
            icon: <FiMessageSquare />
        },
        {
            label: 'Favoris',
            url: DASHBOARD_BUYER_FAVORIS,
            icon: <FiHeart />
        },
        {
            label: 'Commandes',
            url: DASHBOARD_BUYER_ORDER,
            icon: <FiList />
        }
    ]

    
    const navigateUrl = (url, index) => {
        window.location.href=url
        sessionStorage.setItem('menuId', index)

        let allLink = document.querySelectorAll(".link-p")

    }

    const showMenu = () => {
        let menu = document.querySelector(".nav-bar")

            if(menu.style.width == "210px") {
                menu.style.width = "0px"
            } else {
                menu.style.width = "210px"
            }
        
    }
  

    return (
        <div className="dashboard-buyer-home">
            <div className="main">
                <div className="nav-bar">
                    <span onClick={showMenu} className="close-x"> &times; </span>
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="div-user">
                        <FaUserCircle />
                        <h2> Jean Hugues HOUINSSOU</h2>
                    </div>
                    <div className="switch-role">
                        <button>Acheteur</button>
                        <button>Vendeur</button>
                    </div>
                    <div className="nav">
                        {
                            menu.map(({ label, url, icon, submenu }, index) => {
                                return <div className="nav-ul" key={index}  
                                onClick={() => navigateUrl(url, index)}>
                                    <p className="link-p">
                                        <span> {icon} {label} </span>
                                        {submenu ? <FiChevronRight /> : null}
                                    </p>
                                </div>
                            })
                        }
                        <div className="bar"></div>
                        <li className="nav-ul"> Deconnexion</li>
                    </div>
                </div>

                <div className="content">
                 
                    <div className="block-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutBuyer;