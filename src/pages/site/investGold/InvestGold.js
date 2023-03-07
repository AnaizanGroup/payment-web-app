import React from "react"
import { CardText } from "../share/cardText/CardText";

import "./InvestGold.scss"

import gold from "../../../assets/images/png/gold.png"
import g1 from "../../../assets/images/png/g1.png"
import g3 from "../../../assets/images/png/g3.png"
import g6 from "../../../assets/images/png/g6.png"
import f1 from "../../../assets/images/svg/f1.svg"
import f2 from "../../../assets/images/svg/f2.svg"
import f3 from "../../../assets/images/svg/f3.svg"

import { Section2 } from "../share/section2/Section2";
import { SectionDownload } from "../share/sectionDownload/SectionDownload";
import { Section3 } from "../share/Section3/Section3";
import { SectionBlog } from "../share/sectionBlog/SectionBlog";
import { Faq } from "../share/faq/Faq";


const InvestGold = () => {

    const safety = [
        {
            img: g1,
            title: 'Transfer Money',
            text: `
            Share payment link via an email,
            SMS, messenger, chatbot etc. and
            get paid immediately
`
        },
        {
            img: g3,
            title: 'Banking',
            text: `
            Share payment link via an email,
SMS, messenger, chatbot etc. and
get paid immediately`
        },
        {
            img: g6,
            title: 'Manage groups of frien',
            text: `
            Share payment link via an email,
            SMS, messenger, chatbot etc. and
            get paid immediately`
        }
    ]

    const filiale = [
        {
            icon: f1,
            title: "Diversification",
            text: "Trade and monitor accounts"
        },
        {
            icon: f2,
            title: "Tax efficient",
            text: "Blockchain-based finance"
        },
        {
            icon: f3,
            title: "Stability",
            text: "ownership"
        },
        {
            icon: f1,
            title: "Global currency",
            text: "Built on blockchain network"
        },
        {
            icon: f2,
            title: "No counter-party risk",
            text: "Digital investment data storage"
        },
        {
            icon: f3,
            title: "Emerging industrial uses",
            text: "rade and monitor accounts"
        },
        {
            icon: f2,
            title: "Limited supply",
            text: "Processing & analyzing data sets"
        },
        {
            icon: f3,
            title: "Asset mokenization",
            text: "Best digital tokens"
        },
    ]


    return (
        <div className="parent">
            <section className="first-section section">
                <CardText title1={"Secure Your Future"}
                    title2={"With A Gold"} para={` Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
                />
                <div className="right-div-invest-gold">
                    <img src={gold} />
                </div>
            </section>
            <Section2 title={"Buy and secure gold with the tap of a finger"}
                subtitle={`Investing in allocated and deliverable physical gold. Buy and secure
                gold with ease, and gain full control over securing your financial future.`}
                array={safety} />
            <SectionDownload />
            <Section3 title={"Diversify your portfolio with physical investments"} />
            <section className="section-five-gold section">
                <div className="top-block">
                    <div className="groups-card-s5-gold">
                        {filiale && filiale.map((list, index) => {
                            if (index < 3) {
                                return <div className="card-s5-gold" key={index}>
                                    <div className="icon">
                                        <img src={list.icon} />
                                    </div>
                                    <div className="text-div-g">
                                        <h4> {list.title} </h4>
                                        <p> {list.text} </p>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                    <div className="right-content">
                        <h5> invest in gold </h5>
                        <h2 className="section-title">
                            Why Invest in
                            Physicaly Gold
                        </h2>
                        <p>
                            Investing in a gold IRA is a great way to add diversification to your retirement
                            portfolio for a few key reasons. First, when markets are down and paper assets are
                            losing value, gold investments will typically increase in value. However, when
                            markets are up, gold still tends to increase in value. In fact, gold is up more than
                            iÂÂÐ over the last pÂ years. In addition, unlike stocks, bonds, and foreign
                            currencies, gold is a physical asset that you can own. So when you are buying
                            physical gold with an IRA youÄre saving for retirement with assets you can hold.
                        </p>
                    </div>
                </div>
                <div className="center-block">
                    {filiale && filiale.map((list, index) => {
                        if (index > 2 && index < 6) {
                            return <div className="card-s5-gold" key={index}>
                                <div className="icon">
                                    <img src={list.icon} />
                                </div>
                                <div className="text-div-g">
                                    <h4> {list.title} </h4>
                                    <p> {list.text} </p>
                                </div>
                            </div>
                        }
                    })}
                </div>
                <div className="end-block">
                    {filiale && filiale.map((list, index) => {
                        if (index > 5 && index < 8) {
                            return <div className="card-s5-gold" key={index}>
                                <div className="icon">
                                    <img src={list.icon} />
                                </div>
                                <div className="text-div-g">
                                    <h4> {list.title} </h4>
                                    <p> {list.text} </p>
                                </div>
                            </div>
                        }
                    })}
                </div>
            </section>
            <SectionBlog />
            <Faq />
        </div>
    )
}

export default InvestGold;