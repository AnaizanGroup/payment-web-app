import React from "react"

import "./Section2.scss"

export const Section2 = ({ title, subtitle, array }) => {
    return (
        <section className="section-three section">
            <h2 className="section-title  text-align">
               {title}
            </h2>
            <p className="text">{subtitle}</p>
            <div className="group-card-s2">
                {array && array.map((list, index) => {
                    return (
                        <div className="cards-s2" key={index}>
                            <img src={list.img} />
                            <h5> {list.title} </h5>
                            <p>
                                {list.text}
                            </p>
                            <li> know more </li>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}