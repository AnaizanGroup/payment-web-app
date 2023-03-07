import React from "react"
import { FaApple, FaAppStore, FaArrowLeft, FaArrowRight, FaGooglePay } from "react-icons/fa"

import "./SectionBlog.scss"

import app1 from "../../../../assets/images/png/app1.png"
import app2 from "../../../../assets/images/png/app2.png"
import blog1 from "../../../../assets/images/png/blog1.png"
import blog2 from "../../../../assets/images/png/blog2.png"
import blog3 from "../../../../assets/images/png/blog3.png"
import blog4 from "../../../../assets/images/png/blog4.png"


export const SectionBlog = () => {

    const blogs = [
        {
            img: blog1,
            date: '29 December 20222',
            link: 'Start an online business and work from home',
            desc: `
                ohodiheiofdhe fdeoihfdpoiehfe piohpoehdfe phjpfde
                oiedhoeihpifdepihfd
            `,
        },
        {
            img: blog2,
            date: '29 December 20222',
            link: 'Start an online business and work from home',
            desc: `
                ohodiheiofdhe fdeoihfdpoiehfe piohpoehdfe phjpfde
                oiedhoeihpifdepihfd
            `,
        },
        {
            img: blog3,
            date: '29 December 20222',
            link: 'Start an online business and work from home',
            desc: `
                ohodiheiofdhe fdeoihfdpoiehfe piohpoehdfe phjpfde
                oiedhoeihpifdepihfd
            `,
        },
        {
            img: blog4,
            date: '29 December 20222',
            link: 'Start an online business and work from home',
            desc: `
                ohodiheiofdhe fdeoihfdpoiehfe piohpoehdfe phjpfde
                oiedhoeihpifdepihfd
            `,
        }
    ]
    return (
        <>
            <section className="section-nine section">
                <h2 className="section-title">
                    Our blog
                </h2>
                <p>
                    See how you can up your career status
                    <li>All Categorie <FaArrowRight /> </li>
                </p>
                <div className="group-card-s9">
                    {blogs && blogs.map((list, index) => {
                        return <div className="card-s9" key={index}>
                            <img src={list.img} />
                            <span> {list.date} </span>
                            <a href=""> {list.link} </a>
                            <p> 
                                A complete guide to starting a small
                                business online 
                                </p>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}