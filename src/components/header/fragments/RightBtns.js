import React, { useEffect, useState } from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { useSelector } from "react-redux"
import { SHOP_HOME } from "../../../settings/constant"
import Cart from "../../cart/Cart"

import "../Header.scss"

export const RightBtns = () => {
    const [part, isPart] = useState(false)
    const cart = useSelector((state) => state.cart.cartItem)


    useEffect(() => {
        let path = window.location.pathname.split('/')[1]
        if (path == SHOP_HOME.split('/')[1]) {
            isPart(true)
        }
    })

    const renders = () => {
        if (!part) {
            return (
                <>
                    <li className="shop"><a href=""> Ouvrir ma boutique</a></li>
                </>
            )
        }
    }
    return (
        <>
            <div className="div-right">
                {renders()}
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
        </>
    )
}