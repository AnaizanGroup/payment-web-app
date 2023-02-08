import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CardProduct2 from "../../../components/cardProduct2/CardProduct2"
import Pagination from "../../../components/pagination/Pagination"

import "./ShopPromo.scss"

const ShopPromo = () => {

    const products = useSelector((state) => state.products.products)

    return (
        <div className="shop-promo">
            <h2 className="title-section">
                Product en Promotion
            </h2>
            <div className="groups-prod-promo">
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
            </div>
            <Pagination />
        </div>
    )
}

export default ShopPromo;