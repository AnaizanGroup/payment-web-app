import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingBag, FiTrash } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CART_SHOPPING } from "../../settings/constant";
import { decrementQty, incrementQty, removeItem } from "../../store/cart/cartSlice";

import "./Cart.scss";

const Cart = ({ para}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart.cartItem)


    return (
        <div className="box-cart">
            {
                cart.length == 0 ? (
                    <p className="cart-empty">
                        <HiOutlineShoppingCart />
                        Votre est panier est vide
                    </p>
                ) : (
                    <>
                        <h2>
                            <span>  <FiShoppingBag /> Mon Panier ({cart.length}) </span>
                        </h2>
                        <p className="p">
                            '{cart.length} {para}
                            <button onClick={() => navigate(CART_SHOPPING)}>
                                ouvrir
                            </button>
                        </p>
                        <div className="bloc-prod">
                            {
                                cart.map(({ idProd, img, names, price, quantity, size, color }, index) => {
                                    return <div className="items" key={index}>
                                        <img src={img} />
                                        <div className="info">
                                            <h4> {names} </h4>
                                            <b className="price"> {price} Fcfa </b>
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
                                            <p className="qty">
                                                <span className="label-qty"> Quantity</span>: &nbsp;
                                                <div>
                                                    <button onClick={() => dispatch(decrementQty({ idProd }))}>
                                                        <AiOutlineMinus /> </button>
                                                    <span> {quantity} </span>
                                                    <button onClick={() => dispatch(incrementQty({ idProd }))}> <AiOutlinePlus /> </button>
                                                </div>
                                            </p>
                                            <button className="btn-trash"
                                                onClick={() => dispatch(removeItem({ idProd }))}> <FiTrash /> <span>Supprimer</span> </button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Cart;