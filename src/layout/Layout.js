import React from "react"
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import "./Layout.scss"


const Layout = ({ children }) => {
    return(
        <div className="layout">
            <Header />
            <div className="body">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;