import React from "react"
import { FaApple, FaGooglePay } from "react-icons/fa"

import "./SectionDownload.scss"

import app1 from "../../../../assets/images/png/app1.png"
import app2 from "../../../../assets/images/png/app2.png"

export const SectionDownload = () => {

    return (
        <>
            <section className="section-eight section">
                <div className="div-parent-s8">
                    <div className="div-left-s8">
                        <button> Start Today </button>
                        <h3> Download the App</h3>
                        <p>
                            Take classes on the go with the AnaizanPay app. Stream or download
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
        </>
    )
}