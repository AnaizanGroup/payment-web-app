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
            <b> XOF {price} </b>
        </div>
    </div>
    )
}

export default CardProduct2;