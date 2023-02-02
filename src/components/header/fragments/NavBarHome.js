import React from "react"
import 'flag-icon-css/css/flag-icons.min.css'

import { FiChevronDown } from "react-icons/fi"

import "../Header.scss"
import DropCategorie from "../../dropCategorie/DropCategorie"
import { useSelector } from "react-redux"
import { countries } from "../../countrylist/countrylist"

export const NavBarHome = () => {

    const categories = useSelector((state) => state.products.categorie)

    return(
        <>
            <div className="head-div3">
                <div className="div-left">
                    <DropCategorie listCategorie={categories} />
                    <li>
                        <a href="" className="link"> Accessoires </a>
                        <div className="div-sub-link">
                            <ul>
                                <h3> Accessoires </h3>
                                <li>
                                    <div className="title-link">home</div>
                                    <div className="sublink">
                                        <div>
                                            <h3> home </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                        <div>
                                            <h3> home </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                        <div>
                                            <h3> home </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title-link">home</div>
                                    <div className="sublink">
                                        <div>
                                            <h3> homes </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                        <div>
                                            <h3> home </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                        <div>
                                            <h3> home </h3>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                            <a href="">lien</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="title-link">home</div>
                                </li>
                                <li>
                                    <div className="title-link">home</div>
                                </li>
                                <li>
                                    <div className="title-link">home</div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="" className="link"> Sports & Santé</a>

                    </li>
                    <li>
                        <a href="" className="link"> Beauté & Santé</a>
                    </li>
                    <li>
                        <a href="" className="link"> Culture africaine </a>
                    </li>
                    <li>
                        <a href="" className="link"> Accessoires Informatique</a>
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