import React from "react"

import "./SortPrice.scss"

export const SortPrice = () => {
    
    return (
        <div className="sort-price">
            <span>price</span>
            <input type="text" placeholder="Min_" />
            <span> <FiChevronLeft /> <FiChevronRight /> </span>
            <input type="text" placeholder="Max_" />
        </div>
    )
}