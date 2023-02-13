import React from "react"
import { FaJediOrder } from "react-icons/fa"
import { FiHeart, FiMessageSquare, FiShoppingBag } from "react-icons/fi"
import { HeadTabs } from "../../../../components/headTab2/HeadTab2"

import "./Home.scss"

const HomeBuyer = () => {

    const stats = [
        { label: 'Messages', nb: 0, icon: <FiMessageSquare /> },
        { label: 'Favoris', nb: 0, icon: <FiHeart /> },
        { label: 'Commandes', nb: 0, icon: <FiShoppingBag />},
    ]

    
    return (
        <div className="home-dashboard-buyer">
           <HeadTabs title={"tableau de bord"} />
           <div className="home-block">
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
        </div>
    )
}

export default HomeBuyer;