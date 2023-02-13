import React from "react"
import { FiChevronRight } from "react-icons/fi"
import "./CardProdShop2.scss"

export const CardProdShop2 = ({ title, listProduct }) => {
    return (
        <section className="section-shop section">
            <h2 className="title-section">
                {title}
                
            </h2>
            <div className="groups-product-card">
                <div className="cards">
                    {listProduct && (
                        listProduct.map((list, index) => {
                            if (index < 6) {
                                return (
                                    <div className="card-prod" key={index}>
                                        <div className="div-imgs">
                                            <img src={list.img} />
                                        </div>
                                        <div className="infos">
                                        <h4> {list.names} </h4>
                                        <b> XOF {list.price} </b>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    )}
                </div>
            </div>
        </section>
    )
}