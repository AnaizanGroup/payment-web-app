import React from "react"
import "./CartShopping.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CART_SHOPPING } from "../../../settings/constant";


import cat1 from "../../../assets/images/categories/cat1.png";
import cat2 from "../../../assets/images/categories/cat2.png";
import cat3 from "../../../assets/images/categories/cat3.png";
import cat4 from "../../../assets/images/categories/cat4.png";

import Cart from "../../../components/cart/Cart"
import { useDispatch, useSelector } from "react-redux";

const CartShopping = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart.cartItem)


    return (
        <div className="cart-page">
            <div className="div-carts">
               <Cart cart={cart} para={`${cart.length} products présent`} />

            </div>
            <div className="order-cart">
                <h2> &nbsp;&nbsp;Ma Commande</h2>
                <div className="infos-order">
                    <p>
                        Informations commande 
                    </p>
                    <p>
                        Quantité total: <b> 0 </b>
                    </p>
                    <p>
                        Prix Total: <b>0 fcfa</b>
                    </p>
                    <p>
                        Prix Total TTC: <b>0 fcfa</b>
                    </p>
                    <p>
                    <button> Valider ma commande </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartShopping;