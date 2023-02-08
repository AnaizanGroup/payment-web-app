import React from "react"

import './CardProdShop.scss'

export const CardProdShop = ({ listProductPopular }) => {
    return (
        <>
            <div className="cards">
                {listProductPopular && (
                    listProductPopular.map((list, index) => {
                        if (index < 3) {
                            return (
                                <div className="card-prod" key={index}>
                                    <div className="div-imgs">
                                        <img src={list.img} />
                                    </div>
                                    <h4> XOF {list.price} </h4>
                                </div>
                            )
                        }
                    })
                )}
            </div>
        </>
    )
}