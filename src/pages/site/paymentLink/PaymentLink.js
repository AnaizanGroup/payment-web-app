import React from "react"

import "./PaymentLink.scss"

import p_link from "../../../assets/images/png/p-lnik.png"
import tik from "../../../assets/images/png/tiktik.png"
import { CardText } from "../share/cardText/CardText"
import { FaApple, FaAppStore, FaCheckSquare } from "react-icons/fa"

import img from "../../../assets/images/png/ims.png"
import p1 from "../../../assets/images/png/p1.png"
import p2 from "../../../assets/images/png/p2.png"
import p3 from "../../../assets/images/png/p3.png"
import tik_red from "../../../assets/images/png/link-red.png"
import tik_blue from "../../../assets/images/png/link-blue.png"

import { Faq } from "../share/faq/Faq"

const PaymentLink = () => {

    const cases = [
        {
            title: "Businesses Without Website",
            text: `Affirm provides a range of policies
            to protect individuals and
            businesses against the RISK of
            financial losses.`
        },
        {
            title: "Alternative Payment Option",
            text: `Payment Links can be an easy
            substitute for cash-on-delivery
            and point-of-sale payment
            methods in your business.`
        },
        {
            title: "Chatbot Integration",
            text: `Integrate Payment Links with
            Chatbots for users to enjoy a
            seamless buying`
        },
        {
            title: "Social Media Sharing",
            text: `Share the payment link over
            social media platforms like
            Facebook, Instagram, WhatsApp
            etc. giving your customers a quick
            checkout option.`
        }
    ]

    return (
        <div className="parent">
            <section className="first-section section">
                <CardText title1={"Get paid instantly"}
                    title2={"with Payment Links"} para={` Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
                />
                <div className="right-div-plink">

                    <img className="tik" src={tik} />
                    <img src={p_link} />
                </div>
            </section>

            <section className="section-two-plink section">
                <h2 className="section-title text-align">
                    Accept Payment Via Payments Links
                </h2>
                <img src={tik} className="tik" />
                <img src={tik_red} className="tik tik-red" />
                <img src={tik_blue} className="tik tik-blue" />
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
                    <form>
                        <h3>Create a Payment Link</h3>
                        <label>Amount</label>
                        <b>$ 1.00</b>
                        <label>Customer Details</label>
                        <li>Generate Demo Payment Link</li>
                        <input type="text" placeholder="Phone Number" />
                        <input type="email" placeholder="Email" />
                        <p>
                            <input type="checkbox" /> <span>via SMS</span>
                            <input type="checkbox" /> <span>via Email</span>
                        </p>
                        <button>Create a demo payment link</button>
                    </form>
                </div>
                
            </section>

            <section className="section-three-plink section">
                <div className="div-b-s3">
                    <div className="d1">
                        <h5>BENEFITS</h5>
                        <h2 className="section-title">
                            Payment Links
                            for your business
                            use case
                        </h2>
                        <p>
                            Anaizan Pay Payment Links directly integrates
                            into your ecosystem giving the best
                            experience for your business model.
                        </p>
                        <p>
                            No matter how specific your use case, we can
                            help. Sign Up to get started.
                        </p>
                        <button> Sign up </button>
                    </div>
                    <div className="d2">
                        {cases.map((list, index) => {
                            return <div key={index} className="case">
                                <div></div>
                                <h4> {list.title} </h4>
                                <p> {list.text} </p>
                            </div>
                        })}
                    </div>
                </div>
            </section>

            <section className="section-four-plink section">
                <div className="div1-s4-plink">
                    <h5>Start Toda</h5>
                    <h2 className="section-title">
                        Now create and track
                        Payment Links on the all new
                        Anaizan Pay Mobile App
                    </h2>
                    <p>reate unlimited links for free from anywhere, anytime.</p>
                    <p> <FaCheckSquare /> Create and share payment links instantly </p>
                    <p> <FaCheckSquare /> Track payments on the go </p>
                    <p> <FaCheckSquare /> Issue refunds with a single click </p>
                    <p> <FaCheckSquare /> Hassle- free onboarding </p>
                    <p> Download the app now! </p>
                    <div className="div-btn">
                        <div>
                            <FaApple />
                            <li>
                                <span>Download on the</span>
                                <b>Apple Store</b>
                            </li>
                        </div>
                        <div>
                            <FaAppStore />
                            <li>
                                <span>Get in on</span>
                                <b> Google Play </b>
                            </li>
                        </div>
                    </div>
                </div>
                <img src={img} />
            </section>

            <section className="section-five-plink section ">
                <h2 className="section-title">
                    No Extra Charges Applicable
                </h2>
                <p className="text">
                    Create and customise your payment links for free, and get
                    charged only for successful transactions!
                </p>
                <div className="s5-div-b">
                    <div className="b1">
                        <h5> Standart Plan</h5>
                        <div>
                            <h1>2%</h1>
                            <p>
                                <h6>Anaizanpay platform fee</h6>
                                Get access to Flash Checkout, Dashboard, Reports &
                                much more
                            </p>
                        </div>
                        <p>
                            *GST applicable. Instruments like Diners and Amex Cards, International Cards,
                            EMI (Credit Card, Debit Card & Cardless) & Corporate (Business) Credit Cards will
                            be charged at 3%
                        </p>
                        <div className="d">
                            <div>
                                <h6>One-Time Setup Fee</h6>
                                <b>$ 0.00</b>
                                <span>No setup fee</span>
                            </div>
                            <div>
                                <h6>Annual Maintenance Fee</h6>
                                <b>$ 0.00</b>
                                <span>No maintenance fee</span>
                            </div>
                        </div>
                        <button>Get Started</button>
                    </div>
                    <div className="b2">
                        <div>
                            <h4>Customized Plan</h4>
                            <p>
                                Sign up now to learn more about the Anaizanpay
                                payments suite and explore our powerful dashboard.
                            </p>
                            <a href=""> Sign up</a>
                        </div>
                        <p>
                            Explore how you can drive more value for
                            your business with with its
                            smart features.
                            Payment
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-six-plink section">
                <h2 className="section-title">
                    Payment Links is a part
                    of Anaizanpay's product
                </h2>

                <div className="group-card-s6">
                    <div className="card-plink-s6">
                        <p>
                            <img src={p1} />
                            <span>Invoices</span>
                        </p>
                        <p>
                            Send your customers GST compliant
                            invoices with item level details to accept
                            online payments through debit/credit
                            cards, netbanking, wallets, UPI etc.
                        </p>
                    </div>
                    <div className="card-plink-s6">
                        <p>
                            <img src={p2} />
                            <span>Payment Pages</span>
                        </p>
                        <p>
                            Create custom-branded, hosted Payment
                            Pages in a few clicks to accept payments
                            online. Your business can go online with
                            zero integration and tech efforts. We build
                            and operate for you.
                        </p>
                    </div>
                    <div className="card-plink-s6">
                        <p>
                            <img src={p3} />
                            <span>Smart Collect</span>
                        </p>
                        <p>
                            Now accept NEFT, RTGS and IMPS transfers
                            through customer identifiers that can be
                            generated on-demand with automated
                            reconciliation for payments at scale.
                        </p>
                    </div>
                </div>
                <div className="foot-sect">
                    <span>Also, take a look at other Razorpay products –</span>
                    <a href="">Payment Gateway</a>
                    <a href="">Invoices</a>
                    <a href="">BharatQR</a>
                    <a href="">UPI</a>
                </div>
            </section>
            <Faq />
        </div>
    )
}

export default PaymentLink;