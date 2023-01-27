import React, {useEffect} from "react"
import { FiChevronDown, FiChevronRight } from "react-icons/fi"
import { Link } from "react-router-dom"

import "./BoxCategorie.scss"

const BoxCategorie = ({listCategorie}) => {

    const showSublink = (index) => {
        let all = document.querySelectorAll(".sublink-div");
        let span = document.querySelectorAll(".span");

        if (all[index].className.split(" ").length == 2) {
            all[index].classList.remove("show")
            span[index].classList.remove("active")
        } else {
            span[index].classList.add("active")
            all[index].classList.add("show")
        }
    }

    useEffect (() => {
     
    })


    return (
        <div className="categorie-box" id="box">
            <h3> &nbsp;&nbsp;Catégories <FiChevronDown /> </h3>
            <div className="list-categorie">
                {
                    listCategorie && (listCategorie.map(({ nameCat, items }, index) => {
                        return <div key={index} className="parent-cat">
                            <span
                                className="span"
                                onClick={() => showSublink(index)}
                            > {nameCat} <i className="svg">
                                    <FiChevronRight />
                                </i> </span>
                            <div className="sublink-div">
                                {items && (
                                    items.map((list, index2) => {
                                        return <Link key={index2} to={{ pathname: `/product/${list.type}` }}>
                                            {list.type}
                                        </Link>
                                    })
                                )}
                            </div>
                        </div>
                    }))
                }
            </div>
        </div>
    )
}

export default BoxCategorie