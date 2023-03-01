import React from "react"
import { CardText } from "../share/cardText/CardText";

import "./InvestimentStart.scss"


import investiment from "../../../assets/images/png/image3.png"
import img1 from "../../../assets/images/png/img1.png"
import img2 from "../../../assets/images/png/img2.png"
import img3 from "../../../assets/images/png/img3.png"
import img4 from "../../../assets/images/png/img4.png"
import img5 from "../../../assets/images/png/img5.png"
import { SectionJob } from "../share/sectionJob/SectionJob";
import { SectionShare } from "../share/Section";
import { Faq } from "../share/faq/Faq";
import { Section3 } from "../share/Section3/Section3";


const InvestimentStart = () => {

    const offering = [
        {
            img: img1,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
        {
            img: img2,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
        {
            img: img3,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
        {
            img: img4,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
        {
            img: img5,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
        {
            img: img5,
            company: "Anaizan",
            adresse: "Abidjan, ",
            text: `A recognized leader in language immersion & early
        education, opening second school.`,
            price: 0,
        },
    ]
    return (
        <div className="parent">
            <section className="first-section section">
                <CardText title1={"Startups investments"}
                    title2={"Main Street businesses"} para={` Curabitur dictum euismod risus, eget eleifend nulla malesuada ut.
                Fusce egestas urna facilisis, venenatis quam nec, tristique mauris.
                Proin lacus dolor, aliquam quis enim eu,`}
                />
                <div className="right-div-invest">
                    <img src={investiment} />
                </div>
            </section>
            <section className="section-two-start section">
                <h2 className="section-title">
                    Offerings open for investment
                </h2>
                <p className="subtitle-s2-start">
                    Explore pre-vetted investment opportunities available in a growing
                    number of industry categories.
                </p>
                <div className="groups-card-s2-stat">
                    {offering && offering.map((list, index) => {
                        return <div className="card-s2-start">
                            <img src={list.img} />
                            <div className="infos">
                                <h3> {list.company} </h3>
                                <p> {list.adresse} </p>
                                <p className="desc-comp"> {list.text} </p>
                                <div className="div-progress">
                                    <div className="progress">
                                        <div></div>
                                    </div>
                                    <p>
                                        <span> {list.price} </span>
                                        <span>of {list.price} </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    })}
                </div>
                <button className="view-all"> View all project </button>
            </section>
            <SectionJob />
            <Section3 title={"Looking to raise capital for your growing business ?"}
            />
            <SectionShare />
            <Faq />
        </div>
    )
}

export default InvestimentStart;