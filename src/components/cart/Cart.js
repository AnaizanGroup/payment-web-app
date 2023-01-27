import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingBag, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CART_SHOPPING } from "../../settings/constant";

import "./Cart.scss";

const Cart = ({ cart, para, close }) => {

    const navigate = useNavigate();

    return (
        <div className="box-cart">
            <h2>
                <span>  <FiShoppingBag /> Mon Panier</span>
                <span onClick={() => close(false)}>&times;</span>
            </h2>
            <p className="p">
                {para}
                <button onClick={() => navigate(CART_SHOPPING)}>
                    ouvrir
                </button>
            </p>
            <div className="bloc-prod">
                {
                    cart && (
                        cart.map(({img, names,price,quantity, size, color}, index) => {
                            return <div className="items" key={index}>
                                <img src={img} />
                                <div className="info">
                                    <h4> {names} </h4>
                                    <b> {price} Fcfa </b>
                                   {
                                    color && (
                                        <p className="color"> 
                                        Couleur: <b>{color}</b>
                                    </p>
                                    )
                                   }
                                   {
                                    size && (
                                        <p className="size">
                                        Taille: <b> {size} </b>
                                    </p>
                                    )
                                   }
                                    <p>
                                        <div>
                                            <button> <AiOutlineMinus /> </button>
                                            <span> {quantity} </span>
                                            <button> <AiOutlinePlus /> </button>
                                        </div>
                                        <button className="btn-trash"> <FiTrash /> <span>Supprimer</span> </button>
                                    </p>
                                </div>
                            </div>
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Cart;