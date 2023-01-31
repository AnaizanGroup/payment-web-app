import React, { useState } from "react"

import "./auth.scss"
import Login from "./login/Login"
import Register from "./register/Register"
import ResetPwd from "./resetPwd/ResetPwd"

const Auth = ({openAuth, formAuth}) => {

    const [form, setForm] = useState(formAuth)

    const renderForm = () => {
        if (form == 0) {
            return <Register />
        } else if (form == 1) {
            return <Login setForm={setForm} />
        } else if (form==2) {
            return <ResetPwd />
        }
    }
    return (
        <div className="background-form">
            <div className="block-form">
                <span onClick={() => openAuth(false)}
                className="close">&times;</span>
                <form>
                    <p> Bienvenu sur <b>FeexMarket</b></p>
                    <div className="btn-tabs"
                        style={form == 2 ? {display: 'none'}:{display: 'flex'}}>
                        <h3 className={`${form == 0 ? 'active-tabs-label':''}` } 
                        onClick={() => setForm(0)}> Inscrivez-vous</h3>
                        <h3 className={`${form == 1 ? 'active-tabs-label':''}` }
                        onClick={() => setForm(1)}> Connectez-vous</h3>
                    </div>
                    {renderForm()}
                </form>
            </div>
        </div>
    )
}

export default Auth;