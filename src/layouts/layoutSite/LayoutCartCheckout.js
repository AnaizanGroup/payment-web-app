import React from "react"
import FooterCartCheckout from "../../components/footer/footers/footerCartCheckout"
import HeaderCartCheckout from "../../components/header/headers/HeaderCartCheckout"

import "./LayoutHome.scss"

const LayoutCartCheckout = ({children}) => {
    return (
        <>
            <HeaderCartCheckout />
            <div className="body-page">
                {children}
            </div>
            <FooterCartCheckout />
        </>
    )
}

export default LayoutCartCheckout;