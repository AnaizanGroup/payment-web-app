import React from "react"

import "./CardText2.scss"


export const CardText2 = ({ title, para, opt1, opt2, opt3, opt4, opt5 }) => {
    return (
        <>
            <div className="div-right-s4">
                <h2 className="section-title">
                    {title}
                </h2>
                <p>
                   {para}
                </p>
                <div>
                    <p> {opt1} </p>
                    <p> {opt2} </p>
                    <p> {opt3} </p>
                    <p> {opt4} </p>
                    <p> {opt5} </p>
                </div>
                <button>Learn More</button>
            </div>
        </>
    )
}