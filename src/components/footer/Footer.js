import React, { useEffect } from "react";

import "./Footer.scss";


const Footer = ({ children1, children2 }) => {

    const setYear = () => {
        const date = new Date()
        const year = date.getFullYear();

        var el = document.getElementById("year")
        return year;
    }

    
    return (
        <>
            <footer>
                {children1}
                {children2}
                <div className="row2">
                    <p>&copy; {setYear()} Tout droit réservé</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;