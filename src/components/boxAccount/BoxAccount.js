import React from "react"

import "./BoxAccount.scss"

import facebook from "../../assets/images/svg/facebook.svg";
import tiktok from "../../assets/images/svg/tiktok.svg";
import google from "../../assets/images/png/googles.png";
import instagram from "../../assets/images/svg/instagram.svg"

const BoxAccount = ({ openAuth }) => {
    return (
        <div className="box-account">
            <div className="bars">
                <div></div>
                or continue
                <div></div>
            </div>
            <div className="groups-sociaux">
                <a href="">
                    <img src={google} alt />
                </a>
                <a href="">
                    <img src={facebook} alt />
                </a>

                <a href="">
                    <img src={instagram} alt />
                </a>
                <a href="">
                    <img src={tiktok} alt />
                </a>
            </div>
        </div>
    )
}

export default BoxAccount;