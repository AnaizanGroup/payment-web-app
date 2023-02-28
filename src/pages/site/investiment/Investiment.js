import React from "react"

import woman from "../../../assets/images/png/woman.png"
import user from "../../../assets/images/png/user.png"
import motif from "../../../assets/images/svg/motif.svg"

import "./Investiment.scss"
import { SectionShare } from "../share/Section"


const Investiment = () => {
    return(
        <div className="parent">
            <section className="first-section section">
                <div className="left-div">
                    <h6>ANAIZAN MAKES IT EASY</h6>
                    <h1> Smart investiments <br /> for future</h1>
                    <p>
                        ihgiushgogdousgousgoishoihoiss
                        oiuhsoihhpihspoipoihppophpohpohpo
                        iugsiuohohoihihihoihoihoihoihoihh
                    </p>
                    <p>
                        <a href="">Get Started</a>
                        <li>Watch video</li>
                    </p>
                </div>
                <div className="right-div">
                    <img src={woman} />
                    
                </div>
                <img className="motif" src={motif} />
            </section>

            <SectionShare />
        </div>
    )
}

export default Investiment;