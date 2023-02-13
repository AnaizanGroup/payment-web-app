import React, { useEffect, useState } from "react"
import { FcShop } from "react-icons/fc"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiChevronRight, FiHeart, FiStar } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "./ProductDetails.scss"
import "flag-icon-css/css/flag-icons.min.css"
import { FaStar } from "react-icons/fa";

import CardProduct2 from "../../../components/cardProduct2/CardProduct2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/cart/cartSlice";
import { PopupLayout } from "../../../components/popupLayout/PopupLayout";
import { CART_SHOPPING, PRODUCT } from "../../../settings/constant";
import { MoyenPay } from "../../../components/moyenPay/MoyenPay";


const ProductDetails = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = location.state;
    const colors = data ? (data.colors) : [];
    const sizes = data ? (data.sizes) : [];
    const [qty, setQty] = useState(1)
    const [popup, isPopup] = useState(false)

    const products = useSelector((state) => state.products.products)

    const settings3 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        arrows: false
    };

    const incrementQty = () => {
        setQty(qty + 1)
    }

    const decrementQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    /* method d'ajout au panier */
    const handleAddToCart = (
        idProd, img, names, description, price, quantity, size, color, shop
    ) => {

        dispatch(addItem({
            idProd, img, names, description, price, quantity, size, color, shop
        }))
    }

    const addToCart = () => {
        isPopup(true)
        let color = sessionStorage.getItem("color") ? sessionStorage.getItem("color") : ""
        let size = sessionStorage.getItem("size") ? sessionStorage.getItem("size") : ""

        handleAddToCart(
            data.idProd,
            data.img,
            data.names,
            data.description,
            data.price,
            qty,
            size,
            color,
            data.shop
        )
    }

    /* select color */
    const handleSelectColor = (col) => {
        let allColor = document.querySelectorAll(".col .child");
        let alldiv = document.querySelectorAll(".col");
        const color = colors.filter(
            (item) => item === col
        )
        for (var i = 0; i < alldiv.length; i++) {
            alldiv[i].classList.remove("select-color")
            if (allColor[i].innerText == color) {
                alldiv[i].classList.add("select-color")
            }
        }
        sessionStorage.setItem('color', color)
    }

    /* select size */
    const handleSelectSize = (siz) => {
        let allSize = document.querySelectorAll(".size");

        const size = sizes.filter(
            (item) => item === siz
        )

        for (var i = 0; i < allSize.length; i++) {
            allSize[i].classList.remove("select-size")
            if (allSize[i].innerText == size) {
                allSize[i].classList.add("select-size")
            }
        }
        sessionStorage.setItem('size', size)
    }

    useEffect(() => {
        handleSelectColor(data.color)
        handleSelectSize(data.size)
    })

    return (
        <div className="product-detail-page">
            <PopupLayout closes={popup}>
                <div className="popup-card">
                    <p>Produit ajouté au panier avec succès !!
                        Ouvrez le panier ou continuer... </p>
                    <div className="btns-action">
                        <button onClick={() => navigate(CART_SHOPPING)}> Ouvrir le panier</button>
                        <button onClick={() => navigate(PRODUCT)}> Continuer </button>
                    </div>
                </div>
            </PopupLayout>
            <p className="head-prod-details">
                product <FiChevronRight />
                details <FiChevronRight />
                {data && data.names}
            </p>
            <p className="shop-identity">
                <FcShop />
                <i className={`flag-icon flag-icon-${data.code_country}`}></i>
                <b> {data.country}, {data.shop} </b>
            </p>
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
                        <div className="color">
                            color:
                            <span className="colors">
                                {
                                    colors && (
                                        colors.map((list, index) => {
                                            return <div className="col"
                                                style={{ background: `${list}` }} key={index}
                                                onClick={() => handleSelectColor(list)}
                                                value={list}> <span className="child">{list}</span> </div>
                                        })
                                    )
                                }
                            </span>
                        </div>
                        <div className="size">
                            Taille:
                            <div className="sizes">
                                {
                                    sizes && (
                                        sizes.map((list, index) => {
                                            return <div key={index}
                                                className="size"
                                                onClick={() => handleSelectSize(list)}>
                                                {list}
                                            </div>
                                        })
                                    )
                                }
                            </div>
                        </div>
                        <p className="quantity">
                            Quantité:
                            <p>
                                <button onClick={decrementQty}> <AiOutlineMinus /> </button>
                                <span> {qty} </span>
                                <button onClick={incrementQty}> <AiOutlinePlus /> </button>
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
                            <button onClick={addToCart}> Ajouter au panier </button>
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
                       <MoyenPay />
                    </div>
                </div>
            </div>
            <div className="div-other-prod">
                <h2> Autre product que vous pouvez aimé</h2>
                <div className="sliderr">
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