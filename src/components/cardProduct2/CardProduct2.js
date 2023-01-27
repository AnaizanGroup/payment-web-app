import React from "react"
import { Link } from "react-router-dom"

import "./CardProduct2.scss"


const CardProduct2 = ({ img, names, price, reduce}) => {
    return (
        <> <div className="prod-cards">
            <div className="bande"> {reduce}% </div>
            <Link to={{ pathname: `/product/details/${names}` }}>
                <div className="imgs">
                    <img src={img} />
                    <button> Ajouter au panier </button>
                </div>
            </Link>
            <div className="inf">
                <h4> {names} </h4>
                <b> XOF {price} </b>
            </div>
        </div>
        </>
    )
}

export default CardProduct2;