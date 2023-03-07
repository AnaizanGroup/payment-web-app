import React from "react"
import { CardText } from "../share/cardText/CardText";

import "./PaymentScan.scss"

import { Faq } from "../share/faq/Faq";

import p_link from "../../../assets/images/png/p-lnik.png"
import tik from "../../../assets/images/png/tiktik.png"
import tik_red from "../../../assets/images/png/link-red.png"
import tik_blue from "../../../assets/images/png/link-blue.png"
import scan_m from "../../../assets/images/png/scan-merchand.png"
import screen from "../../../assets/images/png/screen.png"
import f from "../../../assets/images/svg/feu.svg"
import c from "../../../assets/images/svg/cir.svg"
import form from "../../../assets/images/png/forms1.png"

import Brands from "../share/brands/Brands";


const PaymentScan = () => {
    return (
        <div className="parent">
            <section className="first-section section">
                <CardText title1={"A Fast & Easy Way "}
                    title2={"to Pay Anywhere"} para={` Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
                />
                <div className="right-div-pscan">
                    <img className="tik" src={tik} />
                    <img src={p_link} />
                </div>
            </section>

            <Brands />

            <section className="section-three-pscan section">
                <h2 className="section-title">
                    Accept Payment Via Payments Multi QR
                </h2>
                <div className="div-s2-plink">
                    <div className="d1-plink">
                        <div className="progress">
                            <div className="bar"></div>
                            <div className="round"></div>
                            <div className="round"></div>
                            <div className="round"></div>
                        </div>
                        <div className="text-b">
                            <div>
                                <h5>Step 1</h5>
                                <h4>Generate Your Payment Link</h4>
                                <p>ia API or Dashboard with free Reminders</p>
                            </div>
                            <div>
                                <h5>Step 2</h5>
                                <h4>Enter Customer Contact Details</h4>
                                <p>Share link via SMS, Whatsapp, Email and more</p>
                            </div>
                            <div>
                                <h5>Step 3</h5>
                                <h4>Accept Payments</h4>
                                <p>Receive notifications in real time.</p>
                            </div>
                        </div>
                    </div>
                    <img src={form} />
                </div>
            </section>

            <section className="section-four-pscan section">
                <h2 className="section-title">
                    All-in-One QR
                </h2>
                <p>Collect QR code payments using UPI QR or Bharat QR</p>
                <div className="div-b-s3">
                    <div className="d1">
                        <div className="cases">
                            Customized to your brand
                        </div>
                        <div className="cases">
                            Track payments seamlessly
                        </div>
                        <div className="cases">
                            Generate multiple QRs
                        </div>
                    </div>
                    <img src={scan_m} />
                </div>
            </section>

            <section className="section-five-pscan section">
                <h2 className="section-title">
                    Make payment easy for your customers
                </h2>
                <p> Choose from multiple features and get a QR code that suits your business need </p>
                <img src={screen} />
            </section>

            <section className="section-six-pscan section">
                <h2 className="section-title">
                    Pricing
                </h2>
                <p className="subtitle">
                    With no setup or maintenance fees, Anaizan makes
                    payments simpler for all businesses. Pay only when you get
                    paid!
                </p>
                <div className="pricing-div">
                    <h6>Standard Pricing</h6>
                    <div className="pricing-type">
                        <h5> <img src={f} /> UPI Payment</h5>
                        <h5> <img src={c} /> UPI Credit & Debit Card</h5>
                    </div>
                    <div className="tarif">
                        <div className="t1">
                            <h3>1%</h3>
                            <p>
                                Razorpay Platform fees
                                | Applicable on each
                                transaction
                            </p>
                        </div>

                        <div className="t1">
                            <h3>2%</h3>
                            <p>
                                Razorpay Platform fees
                                | Applicable on each
                                transaction
                            </p>
                        </div>
                    </div>
                    <div className="btn-sign">
                        <button>Sign up now </button>
                        <p>
                            Sign up now to learn more about the Razorpay
                            payments suite and explore our powerful dashboard.
                        </p>
                    </div>
                    <p className="last-p"> * GST Applicable. This pricing is not applicable on Razorpay Checkout. </p>
                </div>
            </section>
            <Faq />
        </div>
    )
}

export default PaymentScan;