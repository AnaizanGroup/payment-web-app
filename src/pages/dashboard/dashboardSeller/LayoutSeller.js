import React, { useEffect, useState } from "react";
import { FaGlobe, FaList, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronRight, FiGlobe, FiHeart, FiHome, FiList, FiMessageSquare, FiShoppingBag, FiUser, FiUsers } from "react-icons/fi";
import { FcShop } from "react-icons/fc"
import { AiOutlineDashboard } from "react-icons/ai"
import { } from "react-icons/ri"
import { MdPayment } from "react-icons/md"

import "./LayoutSeller.scss"

import logo from "../../../assets/images/svg/logo.svg";
import { DASHBOARD_BUYER_HOME,
    DASHBOARD_SELLER_ADD_PRODUCTS, 
    DASHBOARD_SELLER_COBEILLE, 
    DASHBOARD_SELLER_HOME, 
    DASHBOARD_SELLER_MESSAGE, 
    DASHBOARD_SELLER_PAYEMENT, 
    DASHBOARD_SELLER_PRODUCTS, 
    DASHBOARD_SELLER_PROFIL, 
    DASHBOARD_SELLER_SALLE } from "../../../settings/constant";
import { useNavigate } from "react-router-dom";

const LayoutSeller = ({ children }) => {
    const navigate = useNavigate()
    const [tabIndex, setTabIndex] = useState(0)
    const [indexDashboard, setIndexDashboard] = useState()
    const [showMenuMobile, isShowMenuMobile] = useState(false)

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
            icon: <AiOutlineDashboard />,
        },
        {
            label: 'Profil',
            url: DASHBOARD_SELLER_PROFIL,
            icon: <FiUser />
        },
        {
            label: 'Messages',
            url: DASHBOARD_SELLER_MESSAGE,
            icon: <FiMessageSquare />
        },
        {
            label: 'Produits',
            url: '#',
            icon: <FiList />,
            submenu: [
                { label2: 'Liste des produits', url2: DASHBOARD_SELLER_PRODUCTS },
                { label2: 'Ajouter un produit', url2: DASHBOARD_SELLER_ADD_PRODUCTS },
                { label2: 'Cobeille', url2: DASHBOARD_SELLER_COBEILLE },
            ]
        },
        {
            label: 'Ventes',
            url: DASHBOARD_SELLER_SALLE,
            icon: <FiList />
        },
        {
            label: 'Paramètre Paiement',
            url: DASHBOARD_SELLER_PAYEMENT,
            icon: <MdPayment />
        }
    ]

    const navigateUrl = (url, index) => {
        window.location.href=url
        sessionStorage.setItem('menuId', index)

        let allLink = document.querySelectorAll(".link-p")

        for (var i = 0; i < allLink.length; i++) {
            allLink[i].classList.remove("active-menu")
        }
        let menuId = sessionStorage.getItem('menuId')

        //if( allLink[menuId].className.split(" ").length != 2) {
        allLink[menuId].classList.add("active-menu")
        /*    } else {
               allLink[menuId].classList.remove("active-menu")
           } */
    }

    const showMenu = () => {
        let menu = document.querySelector(".nav-bar")

            if(menu.style.width == "300px") {
                menu.style.width = "0px"
            } else {
                menu.style.width = "300px"
            }
        
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

                        <div className="logo z-index bg-white">
                            <img src={logo} />
                        </div>
                        {/*  <div className="div-user">
                            <FaUserCircle />
                            <h2> Jean Hugues HOUINSSOU</h2>
                        </div> */}
                        <div className="switch-role z-index">
                            <button>Acheteur</button>
                            <button onClick={() => navigate(DASHBOARD_BUYER_HOME)}>Vendeur</button>
                        </div>
                        <div className="shop z-index ">
                            <FcShop />
                            <h4> LVM Shop Industrie SARL </h4>
                        </div>
                        <button className="btn-change-shop z-index">Changer de boutique</button>
                        <div className="nav z-index">
                            {
                                menu.map(({ label, url, icon, submenu }, index) => {
                                    return <div className="nav-ul" key={index}>
                                        <p onClick={() => navigateUrl(url, index)}
                                            className="link-p">
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

                    <div className="body">
                        <div className="content-body">
                            <div className="head">
                                <li>
                                <FaList onClick={showMenu} />
                                <h3> Bienvenu dans votre espace personnel </h3>
                                </li>
                                <li> <FiGlobe /> <span>fr</span> <FiChevronDown /> </li>
                            </div>

                            <div className="block-content">

                                {children}
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )
}

export default LayoutSeller;