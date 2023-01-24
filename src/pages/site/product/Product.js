import React, { useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { categories } from "../../../settings/constant";

import "./Product.scss";

const Product = () => {

    const showSublink = async (index) => {
        let all = document.querySelectorAll(".sublink-div");
        let span = document.querySelectorAll(".span");
        
        if (all[index].className.split(" ").length == 2) {
            all[index].classList.remove("show")
            span[index].classList.remove("active")
        } else {
            span[index].classList.add("active")
            all[index].classList.add("show")
        }
    }

    useEffect (() => {
    })

    return (
        <div className="product-page">
            <div className="categorie-box">
                <h3> Catégories </h3>
                <div className="list-categorie">
                    {
                        categories.map(({ nameCat, items }, index) => {
                            return <div key={index} className="parent-cat">
                                <span
                                className="span"
                                    onClick={() => showSublink(index)}
                                > {nameCat} <i className="svg">
                                    <FaChevronRight />
                                    </i> </span>
                                <div className="sublink-div">
                                    {items && (
                                        items.map((list, index2) => {
                                            return <Link  key={index2} to={{ pathname: `/product/${list.type}` }}>
                                                
                                                    {list.type}
                                                
                                            </Link>
                                        })
                                    )}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="content-product">
                <div className="head">
                    <div className="">
                        <span>
                            Catégories <FaChevronRight />
                            Sports <FaChevronRight />
                            Homme <FaChevronRight />
                        </span>
                    </div>
                    <div className="">
                        <span>
                            Trier par 
                            <select>
                                <option value=""> Les plus vendus</option>
                                <option value=""> moins chère</option>
                                <option value=""> Les plus vendus</option>
                            </select>
                        </span>
                        <span>
                            <h6>Homme</h6>
                        </span>
                        <span>
                            <h6>Femme</h6>
                        </span>
                        <span>
                            <h6>Enfant</h6>
                        </span>
                    </div>
                </div>
                <div className="box-product">

                </div>
            </div>
        </div>
    )
}

export default Product;