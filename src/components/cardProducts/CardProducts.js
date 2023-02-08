import React from "react"
import { FaHeart, FaPlane } from "react-icons/fa";
import { FiEdit3, FiPenTool } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./CardProducts.scss";

const CardProducts = ({ listProduct }) => {
    return (
        <>
            {
                listProduct && (
                    listProduct.map((list, index) => {
                        return <div className="card-product">
                            <div className="img">
                                <Link to={{ pathname: `/product/details/${list.names}` }} state={list} >
                                    <img src={list.img} alt={list.names} />
                                </Link>
                                <button className='btn-favori'>
                                    <FaHeart />
                                    <span> Ajouter au favoris </span>
                                </button>
                                <button className='btn-favori btn-avis'>
                                    <FiEdit3 />
                                    <span> Votre avis </span>
                                    <div className="div-avis">
                                        <form>
                                            <textarea cols={8} rows={5} placeholder="Vitre avis sur le produits"></textarea>
                                            <button> oK </button>
                                        </form>
                                    </div>
                                </button>

                                {/* <button className="add-cart">
                                                        <FaCartPlus />
                                                        <span> Ajouter au panier </span>
                                                    </button> */}
                                <button className="btn-add-cart">

                                    <Link to={{ pathname: `/product/details/${list.names}` }} state={list} >
                                        Ajouter au panier
                                    </Link>
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
                    })
                )
            }
        </>
    )
}

export default CardProducts;