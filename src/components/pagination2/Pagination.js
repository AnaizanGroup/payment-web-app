import React, { useEffect, useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

import "./Pagination.scss"

const Pagination = ({ nb, countTab, setNextt, setPrevious, nextt, previous }) => {


    return (
        <div className="pagination2">
            <div className="div-btn-pg">
                <span> 2 of 10 </span>
                <div>
                    <button > <FaAngleDoubleLeft /> </button>
                    <span> 5 </span>
                    <button > <FaAngleDoubleRight /> </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination