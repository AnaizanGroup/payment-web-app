import React from "react"

import "./BoxAccount.scss"

import facebook from "../../assets/images/svg/facebook.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import linkedin from "../../assets/images/svg/linkedin.svg";
import google from "../../assets/images/png/googles.png";


const BoxAccount = ({openAuth}) => {
    return (
        <div className="box-account">
            <div className="bars">
                <div></div>
                or continue
                <div></div>
            </div>
            <div className="groups-sociaux">
                <a href="">
                    <img src={facebook} alt />
                </a>
                <a href="">
                    <img src={google} alt />
                </a>
                <a href="">
                    <img src={linkedin} alt />
                </a>
                <a href="">
                    <img src={twitter} alt />
                </a>
            </div>
        </div>
    )
}

export default BoxAccount;