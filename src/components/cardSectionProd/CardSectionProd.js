import React from "react"
import { Link } from "react-router-dom"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CardSectionProd.scss"
import { FaAngleDoubleRight } from "react-icons/fa";


const CardSectionProd = ({ text, productFavorite, categorie, link, listProducts }) => {
    
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        arrows: true
    }
    
    return (
        <section className="section-five section">
            <div className="div-left">
                <h3> {text} </h3>
                <div className="band">
                </div>
                <div className="slider">
                    <Slider {...settings} >
                        {
                            productFavorite.map((list, index) => {
                                return <div key={index}>
                                    <img src={list.img} />
                                </div>
                            })
                        }
                        <div>
                            <img src={productFavorite[productFavorite.length -1].img} />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="div-right">
                <h3>
                    {categorie}
                    <span> <Link to=""> Voir plus <FaAngleDoubleRight /> </Link> </span>
                </h3>
                <div className="div-product">
                    {
                        listProducts.map((list, index) => {
                            return <Link to="" key={index}>
                                <div className="div-img">
                                    <img src={list.img} />
                                    <h4> {list.names} </h4>
                                    <b> {list.price} Fcfa </b>
                                </div>
                            </Link>
                        })
                    }
                    {
                        listProducts.map((list, index) => {
                            return <Link to="" key={index}>
                                <div className="div-img">
                                    <img src={list.img} />
                                    <h4> {list.names} </h4>
                                    <b> {list.price} Fcfa </b>
                                </div>
                            </Link>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CardSectionProd;