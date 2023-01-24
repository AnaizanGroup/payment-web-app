import React from "react";

import "./Footer.scss";

import logo from "../../assets/images/svg/logo.svg";
import mtn from "../../assets/images/png/mtnPay.png";
import moov from "../../assets/images/png/moovPay.png";
import visa from "../../assets/images/png/visaPay.png";
import feexpay from "../../assets/images/svg/feexpay.svg";
import facebook from "../../assets/images/svg/facebook.svg";
import twitter from "../../assets/images/svg/twitter.svg";
import linkedin from "../../assets/images/svg/linkedin.svg";
import youtube from "../../assets/images/svg/youtube.svg";

const Footer = () => {

    const setYear = () => {
        const date = new Date()
        const year = date.getFullYear();

        var el = document.getElementById("year")
        return year;
    }

    return (
        <>
            <footer>
                <div className="newsletter">
                    <p> Connectez-vous à nos nouvelles publication</p>
                    <form>
                        <input type="email" placeholder="Votre e-mail" />
                        <button> Envoyer </button>
                    </form>
                </div>
                <div className="row1">
                    <div class="foot-div1">
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
                            <div>
                                <img src={feexpay} alt="" />
                                <img src={mtn} alt="" />
                                <img src={moov} alt="" />
                                <img src={visa} alt="" />
                            </div>
                        </div>
                        {/*  <div className="newsletter">
                                            <form action="" className="newsletter">
                                                <p>Restez connecter pour ne manqué nos nouvelle article</p>
                                                <input type="email" name="" id="adresse mail" />
                                                    <button type="submit"> <i className="fa fa-plane"></i> </button>
                                            </form>
                                        </div>  */}
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
                <div className="row2">
                    <p>&copy; {setYear()} Tout droit réservé</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;