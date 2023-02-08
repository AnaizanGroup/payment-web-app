import React, { useState } from "react"
import { useSelector } from "react-redux"
import CardProducts from "../../../components/cardProducts/CardProducts"
import Pagination from "../../../components/pagination/Pagination"
import { SortList } from "../../../components/sortList/SortList"

import "./ShopCategorie.scss"

const ShopProduct = () => {
    const [indexCat, setIndexCat] = useState(
        sessionStorage.getItem("indexCat") ?
            sessionStorage.getItem("indexCat") : 0
    )

    const product = useSelector((state) => state.products.products)
    const categories = useSelector((state) => state.products.categorie)

    const categorie = ['Tout', 'Mode Femme', 'Mode Homme', 'Accessoire informatique',
        'Electronique', 'Sports et Loisir']

    const active = {
        background: 'white',
        color: 'var(--orange)',
        fontWeight: '600'
    }

    const no_active = {
        background: 'none',
        color: 'white',
    }

    return (
        <div className="shop-product">
            <section className="section1-shop">
                <div className="div1">

                </div>
                <div className="div2">

                </div>
            </section>

            <section className="section2-shop section">
                <div className="list-categorie">
                    <div className="list-cat">
                        {categories.map((list, index) => {
                            return <li
                                style={indexCat == index ? active : no_active}
                                onClick={() => setIndexCat(index)}
                                key={index}> {list.nameCat} </li>
                        })}
                    </div>
                    <SortList />
                </div>
                <div className="div-product">
                    <CardProducts listProduct={product} />
                </div>
                <Pagination />
            </section>
        </div>
    )
}

export default ShopProduct;