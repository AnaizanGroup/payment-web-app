import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { FiLogOut, FiMessageSquare } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { DASHBOARD_SELLER_MESSAGE } from "../../settings/constant"
import "./HeadTabs.scss"

export const HeadTabs = ({title}) => {
    const navigate = useNavigate()

    return (
        <h2 className="title-tabs">
            {title}
            <p>
                <button onClick={() => navigate(DASHBOARD_SELLER_MESSAGE)}> 
                <FaEnvelope /> <span>0</span> </button>
                <button> <FiLogOut /> Deconnexion </button>
            </p>
        </h2>
    )
}