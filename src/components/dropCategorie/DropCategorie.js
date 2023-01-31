import React from "react"
import { FiChevronDown } from "react-icons/fi"
import { VscListSelection } from "react-icons/vsc"

import "./DropCategorie.scss"

const DropCategorie = ({ listCategorie }) => {

    const goCategorieProductPage = (nameCat, index) => {
        sessionStorage.setItem('nameCat', nameCat)
        sessionStorage.setItem('indexCat', index)
        window.location.href=`/categories/products/${nameCat}`;
    }

    return (
        <li className="li-drop-cat">
            <VscListSelection />
            Catégories <FiChevronDown />
            <li className="box-categorie">
                {
                    listCategorie.map(({ nameCat }, index) => {
                        return <li key={index} onClick={() => goCategorieProductPage(nameCat,index)}>
                            {nameCat}
                        </li>
                    })
                }
            </li>
        </li>
    )
}

export default DropCategorie