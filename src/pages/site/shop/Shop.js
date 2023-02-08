import React from "react"
import "./Shop.scss"

import { useSelector } from "react-redux";
import { CardPromo } from "../../../components/cardPromo/CardPromo";
import CardProducts from "../../../components/cardProducts/CardProducts";
import Slider from "react-slick";
import { SortList } from "../../../components/sortList/SortList";
import { CardProdShop } from "../../../components/cardProdShop/CardProdShop";
import { CardProdShop2 } from "../../../components/cardProdShop2/CardProdShop2";
import { CardProdShop3 } from "../../../components/cardProdShop3/CardProdShop3";


const Shop = () => {

    const product = useSelector((state) => state.products.products)

    const categorie = ['Tout', 'Mode Femme', 'Mode Homme', 'Accessoire informatique',
        'Electronique', 'Sports et Loisir']
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: false,
        arrows: true
    };


    return (
        <div className="shop-page">
            <CardPromo listProduct={product} />
            <CardProdShop3 listProduct={product} />
            <CardProdShop3 listProduct={product} />
            <CardPromo listProduct={product} />
            <CardProdShop2 listProduct={product} />
            <CardProdShop2 listProduct={product} />
            <section className="section4-shop section">
                <h2 className="title-section">
                    <div></div>
                    Spécialement pour vous
                    <div></div>
                </h2>
                <div className="groups-prod-s4">
                    <CardProducts listProduct={product} />
                </div>
            </section>
        </div>
    )
}

export default Shop;