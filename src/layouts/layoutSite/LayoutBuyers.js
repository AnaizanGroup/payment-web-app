import React from "react"
import FooterHome from "../../components/footer/footers/FooterHome"
import HeaderBuyer from "../../components/header/headers/HeaderBuyer"

import "./LayoutHome.scss"

const LayoutBuyers = ({children}) => {
    return (
        <>
            <HeaderBuyer />
            <div className="body-page">
                {children}
            </div>
            <FooterHome />
        </>
    )
}

export default LayoutBuyers;