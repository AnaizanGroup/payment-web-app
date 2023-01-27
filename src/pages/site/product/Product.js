import React, { useEffect, useState } from "react";
import { FaChevronRight, FaHeart, FaCartPlus } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiShoppingBag } from "react-icons/fi"
import "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { categories } from "../../../settings/constant";

import 'flag-icon-css/css/flag-icons.min.css'
import "./Product.scss";

import Select from "../../../components/select/Select";
import BoxCategorie from "../../../components/boxCategorie/BoxCategorie";
import Pagination from "../../../components/pagination/Pagination";

import cat1 from "../../../assets/images/categories/cat1.png";
import cat2 from "../../../assets/images/categories/cat2.png";
import cat3 from "../../../assets/images/categories/cat3.png";
import cat4 from "../../../assets/images/categories/cat4.png";
import cat5 from "../../../assets/images/categories/cat5.png";
import cat6 from "../../../assets/images/categories/cat1.png";
import CardProducts from "../../../components/cardProducts/CardProducts";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products)

    const listOption1 = [
        { label: 'Tout' },
        { label: 'Les plus vendus', value: '' },
        { label: 'Moins chère', value: '' },
        { label: 'En promotion', value: '' },
    ]

    const listOption2 = [
        { label: 'Tout' },
        { label: 'Homme' },
        { label: 'Femme' },
        { label: 'Enfant' },
    ]

    const listOptionTaille = [
        { label: 'Tout' },
        { label: 'SM' },
        { label: 'M' },
        { label: 'X' },
        { label: 'Xl' },
        { label: 'lg' },
    ]


    return (
        <div className="product-page">
            <div className="head-page">
                <span>
                    Catégories <FaChevronRight />
                    Sports <FaChevronRight />
                    Homme <FaChevronRight />
                </span>
            </div>
            <div className="box">
                <BoxCategorie listCategorie={categories} />
                <div className="content-product">
                    <p>

                    </p>
                    <div className="head">
                        <div className="sort-div">
                            <Select listOption={listOption1} defaultText={'Trier par'}
                                id={1} />

                            <Select listOption={listOption2} defaultText={'Homme'}
                                id={2} />
                            <Select listOption={listOptionTaille} defaultText={'Taille'}
                                id={3} />
                            <div className="sort-price">
                                <span>price</span>
                                <input type="text" placeholder="Min_" />
                                <span> <FiChevronLeft /> <FiChevronRight /> </span>
                                <input type="text" placeholder="Max_" />
                            </div>

                            <div className="div-btns">
                                <a></a>
                            </div>
                        </div>
                        <div className="sort-div2">
                            <div className="card-choice">

                            </div>
                        </div>
                    </div>
                    <div className="box-product">
                        <div className="head-prod">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="div-products">
                           <CardProducts listProduct={products} />
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Product;