import React, { useEffect, useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'
import { FaAngellist, FaChevronDown, FaFacebookF, FaLinkedinIn, FaListAlt, FaListOl, FaListUl, FaRegListAlt, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { VscListSelection } from "react-icons/vsc"
import { FiHeart, FiShoppingCart, FiChevronDown } from "react-icons/fi"

import { countries } from "../countrylist/countrylist"

import "./Header.scss"
import logo from "../../assets/images/svg/logo.svg";
import { HOME, PRODUCT } from "../../settings/constant"
import { Link } from "react-router-dom"

import Cart from "../cart/Cart"
import { useDispatch, useSelector } from "react-redux"
import DropCategorie from "../dropCategorie/DropCategorie"
import BoxAccount from "../boxAccount/BoxAccount"
import Register from "../authForms/register/Register"
import Auth from "../authForms/Auth"


const Header = (props) => {
    const dispatch = useDispatch()
    const [openAuth, setOpenAuth] = useState(false)
    const [openForm, setOpenForm] = useState(0)
    const cart = useSelector((state) => state.cart.cartItem)
    const categories = useSelector((state) => state.products.categorie)

    const openForms = (form, auth) => {
        setOpenForm(form)
        setOpenAuth(auth)
    }

    useEffect(() => {
        let path = window.location.pathname.split("/")[1]
        if (path != "categories") {
            sessionStorage.removeItem("nameCat")
            sessionStorage.removeItem("nameProd")
            sessionStorage.removeItem("indexCat")
            sessionStorage.removeItem("active-sublink")
        }
        
    })
    return (
        <header>
            {openAuth ? <Auth formAuth={openForm} openAuth={setOpenAuth} />:''}
            <div className="head-div1">
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
            <div className="head-div2">
                <li>
                    <a href={HOME} className="logo-link">
                        <img src={logo} alt="" />
                    </a>
                </li>
                <div className="div2-child">
                    <form className="form-search">
                        <select className="">
                            <option value="">Produit</option>
                            <option value="">Vendeur</option>
                        </select>
                        <input type="search" name="keyword" id="" placeholder="Rechercher vos produits ici" />
                        <button type="submit"> Rechercher </button>
                    </form>
                    <div className="div-right">
                        <li className="shop"><a href=""> Ouvrir ma boutique</a></li>
                        {/* <a href="" className="user-account">
                            <img src="../../assets/images/svg/user-regular.svg' %}" alt="" />
                            <span> Mon&nbsp;compte </span>
                        </a> */}
                        <a href="">
                            <span className="nb-product">0</span>
                            <FiHeart />
                            <span className="name"> Favorite</span>
                        </a>
                        <div className="cart-divs">
                            <button>
                                <span className="nb-product"> {cart.length} </span>
                                <FiShoppingCart />
                                <span className="name">Mon&nbsp;Panier</span>
                            </button>
                            <div className="card-cart">
                                <Cart para={"Géré votre panier"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <span className="">  French <FaChevronDown /> </span>
                        <div className="lang">
                            <p>
                                choisissez une langage
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        English
                                    </span>
                                    <FaChevronDown />
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
                        <span> <i className={`flag-icon flag-icon-bj`}></i> X0F <FaChevronDown /> </span>
                        <div className="lang">
                            <p>Votre pays actuel est bien le <i className="flag flag-bj"></i> ?
                                sinon choisissez votre pays actuel...
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        <i className={`flag-icon flag-icon-bj`}></i> Bénin
                                    </span>
                                    <FaChevronDown />
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
        </header>
    )
}

export default Header;