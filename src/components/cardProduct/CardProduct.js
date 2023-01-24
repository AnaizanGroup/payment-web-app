import React from "react"
import { FcShop } from "react-icons/fc"
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom";

import "./CardProduct.scss"


const CardProduct = ({ index, img, names, shop, price, code_country }) => {
    return (
            <div class="card-prod">
                <div className="band"></div>
                <div class="img">
                    <img src={img} alt="" />
                </div>
                <div class="foot">
                    <h4 class="categorie-name"> {names} </h4>
                    <b> {price} FCFA </b>
                    <a href="" className="btn-add">
                        Ajouter au Panier
                    </a>
                </div>
                <div class="fond">

                    <a href="" className="btn-add">
                        <MdAddShoppingCart />
                        Ajouter au Panier
                    </a>
                </div>
                {/* <div class="card-head">
                    <i class={`flag-icon flag-icon-${code_country}`}></i>
                    <FcShop />
                    <span> {shop} </span>
                </div> */}
            </div>
    )
}

export default CardProduct;