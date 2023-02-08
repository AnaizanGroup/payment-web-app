import React, { useEffect, useState } from "react";
import { FaGlobe, FaUserCircle } from "react-icons/fa";
import { FiChevronDown, FiGlobe, FiHeart, FiHome, FiMessageSquare, FiShoppingBag, FiUser, FiUsers } from "react-icons/fi";

import "./index.scss"
import Home from "./home/Home";
import Message from "./message/Message";
import Order from "./order/Order";
import Profil from "./profil/Profil";
import WhishList from "./whishlist/WhishList";

import logo from "../../../assets/images/svg/logo.svg";

const Index = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [indexDashboard, setIndexDashboard] = useState()

    const returnTabs = () => {
    
        if (tabIndex == 0) {
            return <Home />
        } else if (tabIndex == 1) {
            return <Profil />
        } else if (tabIndex==2) {
            return <Message />
        } else if (tabIndex==3) {
            return <WhishList />
        } else if (tabIndex==4) {
            return <Order />
        }
    }

    const activeLink = (index) => {
        setTabIndex(index)
        let allLi = document.querySelectorAll(".nav-li");

        for (var i=0; i<allLi.length; i++) {
            allLi[i].classList.remove('active-sublink')
        }
        allLi[index].classList.add('active-sublink')
    }

    const active ={
        background: 'var(--orange)',
        color: 'white'
    }

   
    return (
        <div className="dashboard-buyer-home">
            <div className="main">
                <div className="nav-bar">
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
                        <li className="nav-li" onClick={() => activeLink(0)}> <FiHome /> Accueil</li>
                        <li className="nav-li" onClick={() => activeLink(1)}> <FiUser /> Profil</li>
                        <li className="nav-li" onClick={() => activeLink(2)}> <FiMessageSquare /> Messages</li>
                        <li className="nav-li" onClick={() => activeLink(3)}> <FiHeart /> Mes Favoris</li>
                        <li className="nav-li" onClick={() => activeLink(4)}> <FiShoppingBag /> Mes Commandes </li>
                        <div className="bar"></div>
                        <li> Deconnexion</li>
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
                     
                        {returnTabs()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;