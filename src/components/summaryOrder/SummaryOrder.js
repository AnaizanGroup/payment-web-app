import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CART_SHOPPING, CHECKOUT } from "../../settings/constant"
import { MoyenPay } from "../moyenPay/MoyenPay"

import "./SummaryOrder.scss"

export const SummaryOrder = () => {
    const navigate = useNavigate()
    const [page, setPage] = useState()

    const cart = useSelector((state) => state.cart.cartItem)
    
    const getTotal = () => {
        let qtys=0,
            prices=0;

        cart.forEach(item => {
            qtys += item.quantity
            prices += parseInt(item.quantity) * parseInt(item.price)
        });

        return {qtys, prices}
    }

    useEffect(() => {
        let path = window.location.pathname.split("/")[1]

        if (path == CART_SHOPPING.split('/')[1]) {
            setPage(1)
        } else if (path == CHECKOUT.split('/')[1]) {
            setPage(2)
        } else {
            setPage(0)
        }
    })

    const renderBtn = () =>  {
        if (page ==1) {
            return <button onClick={() => navigate(CHECKOUT)}> Commander ({cart.length}) </button>
        } else if (page == 2) {
            return <button onClick={() => navigate(CHECKOUT)}>Valider l'achat </button>
        }
    }

    return (
        <div className="order-cart">
            <h2> &nbsp;&nbsp;Sommaire</h2>
            <div className="infos-order">
                <p>
                    Prix Total des articles: <b> {getTotal().prices} fcfa</b>
                </p>
                <p> Frais total livraison: <b>0 fcfa</b> </p>
                <p> Grand Total: <b> {getTotal().prices} fcfa </b></p>
                <p>
                   {renderBtn()}
                </p>
            </div>
            <p> Moyen de paiement</p>
            <MoyenPay />
        </div>
    )
}