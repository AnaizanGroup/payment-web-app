import React, { useEffect, useState } from "react";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiGlobe, FiHeart, FiHome, FiList, FiMessageSquare, FiShoppingBag, FiUser, FiUsers } from "react-icons/fi";
import { FcShop } from "react-icons/fc"

import "./LayoutSeller.scss"

import logo from "../../../assets/images/svg/logo.svg";
import { DASHBOARD_SELLER, DASHBOARD_SELLER_ADD_PRODUCTS, DASHBOARD_SELLER_HOME, DASHBOARD_SELLER_MESSAGE, DASHBOARD_SELLER_ORDER, DASHBOARD_SELLER_PAYEMENT, DASHBOARD_SELLER_PRODUCTS, DASHBOARD_SELLER_PROFIL } from "../../../settings/constant";
import { useNavigate } from "react-router-dom";

const LayoutSeller = ({children}) => {
    const navigate = useNavigate()
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
            label: 'Tableau de bord',
            url: DASHBOARD_SELLER_HOME,
            icon: <FiHome />,
        },
        {
            label: 'Profil',
            url:DASHBOARD_SELLER_PROFIL,
            icon: <FiUser />
        },
        {
            label: 'Messages',
            url:DASHBOARD_SELLER_MESSAGE,
            icon: <FiUser />
        },
        {
            label: 'Produits',
            url: '#',
            icon: <FiList />,
            submenu: [
                { label2: 'Liste des produits', url2: DASHBOARD_SELLER_PRODUCTS },
                { label2: 'Ajouter un produit', url2: DASHBOARD_SELLER_ADD_PRODUCTS },
            ]
        },
        {
            label: 'Ventes',
            url: DASHBOARD_SELLER_ORDER,
            icon: <FiList />
        },
        {
            label: 'Paramètre Paiement',
            url: DASHBOARD_SELLER_PAYEMENT,
            icon: <FiList />
        }
    ]

    const navigateUrl = (url) => {
        navigate(url)
    }

    const navigateUrl2 = (url) => {
        navigate(url)
    }

    return (
        <div className="dashboard-seller-home">
            <div className="main">
                {/*<div className="head-main">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                </div> */}
                <div className="main-center">
                    <div className="nav-bar">

                        <div className="logo">
                            <img src={logo} />
                        </div>
                        {/*  <div className="div-user">
                            <FaUserCircle />
                            <h2> Jean Hugues HOUINSSOU</h2>
                        </div> */}
                        <div className="switch-role">
                            <button>Acheteur</button>
                            <button>Vendeur</button>
                        </div>
                        <div className="shop">
                            <FcShop />
                            <h4> LVM Shop Industrie SARL </h4>
                        </div>
                        <button className="btn-change-shop">Changer de boutique</button>
                        <div className="nav">
                            {
                                menu.map(({ label, url, icon, submenu }, index) => {
                                    return <div className="nav-ul" key={index}>
                                        <p onClick={() => navigateUrl(url)}>
                                            <span> {icon} {label} </span>
                                            {submenu ? <FiChevronRight /> : null}
                                        </p>
                                        {submenu && (
                                            <div className="sub-ul">
                                                {
                                                    submenu.map((list, index2) => {
                                                        return <li onClick={() => navigateUrl(list.url2)}
                                                        key={index2}>
                                                            {list.label2}
                                                        </li>
                                                    })
                                                }
                                            </div>
                                        )}
                                    </div>
                                })
                            }
                            {/* <div className="bar"></div>
                            <li> Deconnexion</li> */}
                        </div>
                        <div className="footer">
                            <p> &copy;2023 FeexMarket </p>
                        </div>
                    </div>

                    <div className="content">
                        <div className="head">
                            <h3> Bienvenu dans votre espace personnel </h3>
                            <li> <FiGlobe /> <span>fr</span> <FiChevronDown /> </li>
                        </div>

                        <div className="block-content">

                            {children}
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )
}

export default LayoutSeller;