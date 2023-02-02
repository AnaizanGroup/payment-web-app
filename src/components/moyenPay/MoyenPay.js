import React from "react"

import mtn from "../../assets/images/png/mtnPay.png";
import moov from "../../assets/images/png/moovPay.png";
import visa from "../../assets/images/png/visaPay.png";
import mastercard from "../../assets/images/png/masterPay.png";

import "./MoyenPay.scss"

export const MoyenPay = ({ ...props }) => {
    return (
        <div className="moyen-pay">
            <img {...props} src={mtn} />
            <img {...props} src={moov} />
            <img {...props} src={visa} />
            <img {...props} src={mastercard} />
        </div>
    )
}