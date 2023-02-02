import React from "react"
import FooterHome from "../../components/footer/footers/FooterHome"
import HeaderHome from "../../components/header/headers/HeaderHome"

import "./LayoutHome.scss"

const LayoutHome = ({children}) => {
    return (
        <>
            <HeaderHome />
            <div className="body-page">
                {children}
            </div>
            <FooterHome />
        </>
    )
}

export default LayoutHome