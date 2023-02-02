import React from "react"
import FooterHome from "../../components/footer/footers/FooterHome"
import HeaderShop from "../../components/header/headers/HeaderShop"

import "./LayoutHome.scss"

const LayoutShop = ({children}) => {
    return (
        <>
            <HeaderShop />
            <div className="body-page">
                {children}
            </div>
            <FooterHome />
        </>
    )
}

export default LayoutShop;