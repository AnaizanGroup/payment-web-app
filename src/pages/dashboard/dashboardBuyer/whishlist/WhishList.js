import React, { useState } from "react"
import { useSelector } from "react-redux";
import "flag-icon-css/css/flag-icons.min.css"
import "./WhishList.scss"

import shop1 from "../../../../assets/images/shop/a1.png";
import shop2 from "../../../../assets/images/shop/a2.png";
import shop3 from "../../../../assets/images/shop/a3.png";
import { HeadTabs } from "../../../../components/headTab2/HeadTab2";

const WhishList = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const product = useSelector((state) => state.products.products)

    const active = {
        color: "var(--orange)",
        borderBottom: "1px solid var(--orange)"
    }

    const shop = [
        { img: shop1, names: 'LVM Shop', country: 'Bénin', code: 'bj', description: 'Vente des vêtements importé et faire maison' },
        { img: shop2, names: 'Max Shop Industrie', country: 'Bénin', code: 'tg', description: 'Vente des vêtements importé et faire maison'  },
        { img: shop3, names: 'LVM Shop Industrie', country: 'Bénin', code: 'ng', description: 'Vente des vêtements importé et faire maison'  },
        { img: shop1, names: 'Bénin Shop', country: 'Bénin', code: 'gh', description: 'Vente des vêtements importé et faire maison'  },
        { img: shop2, names: 'Jose\'\y Shop', country: 'Bénin', code: 'bj', description: 'Vente des vêtements importé et faire maison'  },
    ]

    const returnTabs = () => {
        if (tabIndex == 0) {
            return (
                <div className="favoris-product">
                    {product.map((list, index) => {
                        return <div className="card-favoris" key={index}>
                            <div className="img">
                                <img src={list.img} />
                            </div>
                            <div className="infos-div">
                                <h3> {list.names} </h3>
                                <p>
                                    <span> Vendu {list.sold} </span>
                                </p>
                                <p className="shop-infos">
                                    <i className={`flag-icon flag-icon-${list.code_country}`}></i>
                                    {list.country}, {list.shop}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            )
        } else if (tabIndex == 1) {
            return (
                <div className="favoris-sale">
                    {shop.map((list, index) => {
                        return <div className="card-favoris-vente" key={index}>
                            <div className="img">
                                <img src={list.img} />
                            </div>
                            <div className="infos-div-shop">
                                <h3> {list.names} </h3>
                                <p> {list.description} </p>
                                <p className="shop-infos">
                                    <i className={`flag-icon flag-icon-${list.code}`}></i>
                                    {list.country}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            )
        }
    }

    return (
        <div className="favoris-dashboard-buyer">
            <HeadTabs title={"Mes Favoris"} />
            <div className="favoris-blocks parent">
                <div className="favoris-tabs">
                    <div className="btn-tabs-switch">
                        <button style={tabIndex == 0 ? active : null}
                            onClick={() => setTabIndex(0)}> Products (0)</button>
                        <button style={tabIndex == 1 ? active : null}
                            onClick={() => setTabIndex(1)}> Boutiques (0)</button>
                    </div>

                    {returnTabs()}
                </div>
            </div>
        </div>
    )
}

export default WhishList;