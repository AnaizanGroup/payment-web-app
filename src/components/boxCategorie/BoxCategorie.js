import React, { useEffect } from "react"
import { FiChevronDown, FiChevronRight, FiChevronsDown } from "react-icons/fi"
import { Link, useLocation, useNavigate } from "react-router-dom"

import "./BoxCategorie.scss"

const BoxCategorie = ({ listCategorie, setNameCat, setNameProd }) => {
    const navigate = useNavigate()

    const showSublink = (index, nameCat) => {
        setNameProd(null)
        sessionStorage.removeItem('nameProd')
        sessionStorage.setItem('nameCat', nameCat)
        sessionStorage.setItem('indexCat', index)

        let all = document.querySelectorAll(".sublink-div");
        let span = document.querySelectorAll(".span");

        for(var i = 0; i<all.length; i++) {
            all[i].classList.remove("show")
            span[i].classList.remove("active")
        }
        if (all[index].className.split(" ").length == 2) {
            all[index].classList.remove("show")
            span[index].classList.remove("active")
        } else { 
            span[index].classList.add("active")
            all[index].classList.add("show")
        }
    }

    const activeSublink = (type) => {
        let all = document.querySelectorAll('.list-categorie .sublinks')
        // sessionStorage.setItem('active-sublink', index)

        for (var i = 0; i < all.length; i++) {
            all[i].classList.remove('active-sublink')
            if (all[i].innerText == type) {
                all[i].classList.add('active-sublink')
            }
        }
    }

    const searchProduct = (nameCat, product) => {
        sessionStorage.setItem('nameProd', product)
        sessionStorage.setItem('nameCat', nameCat)

        activeSublink(product)

        navigate('/categories/products/' + nameCat + '?' + product)
    }

    useEffect(() => {
        if (sessionStorage.getItem('nameCat')) {
            setNameCat(sessionStorage.getItem('nameCat'))
        }

        if (sessionStorage.getItem('nameProd')) {
            setNameProd(sessionStorage.getItem('nameProd'))
        }

        let prod = sessionStorage.getItem("nameProd"),
            index = sessionStorage.getItem("indexCat");

        let all = document.querySelectorAll(".sublink-div");
        let span = document.querySelectorAll(".span");

        if (prod) {
            activeSublink(prod)
        } 
        if (index) {
            span[index].classList.add("active")
            all[index].classList.add("show")
        } 
    })


    return (
        <div className="categorie-box" id="box">
            <h3> &nbsp;&nbsp;Catégories <FiChevronDown /> </h3>
            <div className="list-categorie">
                {
                    listCategorie && (listCategorie.map(({ nameCat, items }, index) => {
                        return <div key={index} className="parent-cat">
                            <Link style={{ color: 'var(--dark)' }}
                                to={{ pathname: `/categories/products/${nameCat}` }}>
                                <span
                                    className="span"
                                    onClick={() => showSublink(index, nameCat)}
                                > {nameCat} <i className="svg">
                                    {sessionStorage.getItem("indexCat") == index ? <FiChevronDown />:<FiChevronRight /> }
                                    </i> </span>
                            </Link>
                            <div className="sublink-div">
                                {items && (
                                    items.map(({ type }, index2) => {
                                        return <li className="sublinks" key={index2} onClick={() => searchProduct(nameCat, type)}>
                                            {type}
                                        </li>
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