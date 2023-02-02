import React from "react"
import { FiHeart, FiShoppingCart } from "react-icons/fi"
import { useSelector } from "react-redux"
import Cart from "../../cart/Cart"

import "../Header.scss"

export const RightBtns = () => {
    const cart = useSelector((state) => state.cart.cartItem)
 
    return (
        <>
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
        </>
    )
}