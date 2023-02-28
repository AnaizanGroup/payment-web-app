import React from "react"
import { FaApple, FaAppStore, FaArrowLeft, FaGooglePay } from "react-icons/fa"

import "./Section.scss"

import app1 from "../../../assets/images/png/app1.png"
import app2 from "../../../assets/images/png/app2.png"
import blog1 from "../../../assets/images/png/blog1.png"
import blog2 from "../../../assets/images/png/blog2.png"
import blog3 from "../../../assets/images/png/blog3.png"
import blog4 from "../../../assets/images/png/blog4.png"


export const SectionShare = () => {

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
            <section className="section-eight section">
                <div className="div-parent-s8">
                    <div className="div-left-s8">
                        <button> Start Today </button>
                        <h3> Download the App</h3>
                        <p>
                            ijhdoiuhe duheo juhihihihdfe ihiihe iuhihie iuhihde
                            ihdiehid ihihoiz ihihihihe hihiehd ijijjhiiohih b
                            juiehidehide
                        </p>
                        <div className="div-btn-s8">
                            <div>
                                <FaApple />
                                <p>
                                    <span>
                                        Download of the <br />
                                        <b>Apple Store</b>
                                    </span>
                                </p>
                            </div>
                            <div>
                                <FaGooglePay />
                                <p>
                                    <span>
                                        Download of the <br />
                                        <b>Apple Store</b>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="div-right-s9">
                        <img src={app1} />
                        <img src={app2} />
                    </div>
                </div>
            </section>

            <section className="section-nine section">
                <h2 className="section-title">
                    Our blog
                </h2>
                <p>
                    oihoihidhidhhdhido
                    <li>All Categorie <FaArrowLeft /> </li>
                </p>
                <div className="group-card-s9">
                    {blogs && blogs.map((list, index) => {
                        return <div className="card-s9" key={index}>
                            <img src={list.img} />
                            <span> {list.date} </span>
                            <h4> {list.link} </h4>
                            <p> {list.desc} </p>
                        </div>
                    })}
                </div>
            </section>
        </>
    )
}