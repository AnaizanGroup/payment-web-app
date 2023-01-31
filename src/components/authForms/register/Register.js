import React, {useState} from "react"
import SelectCountryField from "../../selectCountryField/SelectCountryField"

import "../auth.scss"

const Register = () => {

    const [role, setRole] = useState("Achecteur")
    
    const selectRole = () => {

    }

    return (
        <>
            <div className="div-field">
                <label> Nom complet</label>
                <div className="groups-field">
                    <p>
                        <input type="text" placeholder="Entrer votre nom..." />
                        <span className="span"></span>
                    </p>
                    <p>
                        <input type="text" placeholder="Entrer votre prénom..." />
                        <span className="span"></span>
                    </p>
                </div>
            </div>
            <div className="div-field">
                <label>Pays/Région</label>
                <SelectCountryField />

            </div>
            <div className="div-field">
                <label>Téléphone</label>
                <input type="tel" placeholder="votre téléphone..." />
                <span className="span"></span>
            </div>
            <div className="div-field">
                <label>Email</label>
                <input type="email" placeholder="votre email..." />
                <span className="span"></span>
            </div>
            <div className="div-field">
                <label>Mot de passe</label>
                <div className="groups-field">
                    <p>
                        <input type="password" placeholder="Créer votre mot de passe..." />
                        <span className="span"></span>
                    </p>
                    <p>
                        <input type="password" placeholder="Confirmer votre mot de passe..." />
                        <span className="span"></span>
                    </p>
                </div>
            </div>
            <div className="div-field">
                <p> Définissez votre rôle</p>
                <div className="role">
                    <div className="box-input">
                        <div className={`radio-input ${role=='Achecteur' ? 'radio-select':''}`}
                        onClick={() => setRole("Achecteur")}></div>
                        <label> Acheteur</label>
                    </div>
                    <div className="box-input">
                        <div className={`radio-input ${role=='Vendeur' ? 'radio-select':''}`}
                        onClick={() => setRole("Vendeur")}></div>
                        <label> Vendeur</label>
                    </div>
                    <div className="box-input">
                        <div className={`radio-input ${role=='Achecteur/Vendeur' ? 'radio-select':''}`}
                        onClick={() => setRole("Achecteur/Vendeur")}></div>
                        <label> Acheteur/Vendeur</label>
                    </div>
                </div>
            </div>
            <div className="btn-submit">
                <button type="submit">Soumettre</button>
            </div>
            <p className="text-foot"> En appuyant sur Soumettre, vous accepter notre
                <a href="">&nbsp;Conditions d'utilisation</a> et notre
                <a href="">&nbsp;Politique de confidentialité.</a>
            </p>
        </>
    )
}

export default Register;