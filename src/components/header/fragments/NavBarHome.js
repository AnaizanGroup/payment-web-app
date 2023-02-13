import React from "react"
import 'flag-icon-css/css/flag-icons.min.css'

import { FiChevronDown } from "react-icons/fi"

import "../Header.scss"
import DropCategorie from "../../dropCategorie/DropCategorie"
import { useSelector } from "react-redux"
import { countries } from "../../countrylist/countrylist"

export const NavBarHome = () => {

    const categories = useSelector((state) => state.products.categorie)

    const showCategorie = () => {
        let drop = document.querySelector(".head-div3")

        if (drop.style.width == "0vh") {
            drop.style.width ="100%"
        }else {
            drop.style.width ="0vh"
        }
    }

    return(
        <>
            <div className="head-div3">
            <span onClick={showCategorie} className="close-x">&times;</span>
                <div className="div-left">
                    <DropCategorie link={"/categories/products/"} listCategorie={categories} />
                    <li>
                        <a href="" className="link"> Magasin </a> 
                    </li>
                    <li>
                        <a href="" className="link"> % Promotion</a>
                    </li>
                    <li>
                        <a href="" className="link"> Boutiques </a>
                    </li>
                </div>

                <div className="div-right">
                    <li className="li">
                        <span className="">  French <FiChevronDown /> </span>
                        <div className="lang">
                            <p>
                                choisissez une langage
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        English
                                    </span>
                                    <FiChevronDown />
                                </div>
                                <div className="child2">
                                    <a href="#">English</a>
                                    <a href="#">French</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <div className="bar"></div>
                    <li className="li">
                        <span> <i className={`flag-icon flag-icon-bj`}></i> X0F <FiChevronDown /> </span>
                        <div className="lang">
                            <p>Votre pays actuel est bien le <i className="flag flag-bj"></i> ?
                                sinon choisissez votre pays actuel...
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        <i className={`flag-icon flag-icon-bj`}></i> Bénin
                                    </span>
                                    <FiChevronDown />
                                </div>
                                <div className="child2">
                                    {countries.map((list, index) => {
                                        return <a href="" key={index}> <i className={`flag-icon flag-icon-${list.code.toLowerCase()}`}></i> {list.name} </a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}