import React, { useEffect } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiHeart, FiStar } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ProductDetails.scss"
import "flag-icon-css/css/flag-icons.min.css"
import { FaStar } from "react-icons/fa";

import feexpay from "../../../assets/images/svg/feexpay.svg";
import mtn from "../../../assets/images/png/mtnPay.png";
import moov from "../../../assets/images/png/moovPay.png";
import visa from "../../../assets/images/png/visaPay.png";

import cat1 from "../../../assets/images/categories/cat1.png";
import cat2 from "../../../assets/images/categories/cat2.png";
import cat3 from "../../../assets/images/categories/cat3.png";
import cat4 from "../../../assets/images/categories/cat4.png";
import cat5 from "../../../assets/images/categories/cat5.png";
import CardProducts from "../../../components/cardProducts/CardProducts";
import CardProduct2 from "../../../components/cardProduct2/CardProduct2";


const ProductDetails = (props) => {
    const location = useLocation();
    const data = location.state;
    const colors = data ? (data.color) : [];
    const sizes = data ? (data.size) : [];
    console.log(data)


    const settings3 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        arrows: false
    };

    const products = [
        {
            img: cat1,
            names: 'Product name Product name',
            price: 10000,
            size: ['S', 'SM', 'X', 'XL', '2XL'],
            color: ['blue', 'red', 'black', 'white', 'green'],
            orders: 123,
            sold: 123,
            like: 1290,
            reduce: 20,
            reviews: 20,
            description: '',
            shop: "LVM Shop",
            country: "Bénin",
            code_country: "bj"
        },
        {
            img: cat2,
            names: 'Product name',
            price: 10000,
            size: ['S', 'SM', 'X', 'XL', '2XL'],
            color: ['blue', 'red', 'black', 'white', 'green'],
            orders: 123,
            sold: 123,
            like: 1290,
            reduce: 20,
            shop: "LVM Shop",
            country: "Bénin",
            code_country: "bj"
        },
        {
            img: cat3,
            names: 'Product name',
            price: 10000,
            size: ['S', 'SM', 'X', 'XL', '2XL'],
            color: ['blue', 'red', 'black', 'white', 'green'],
            orders: 123,
            sold: 123,
            like: 1290,
            reduce: 20,
            shop: "LVM Shop",
            country: "Bénin",
            code_country: "bj"
        },
        {
            img: cat4,
            names: 'Product name',
            price: 10000,
            size: ['S', 'SM', 'X', 'XL', '2XL'],
            color: ['blue', 'red', 'black', 'white', 'green'],
            orders: 123,
            sold: 123,
            like: 1290,
            reduce: 20,
            shop: "LVM Shop",
            country: "Bénin",
            code_country: "bj"
        },
        {
            img: cat1,
            names: 'Product name',
            price: 10000,
            size: ['S', 'SM', 'X', 'XL', '2XL'],
            color: ['blue', 'red', 'black', 'white', 'green'],
            orders: 123,
            sold: 123,
            like: 1290,
            reduce: 20,
            shop: "LVM Shop",
            country: "Bénin",
            code_country: "bj"
        }
    ]

    return (
        <div className="product-detail-page">
            <div className="div-details-product">
                <div className="products-details">
                    <div className="img">
                        <img src={data.img} />
                    </div>
                    <div className="product-info">
                        <h2>
                            {data.names}
                        </h2>
                        <p className="p-start">
                            <span>
                                {new Array(5).fill().map((_, index) => {
                                    return <span key={index}> <FaStar /> </span>
                                })}
                            </span>
                            <span>
                                <FiHeart />
                                <i>120</i>
                            </span>
                            <span>{data.sold} Sold</span>
                        </p>
                        <p> {data.reviews} reviews </p>
                        <p className="price">
                            <b> XOF {(data.price) - (((data.price) * (data.reduce)) / 100)} </b>
                            <span style={{ textDecoration: 'line-through' }}> {data.price} </span>
                            <span> -{data.reduce}% </span>
                        </p>
                        <p className="color">
                            color:
                            <span className="colors">
                                {
                                    colors && (
                                        colors.map((list, index) => {
                                            return <div
                                                style={{ background: `${list}` }} key={index}> </div>
                                        })
                                    )
                                }
                            </span>
                        </p>
                        <p className="size">
                            Taille:
                            <div className="sizes">
                                {
                                    sizes && (
                                        sizes.map((list, index) => {
                                            return <div key={index}>
                                                {list}
                                            </div>
                                        })
                                    )
                                }
                            </div>
                        </p>
                        <p className="quantity">
                            Quantité:
                            <p>
                                <button> <AiOutlineMinus /> </button>
                                <span> {data.quantity}1 </span>
                                <button> <AiOutlinePlus /> </button>
                            </p>
                        </p>
                        <p className="country-delivr">
                            Pays de livraison:
                            <i className={`flag-icon flag-icon-${data.code_country}`}></i>
                            <span> {data.country} </span>
                        </p>
                        <p className="time-delivr">
                            Délai de livraison:
                            <span> 3 - 7 jour</span>
                        </p>
                        <p>
                            Montant payé au livraison:
                            <span> XOF 1290 </span>
                        </p>
                        <div className="btn-action">
                            <button> Ajouter au panier </button>
                            <button> Acheter </button>
                        </div>
                    </div>
                </div>
                <div className="div-right-detail">
                    <p>
                        Pour plus d'information sur le product,
                        ainsi que sur la livraison,
                    </p>
                    <button> Contacter le fournisseur </button>
                    <button> Discuter maintenant </button>
                    <div className="shop-visit">
                        <b>
                            <i className={`flag-icon flag-icon-${data.code_country}`}></i>
                            {data.country},{data.shop}
                        </b>
                        <p>
                            Vente des produits industrielles exporté et faire maison.
                        </p>
                        <button> Visiter la boutique </button>
                    </div>
                    <div className="mode-paie">
                        <p> Payer par: </p>
                        <div>
                            <img src={feexpay} />
                            <img src={mtn} />
                            <img src={moov} />
                            <img src={visa} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-other-prod">
                <h2> Autre product que vous pouvez aimé</h2>
                <div className="slider">
                    <Slider {...settings3} >
                        {
                            products && (
                                products.map((list, index) => {
                                    return <Link key={index} to={{ pathname: `/product/details/${list.names}` }} state={list}>
                                        <CardProduct2 img={list.img} names={list.names}
                                            reduce={list.reduce} price={list.price} />
                                    </Link>
                                })
                            )
                        }
                        <CardProduct2 img={products[products.length - 1].img}
                            names={products[products.length - 1].names}
                            reduce={products[products.length - 1].reduce}
                            price={products[products.length - 1].price} />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;