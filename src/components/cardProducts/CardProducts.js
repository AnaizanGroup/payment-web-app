import React from "react"
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./CardProducts.scss";

const CardProducts = ({ listProduct }) => {
    return (
        <>
            {
                listProduct && (
                    listProduct.map((list, index) => {
                        return <Link to={{pathname:`/product/details/${list.names}`}} state={list}  key={index}>
                            <div className="card-product">
                                <div className="img">
                                    <img src={list.img} alt={list.names} />
                                    <button className='btn-favori'>
                                        <FaHeart />
                                        <span> Ajouter au favoris </span>
                                    </button>
                                    {/* <button className="add-cart">
                                                        <FaCartPlus />
                                                        <span> Ajouter au panier </span>
                                                    </button> */}
                                    <button className="btn-add-cart">
                                        Ajouter au panier
                                    </button>
                                </div>
                                <div className="foot">
                                    <h4> {list.names} </h4>
                                    <b> {list.price} Fcfa </b>
                                    <p> <i className={`flag-icon flag-icon-${list.code_country}`} ></i>
                                        {list.country}, {list.shop}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    })
                )
            }
        </>
    )
}

export default CardProducts;