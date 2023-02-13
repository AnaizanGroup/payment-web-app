import React, { useEffect, useState } from "react"
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"

import "./Pagination.scss"

const Pagination = ({ nb, countTab, setNextt, setPrevious, nextt, previous }) => {
    const [page, setPage] = useState()

    const nextPage = () => {
        if (nextt < countTab) {   
            setNextt(nextt+nb)
            setPrevious(previous+nb)
        }
    }

    const previousPage = () => {
        if (previous > 0) {
            setPrevious(previous-nb)
            setNextt(nextt-nb)
        }
    }

    useEffect(() => {
        let n = countTab/nb;
        let nbs= n.toString().split(".")

        if (nbs.length == 2) {
            let nb2 = parseInt(nbs[0])

            setPage((nb2+1))
        } else {
            setPage(countTab/nb)
        }  
    })

    return (
        <div className="pagination2">
            <div className="div-btn-pg">
                <span> {nextt/nb} of {page} </span>
                <div>
                    <button onClick={previousPage}> <FaAngleDoubleLeft /> </button>
                    <span> {nextt/nb} </span>
                    <button onClick={nextPage}> <FaAngleDoubleRight /> </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination