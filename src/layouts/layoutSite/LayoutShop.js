import React from "react"

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