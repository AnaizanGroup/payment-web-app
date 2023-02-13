import React from "react"
import { FaAngleDoubleRight, FaChevronRight, FaICursor, FaMousePointer } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";

import "./index.scss";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardProduct from "../../../components/cardProduct/CardProduct";
import CardProduct2 from "../../../components/cardProduct2/CardProduct2"
import ContentGroupProd from "../../../components/ContentGroupProd/ContentGroupProd";

import shop4 from "../../../assets/images/png/shop4.png";
import cat1 from "../../../assets/images/categories/cat1.png";
import cat2 from "../../../assets/images/categories/cat2.png";
import cat3 from "../../../assets/images/categories/cat3.png";
import cat4 from "../../../assets/images/categories/cat4.png";
import cat5 from "../../../assets/images/categories/cat5.png";
import cat6 from "../../../assets/images/categories/cat1.png";
import s1 from "../../../assets/images/products/s1.png";
import s2 from "../../../assets/images/products/s2.png";
import s3 from "../../../assets/images/products/s3.png";
import s4 from "../../../assets/images/products/s4.png";
import shop1 from "../../../assets/images/shop/a1.png";
import shop2 from "../../../assets/images/shop/a2.png";
import shop3 from "../../../assets/images/shop/a3.png";
import market from "../../../assets/images/png/shop.png";
import g2 from "../../../assets/images/png/g2.png";

import { APP_FEEXPAY } from "../../../settings/constant";
import CardSectionProd from "../../../components/cardSectionProd/CardSectionProd";
import { useSelector } from "react-redux";
import { CardProdShop2 } from "../../../components/cardProdShop2/CardProdShop2";

const Home = (props) => {
    const navigate = useNavigate();

    const products = useSelector((state) => state.products.products)
    const categories = useSelector((state) => state.products.categorie)

    const shop = [
        { img: shop1, names: 'LVM Shop', country: 'Bénin', code: 'bj' },
        { img: shop2, names: 'LVM Shop', country: 'Bénin', code: 'tg' },
        { img: shop3, names: 'LVM Shop', country: 'Bénin', code: 'ng' },
        { img: shop1, names: 'LVM Shop', country: 'Bénin', code: 'gh' },
        { img: shop2, names: 'LVM Shop', country: 'Bénin', code: 'bj' },
        { img: shop3, names: 'LVM Shop', country: 'Bénin', code: 'ng' },
        { img: shop2, names: 'LVM Shop', country: 'Bénin', code: 'bj' },
    ]

    const productPlus = [
        { img: cat1 },
        { img: cat2 },
        { img: cat4 },
    ]

    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        arrows: false
    };

    const settings2 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 6,
        autoplay: true,
        arrows: false
    };

    const settings3 = {
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        arrows: false
    };

    const goCategorieProductPage = (nameCat, index) => {
        sessionStorage.setItem('nameCat', nameCat)
        sessionStorage.setItem('indexCat', index)
        window.location.href = `/categories/products/${nameCat}`;
    }

    return (
        <div className="home-page">
            <section className="section-one section">
                <div className="div1">
                    <div className="div1-child1">
                        <h1>
                            FeexMarket
                        </h1>
                        <span> Acheter et Vendre vos produits</span>
                        <img src={market} />
                    </div>
                    <div className="div1-child2">
                        <Slider slidesToShow={1}  {...settings}>
                            <div>
                                <img src={s1} />
                            </div>
                            <div>
                                <img src={s2} />
                            </div>
                            <div>
                                <img src={s3} />
                            </div>
                            <div>
                                <img src={s4} />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="div2">
                    <p>Vous avez déjà un compte ?</p>
                    <button className="btn-connect"> me connecter </button>
                    ou
                    <button className="btn-ins">nous rejoindre</button>
                    <div className="bar"></div>
                    <p>Envie de devenir un Vendeur ?</p>
                    <button
                        onClick={() => navigate(APP_FEEXPAY)}
                        className="btn-seller">Inscrivez-vous <FaMousePointer /> </button>
                </div>
            </section>

            <section className="section-two section">
                <div className="section-head">
                    <h2 className="title-section">
                        Nos Catégories
                        <span>+{categories.length}</span>
                    </h2>
                    <li> <a href="">Voir plus </a> <FaChevronRight /> </li>
                </div>
                <div className="div-categorie">
                    <Slider {...settings2}>
                        {
                            categories.map(({ img, nameCat }, index) => {
                                return (
                                    <Link to={{ pathname: `/categories/products/${nameCat}` }} state={nameCat} key={index}>
                                        <div className="div-img">
                                            <div className="img">
                                                <img src={img} alt="" />
                                                <h4 className="categorie-name"> {nameCat} </h4>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {
                            categories.map(({ img, nameCat }, index) => {
                                return (
                                    <Link to={{ pathname: `/categories/products/${nameCat}` }} state={nameCat} key={index}>

                                        <div className="div-img">
                                            <div className="img">
                                                <img src={img} alt="" />
                                                <h4 className="categorie-name"> {nameCat} </h4>
                                            </div>
                                        </div>

                                    </Link>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>

            <section className="section-three section">
                <div className="section-head">
                    <h2 className="title-section"> Nos Produits <span>+{products.length}</span> </h2>
                </div>
                <div className="div-product">
                    <Slider {...settings3} >
                        {
                            products && (
                                products.map((list, index) => {
                                    return <Link key={index} to={{ pathname: `/categories/products/${list.nameCat}` }} state={list.nameCat}>
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
            </section>
            <CardProdShop2 title={"Les plus Vendus"} listProduct={products} />

            <CardSectionProd text={"% en promotion"}
                productFavorite={productPlus} categorie="Tout categorie"
                listProducts={products} />

            <section className="section-six section">
                <div className="div-section-six">
                    <h3> Devenez un vendeur FeexMarket</h3>
                    <button> Devenir maintenant </button>
                </div>
            </section>

            <section className="section-four section">
                <div className="section-head">
                    <h2 className="title-section"> Nos boutiques <span>+120382</span> </h2>
                </div>
                <div className="div-shop">
                    <Slider {...settings3} slidesToShow={4}>
                        {
                            shop.map(({ img, names, country, code }, index) => {
                                return (
                                    <Link to="">
                                        <div className="card-shop">
                                            <div className="img">
                                                <img src={img} />
                                            </div>
                                            <div className="foot">
                                                <i className={`flag-icon flag-icon-${code}`}></i>
                                                <span> {names}, </span>&nbsp;
                                                <span> {country} </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        <Link to="">
                            <div className="card-shop">
                                <div className="img">
                                    <img src={shop[shop.length - 1].img} />
                                </div>
                                <div className="foot">
                                    <i className={`flag-icon flag-icon-${shop[shop.length - 1].code}`}></i>
                                    <span> {shop[shop.length - 1].names}, </span>&nbsp;
                                    <span> {shop[shop.length - 1].country} </span>
                                </div>
                            </div>
                        </Link>
                    </Slider>
                </div>
            </section>

            <section className="section-seven section">
                <div className="section-head">
                    <h2 className="title-section"> Nos Centres d'intèrêts </h2>
                </div>
                <div className="centre-int">
                    <div>
                        <img src={g2} />
                        <h4>Communication digitale</h4>
                    </div>
                    <div>
                        <img src={g2} />
                        <h4>Community management</h4>
                    </div>
                    <div>
                        <img src={g2} />
                        <h4>Graphisme</h4>
                    </div>
                    <div>
                        <img src={g2} />
                        <h4>Référencement web</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;