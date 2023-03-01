import React from "react"
import { CardText2 } from "../cardText2/CardText2"

import "./Section3.scss"

import s4_image from "../../../../assets/images/png/s4_image.png"


export const Section3 = ({title}) => {
    return (
        <section className="section-four section">
                <img src={s4_image} />
                <CardText2 title={title}
                    para={`ed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.`}
                    opt1={""} opt2={""} opt3={""} opt4={""} opt5={""}
                />
            </section>
    )
}