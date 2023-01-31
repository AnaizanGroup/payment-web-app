import React from "react"

import "./BoxAccount.scss"

import facebook from "../../assets/images/svg/facebook.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import linkedin from "../../assets/images/svg/linkedin.svg";
import google from "../../assets/images/png/googles.png";


const BoxAccount = ({openAuth}) => {
    return (
        <div className="box-account">
            <p> <b>Bienvenue !!!</b> Vous avez déjà un compte ?</p>
            <div className="btn-connects">
                <a onClick={() => openAuth(1,true)}>Connectez-vous</a>
                <a onClick={() => openAuth(0,true)}>Inscrivez-vous</a>
            </div>
            <div className="bars">
                <div></div>
                continuer avec
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