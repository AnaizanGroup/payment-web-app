import React from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

import "./Layout.scss"


const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className="body-page">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout