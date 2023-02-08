import React from "react"

import "./CardProdShop2.scss"

export const CardProdShop2 = ({ listProduct }) => {
    return (
        <section className="section-shop section">
            <h2 className="title-section">
                Vêtements de nuit
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
                                        <h4> {list.names} </h4>
                                        <b> XOF {list.price} </b>
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