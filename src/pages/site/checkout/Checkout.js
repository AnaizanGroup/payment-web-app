import React, { useState } from "react"
import { FaAddressBook, FaRegAddressCard, FaCheckCircle, FaEdit, FaRegCreditCard } from "react-icons/fa"
import { FiEdit } from "react-icons/fi"
import "./Checkout.scss"
import { LayoutBloc } from "./LayoutBloc"

import mtn from "../../../assets/images/png/mtnPay.png";
import moov from "../../../assets/images/png/moovPay.png";
import visa from "../../../assets/images/png/visaPay.png";
import mastercard from "../../../assets/images/png/masterPay.png";
import Cart from "../../../components/cart/Cart"
import { useSelector } from "react-redux"
import { PopupLayout } from "../../../components/popupLayout/PopupLayout"
import SelectCountryField from "../../../components/selectCountryField/SelectCountryField"
import { SummaryOrder } from "../../../components/summaryOrder/SummaryOrder"


const Checkout = () => {
    const [popup, isPopup] = useState(false)
    const cart = useSelector((state) => state.cart.cartItem)

    const addr = [
        {
            name: "Jean Hugues HOUINSSOU",
            phone: "+22997970097",
            country: "Bénin",
            province: "Cotonou",
            codePostal: "01BP9514",
        }
    ]

    return (
        <div className="checkout-page">
            <PopupLayout closes={popup}  >
                <form className="form-checkout form-add">
                    <span className="close-times"
                        onClick={() => isPopup(false)}>&times;</span>
                    <h3> Adresse de livraison </h3>
                    <div className="div-input">
                        <label>Nom complet (Ex: Jean Hugues Houinssou)</label>
                        <input type="text" name="" placeholder="..." />
                        <span></span>
                    </div>
                    <div className="div-inputs">
                        <p>
                            {/*
                            <input type="text" name="" placeholder="date expiration" />
                            <span></span> */}
                            <label>Pays/Région</label>
                            <SelectCountryField />
                        </p>
                        <p>
                            <label> Ville/Province </label>
                            <input type="text" name="" placeholder="code" />
                            <span></span>
                        </p>
                        <p>
                            <label> Code postale </label>
                            <input type="text" name="" placeholder="code" />
                            <span></span>
                        </p>
                    </div>
                    <div className="div-input">
                        <label> Téléphone </label>
                        <input type="text" name="" placeholder="Votre téléphone" />
                        <span></span>
                    </div>
                    <button className="btn-send" type="submit"> Enrégistré </button>
                </form>
            </PopupLayout>
            <div className="div-left-page">
                <LayoutBloc icon={<FaRegAddressCard />} title={'Adresse de livraison'}
                    children2={
                        <button onClick={() => isPopup(true)}
                            className="add-addr">Modifier votre adresse</button>
                    }>
                    <div className="edit-form-div">
                        {
                            addr.length != 0 ? (

                                addr.map((list, index) => {
                                    return (
                                        <div key={index} className="infos-addr">
                                            <p>
                                                <b> {list.name} </b>
                                            </p>
                                            <p> {list.phone} </p>
                                            <p> {list.country}, {list.province}, {list.codePostal} </p>
                                        </div>
                                    )
                                })
                            ) : (
                                <button onClick={() => isPopup(true)}>
                                    <FiEdit />
                                    Votre Adresse
                                </button>
                            )
                        }
                    </div>
                </LayoutBloc>
                <LayoutBloc icon={null} title={'Paiement'}>
                    <div className="payments">
                        <div className="mode-pay pay1">
                            <h4>Choisissez votre moyen de paiement</h4>
                            <div className="moyen-pay">
                                <div>
                                    <input type="radio" name="mode-pay" />
                                    <img src={mtn} />
                                </div>
                                <div>
                                    <input type="radio" name="mode-pay" />
                                    <img src={moov} />
                                </div>
                            </div>
                        </div>
                        <div className="mode-pay">
                            <h4>Payer par carte bancaire <FaRegCreditCard /> </h4>
                            <div className="moyen-pay">
                                <div>
                                    <input type="radio" name="mode-pay" />
                                    <img src={visa} />
                                </div>
                                <div>
                                    <input type="radio" name="mode-pay" />
                                    <img src={mastercard} />
                                </div>
                            </div>
                        </div>
                        <div className="form-card-infos">
                            <h4> Information de la carte </h4>
                            <form className="form-checkout">
                                <div className="div-input">
                                    <input type="text" name="" placeholder="XXXX XXXX XXXX XXXX..." />
                                    <span></span>
                                </div>
                                <div className="div-inputs">
                                    <p>
                                        <input type="text" name="" placeholder="date expiration" />
                                        <span></span>
                                    </p>
                                    <p>
                                        <input type="text" name="" placeholder="code" />
                                        <span></span>
                                    </p>
                                </div>
                                <button className="btn-send" type="submit"> Envoyer </button>
                            </form>
                        </div>
                    </div>
                </LayoutBloc>
                <LayoutBloc icon={null} title={'Panier'}>
                    <div className="card-shop-verify">
                        <Cart cart={cart} />
                    </div>
                </LayoutBloc>
            </div>
            <SummaryOrder />
        </div>
    )
}

export default Checkout;