import React from "react"
import { useSelector } from "react-redux"
import { CardProdShop } from "../cardProdShop/CardProdShop"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CardProdShop3.scss";

export const CardProdShop3 = ({ listProduct }) => {

   // const product = useSelector((state) => state.products.products)

    const settings2 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        arrows: true
    };

    return (
        <section className="section-prod section">
            <h2 className="title-section">
                Mode de femme
            </h2>
            <div className="groups-cards-listProduct">
                <div className="cards">
                    <h3> Meilleur product</h3>
                    <div className="slider-prods">
                        <Slider {...settings2}>
                            {listProduct && (
                                listProduct.map((list, index) => {
                                    return <div key={index}>
                                        <img src={list.img} />
                                    </div>
                                })
                            )}
                            <div>
                                <img src={listProduct[listProduct.length - 1].img} />
                            </div>
                        </Slider>
                    </div>
                </div>
                <CardProdShop listProductPopular={listProduct} />
                <CardProdShop listProductPopular={listProduct} />
            </div>
        </section>
    )
}