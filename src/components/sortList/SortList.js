import React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import Select from "../select/Select"

import "./SortList.scss"

export const SortList = () => {

    const listOption1 = [
        { label: 'Tout' },
        { label: 'Les plus vendus', value: '' },
        { label: 'Moins chère', value: '' },
        { label: 'En promotion', value: '' },
    ]

    const listOption2 = [
        { label: 'Tout' },
        { label: 'Homme' },
        { label: 'Femme' },
        { label: 'Enfant' },
    ]

    const listOptionTaille = [
        { label: 'Tout' },
        { label: 'SM' },
        { label: 'M' },
        { label: 'X' },
        { label: 'Xl' },
        { label: 'lg' },
    ]

    return (
        <>
            <div className="sort-lists">
                <Select listOption={listOption1} defaultText={'Trier par'}
                    id={1} />

                <Select listOption={listOption2} defaultText={'Homme'}
                    id={2} />
                <Select listOption={listOptionTaille} defaultText={'Taille'}
                    id={3} />
                <div className="sort-price">
                    <span>price</span>
                    <input type="text" placeholder="Min_" />
                    <span> <FiChevronLeft /> <FiChevronRight /> </span>
                    <input type="text" placeholder="Max_" />
                </div>
            </div>
        </>
    )
}