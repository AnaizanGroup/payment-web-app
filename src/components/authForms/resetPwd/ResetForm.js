import React, { useState } from "react"
import { Spinner } from "../../spinner/Spinner"

import '../auth.scss'

const ResetForm = () => {

    const [reset, setReset] = useState(false)

    const handleSubmit = () => {
        setReset(true)
    }
    return (
        <div className="background-form reset-pwd-form">
            <div className="block-form">
                {
                    reset ? (
                        <Spinner />
                    ) : (
                        <form>
                            <p> Bienvenu sur <b>feexmarket</b> </p>
                            <h3 className="title-reset-pwd"
                                style={{ marginBottom: '1.5rem' }}> Réinitialiser votre Mot de passe</h3>
                            <div className="div-field">
                                <label>Nouveau Mot de passe</label>
                                <input type="passwors" placeholder="..." />
                                <span className="span"></span>
                            </div>
                            <div className="div-field">
                                <label>Retaper le Mot de passe</label>
                                <input type="password" placeholder="..." />
                                <span className="span"></span>
                            </div>
                            <div className="btn-submit">
                                <button onClick={handleSubmit} type="submit">Réinitialiser</button>
                            </div>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default ResetForm;