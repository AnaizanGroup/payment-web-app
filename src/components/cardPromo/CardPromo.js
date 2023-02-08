import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CardPromo.scss"

export const CardPromo = ({ listProduct, backColor }) => {

    
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        arrows: false
    };

    return (
        <Slider className="slider" {...settings}>
            {listProduct && (
                listProduct.map((list, index) => {
                    return (
                        <div 
                        style={{background: backColor}}
                        className="banners-prod" key={index}>
                            <h5 className="band-promo"> {list.reduce}% </h5>
                            <div className="prod">
                                <div className="head-prod">
                                    <h4> {list.names} </h4>
                                    <img src={list.img} />
                                </div>
                                <button>Acheter maintenant</button>
                            </div>
                        </div>
                    )
                })
            )}
            {listProduct && (
                listProduct.map((list, index) => {
                    return (
                        <div className="banners-prod" key={index}>
                            <h5 className="band-promo"> {list.reduce}% </h5>
                            <div className="prod">
                                <div className="head-prod">
                                    <h4> {list.names} </h4>
                                    <img src={list.img} />
                                </div>
                                <button>Acheter maintenant</button>
                            </div>
                        </div>
                    )
                })
            )}
        </Slider>
    )
}