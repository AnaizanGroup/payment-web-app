import React from "react"
import { FaJediOrder } from "react-icons/fa"
import { FiHeart, FiMessageSquare, FiShoppingBag } from "react-icons/fi"

import "./Home.scss"

const HomeSeller = () => {

    const stats = [
        { label: 'Messages', nb: 0, icon: <FiMessageSquare /> },
        { label: 'Favoris', nb: 0, icon: <FiHeart /> },
        { label: 'Commandes', nb: 0, icon: <FiShoppingBag />},
    ]

    
    return (
        <div className="home-dashboard-buyer">
            {stats.map((list, index) => {
                return (
                    <div className="card" key={index}>
                        <b> {list.nb} </b>
                        <p>
                            {list.icon}  {list.label}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeSeller;