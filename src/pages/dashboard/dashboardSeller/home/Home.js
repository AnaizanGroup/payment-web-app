import React from "react"
import { FaJediOrder } from "react-icons/fa"
import { FiHeart, FiList, FiMessageSquare, FiShoppingBag } from "react-icons/fi"
import { HeadTabs } from "../../../../components/headTabs/HeadTabs"

import "./Home.scss"

const HomeSeller = () => {

    const stats = [
        { label: 'Produits', nb: 0, icon: <FiList /> },
        { label: 'Ventes', nb: 0, icon: <FiHeart /> },
        { label: 'Messages', nb: 0, icon: <FiShoppingBag /> },
        { label: 'Cobeille des produits', nb: 0, icon: <FiShoppingBag /> },
    ]


    return (
        <div className="home-dashboard-buyer">
            <HeadTabs title={"Tableau de bord"} />
            <div className="block-dashboard">
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

export default HomeSeller;