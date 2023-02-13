import React, { useState } from "react"
import { HeadTabs } from "../../../../components/headTabs/HeadTabs";
import Toggle from "../../../../components/toggle/Toggle";

import "./PayementSettings.scss"

const PayementSettings = () => {
    const [momo, setMomo] = useState("")
    const [moov, setMoov] = useState("")
    const [visa, setVisa] = useState("")
    const [masterCard, setMasterCard] = useState("")

    
    return (
        <div className="payement-settings">
            <HeadTabs title={"Paiement"} />
            <div className="payement-block parent">
                <p>
                    Choisissez les méthodes de paiements que vous accepté.
                </p>
                
                <div className="block-child">
                    <h4> Moyen de paiement par réseaux GSM</h4>
                    <div className="moyen">
                        <Toggle label={"Mobile Money"} value="mmoney" setValue={setMomo} />
                        <Toggle label={"Moov Money"} value="mvmoney" setValue={setMoov} />
                    </div>
                </div>
                <div className="block-child">
                    <h4> Moyen de paiement par carte bancaire</h4>
                    <div className="moyen">
                        <Toggle label={"Visa"} value="visa" setValue={setVisa} />
                        <Toggle label={"Master Card"} value="mastercard" setValue={setMasterCard} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayementSettings;