import React from "react"


const ResetPwd = () => {
    return (
        <>
        <h3 className="title-reset-pwd"> Réinitialiser votre Mot de passe</h3>
            <div className="div-field reset-pwd-email">
                <label>Renseigner votre email</label>
                <input type="email" placeholder="votre email..." />
                <span className="span"></span>
            </div>
            <div className="btn-submit">
                <button type="submit">Continuer</button>
            </div>
        </>
    )
}

export default ResetPwd;