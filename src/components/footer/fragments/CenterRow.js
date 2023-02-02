import logo from "../../../assets/images/svg/logo.svg";
import facebook from "../../../assets/images/svg/facebook.svg";
import twitter from "../../../assets/images/svg/twitter.svg";
import linkedin from "../../../assets/images/svg/linkedin.svg";
import youtube from "../../../assets/images/svg/youtube.svg";

import { MoyenPay } from "../../moyenPay/MoyenPay"

import "../Footer.scss"


export const CenterRow = () => {
    return (
        <>
            <div className="row1">
                <div className="foot-div1">
                    <img src={logo} alt="" />
                    <p>
                        FeexMarket vous offre la possibilité d'acheté et
                        de vendre vos produits en tout sécurité partout dans le monde.
                    </p>
                </div>
                <div className="bar"></div>
                <div className="foot-div2">
                    <h2> En savoir plus </h2>
                    <ul>
                        <a href=""> à propos </a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                    </ul>
                </div>
                <div className="bar"></div>
                <div className="foot-div3">
                    <h2> Autres</h2>
                    <ul>
                        <a href=""> à propos </a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                        <a href=""> Condition générale</a>
                    </ul>
                </div>
                <div className="bar"></div>
                <div className="foot-div4">
                    <div className="modepay">
                        <h2> Nos Moyens de Paiement</h2>
                        <MoyenPay />
                    </div>
                    <div className="socials">
                        <h2>Réseaux sociaux:</h2>
                        <ul>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={linkedin} lt="" /></a>
                            <a href=""><img src={youtube} alt="" /></a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}