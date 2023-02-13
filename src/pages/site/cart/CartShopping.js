import React, {useEffect} from "react"
import "./CartShopping.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Cart from "../../../components/cart/Cart"
import { useDispatch, useSelector } from "react-redux";
import { MoyenPay } from "../../../components/moyenPay/MoyenPay";
import { CHECKOUT } from "../../../settings/constant";
import { SummaryOrder } from "../../../components/summaryOrder/SummaryOrder";

const CartShopping = () => {
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart.cartItem)

    const returnQtyTotal = () => {
        let qty=0;
        let qtyTotal = cart.forEach(element => {
            qty += element.quantity
        });

        return qtyTotal;
    }

    useEffect(() => {
    })

    return (
        <div className="cart-page">
            <div className="div-carts">
                <Cart para={`products présent`} />
            </div>
            {
                cart.length != 0 ? (
                   <SummaryOrder />
                ) : ''
            }
        </div>
    )
}

export default CartShopping;