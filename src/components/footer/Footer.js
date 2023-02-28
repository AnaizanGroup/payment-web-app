import React, { useEffect, useState } from "react"
import 'flag-icon-css/css/flag-icons.min.css'
import "./Footer.scss"
import { FaAndroid, FaAngleDown, FaAngleRight, FaApple, FaArrowRight, FaChevronDown, FaChevronUp, FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa"


const Footer = () => {

    const links = [
        {
            title: "About",
            items: [
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
            ]
        },
        {
            title: "Products",
            items: [
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
            ]
        },
        {
            title: "Support",
            items: [
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
                {path:"/", label: "Carrers"},
            ]
        },
    ]

    useEffect(()=>{

    },[])

    return (
        <footer className="footer">
            <div className="div1">
                <ul>
                    <a href="">Terms of Service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Site Map</a>
                </ul>
                <ul>
                    <span> Follow us </span>
                    <a href=""> <FaFacebookF /> </a>
                    <a href=""> <FaTwitter /> </a>
                    <a href=""> <FaInstagramSquare /> </a>
                    <a href=""> <FaLinkedinIn /> </a>
                </ul>
            </div>
            <div className="div2">
                {links.map(({title, items}, index) => {
                    return <ul key={index}>
                        <h3> {title} </h3>
                        {items.map((list, index2) => {
                            return <a href={list.path}> {list.label} </a>
                        })}
                    </ul>
                })}
                <div className="newsletter-div">
                    <form>
                        <h4>Subscribe</h4>
                        <p>
                            <input type="email" placeholder="Your email adress" />
                            <button>Send</button>
                        </p>
                    </form>
                    <h3>Apps</h3>
                    <p> <FaApple /> IOS App </p>
                    <p> <FaAndroid /> Android App </p>
                </div>
            </div>
            <div className="div3">
                <p>&copy; AnaizanPay. All right reserved</p>
                <div className="div-div3">
                    <div>
                        USD <FaAngleDown />
                    </div>
                    <div>
                        English <FaAngleDown />
                    </div>
                </div>
            </div>
            <button className="feed-top"> <FaChevronUp /> </button>
        </footer>
    )
}

export default Footer;