import React, { useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'
import { FaAngellist, FaChevronDown, FaFacebookF, FaLinkedinIn, FaListAlt, FaListOl, FaListUl, FaRegListAlt, FaTwitter, FaYoutube } from "react-icons/fa"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { VscListSelection } from "react-icons/vsc"
import { FiHeart, FiShoppingCart, FiChevronDown } from "react-icons/fi"
import { TiSocialLinkedinCircle } from "react-icons/ti"

import { countries } from "../countrylist/countrylist"

import "./Header.scss"
import logo from "../../assets/images/svg/logo.svg";
import { categories, HOME, PRODUCT } from "../../settings/constant"
import { Link } from "react-router-dom"

import Cart from "../cart/Cart"
import { useDispatch, useSelector } from "react-redux"


const Header = () => {
    const dispatch = useDispatch()

    const [showCart, setShowCart] = useState(false);

    const cart = useSelector((state) => state.cart.cartItem)

    return (
        <header>
            <div class="head-div1">
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">A propos</a></li>
                </ul>
                <ul>
                    <li class="user-account">
                        <a href=""> Mon compte</a>
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
            <div class="head-div2">
                <li>
                    <a href={HOME} class="logo-link">
                        <img src={logo} alt="" />
                    </a>
                </li>
                <div class="div2-child">
                    <form class="form-search">
                        <select class="">
                            <option value="">Produit</option>
                            <option value="">Vendeur</option>
                        </select>
                        <input type="search" name="keyword" id="" placeholder="Rechercher vos produits ici" />
                        <button type="submit"> Rechercher </button>
                    </form>
                    <div class="div-right">
                        <li class="shop"><a href=""> Ouvrir ma boutique</a></li>
                        {/* <a href="" class="user-account">
                            <img src="../../assets/images/svg/user-regular.svg' %}" alt="" />
                            <span> Mon&nbsp;compte </span>
                        </a> */}
                        <a href="">
                            <span class="nb-product">0</span>
                            <FiHeart />
                            <span class="name"> Favorite</span>
                        </a>
                        <div className="cart-divs">
                            <button onClick={() => setShowCart(true)}>
                                <span class="nb-product">0</span>
                                <FiShoppingCart />
                                <span class="name">Mon&nbsp;Panier</span>
                            </button>
                            <div style={showCart ? { display: "block" } : { display: "none" }}>
                                <Cart close={setShowCart} cart={cart} para={"Géré votre panier"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="head-div3">
                <div class="div-left">
                    <li>
                        <VscListSelection />
                        Catégories <FiChevronDown />
                        <div className="box-categorie">
                            {
                                categories.map(({ nameCat }, index) => {
                                    return <li key={index}> <Link to={{ pathname: `/product/${nameCat}` }}> {nameCat} </Link> </li>
                                })
                            }
                        </div>
                    </li>
                    <li>
                        <a href="" class="link"> Accessoires </a>
                        <div class="div-sub-link">
                            <ul>
                                <h3> Accessoires </h3>
                                <li>
                                    <div class="title-link">home</div>
                                    <div class="sublink">
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
                                    <div class="title-link">home</div>
                                    <div class="sublink">
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
                                    <div class="title-link">home</div>
                                </li>
                                <li>
                                    <div class="title-link">home</div>
                                </li>
                                <li>
                                    <div class="title-link">home</div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="" class="link"> Sports & Santé</a>

                    </li>
                    <li>
                        <a href="" class="link"> Beauté & Santé</a>
                    </li>
                    <li>
                        <a href="" class="link"> Culture africaine </a>
                    </li>
                    <li>
                        <a href="" class="link"> Accessoires Informatique</a>
                    </li>
                </div>

                <div class="div-right">
                    <li class="li">
                        <span class="">  French <FaChevronDown /> </span>
                        <div class="lang">
                            <p>
                                choisissez une langage
                            </p>
                            <div class="div-select">
                                <div class="child1">
                                    <span>
                                        English
                                    </span>
                                    <FaChevronDown />
                                </div>
                                <div class="child2">
                                    <a href="#">English</a>
                                    <a href="#">French</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <div class="bar"></div>
                    <li class="li">
                        <span> <i class={`flag-icon flag-icon-bj`}></i> X0F <FaChevronDown /> </span>
                        <div class="lang">
                            <p>Votre pays actuel est bien le <i class="flag flag-bj"></i> ?
                                sinon choisissez votre pays actuel...
                            </p>
                            <div class="div-select">
                                <div class="child1">
                                    <span>
                                        <i class={`flag-icon flag-icon-bj`}></i> Bénin
                                    </span>
                                    <FaChevronDown />
                                </div>
                                <div class="child2">
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