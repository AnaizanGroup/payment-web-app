import React from "react"
import { Link } from "react-router-dom"

import "./CardProduct2.scss"


const CardProduct2 = ({ nameCat, img, names, price, reduce }) => {
    return (<div className="prod-cards">
        <div className="bande"> {reduce}% </div>
        <div className="imgs">
            <img src={img} />
            <button> Ajouter au panier </button>
        </div>
        <div className="inf">
            <h4> {names} </h4>
            <p>
                <b> XOF {price - ((price * reduce) / 100)} </b>
                <span>XOF {price} </span>
            </p>
        </div>
    </div>
    )
}

export default CardProduct2;