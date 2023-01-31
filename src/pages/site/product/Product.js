import React, { useEffect, useState } from "react";
import { FaChevronRight, FaHeart, FaCartPlus } from "react-icons/fa";
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronsRight, FiShoppingBag } from "react-icons/fi"
import "@fortawesome/free-solid-svg-icons"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "../../../settings/constant";

import 'flag-icon-css/css/flag-icons.min.css'
import "./Product.scss";

import Select from "../../../components/select/Select";
import BoxCategorie from "../../../components/boxCategorie/BoxCategorie";
import Pagination from "../../../components/pagination/Pagination";

import CardProducts from "../../../components/cardProducts/CardProducts";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [nameCat, setNameCat] = useState(location.state)
    const [prodName, setNameProd] = useState()

    const products = useSelector((state) => state.products.products)

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

    const categories = useSelector((state) => state.products.categorie)

    useEffect(() => {
    }, [nameCat])

    const setCategorie = (index, index2, nameCat, product) => {
        navigate('/categories/products/' + nameCat + '?' + product)

        sessionStorage.setItem("indexCat", index)
        sessionStorage.setItem("nameCat", nameCat)
        sessionStorage.setItem("nameProd", product)

        let allSpan = document.querySelectorAll(".span-label"),
            allLi = document.querySelectorAll(".li-cat-product");
          
        for (var i=0; i<allSpan.length; i++) {
            allSpan[i].classList.remove("active-categorie")
        }

        for (var i=0; i<allLi.lenght; i++) {
            alert (allLi[i].innerText)
            allLi[i].classList.remove("active-sublink")
            if (allLi[i].innerText == product) {
                allLi[i].classList.add("active-sublink")
            }
        }
      
        allSpan[index].classList.add("active-categorie")

        setNameCat(sessionStorage.getItem("nameCat"))
        setNameProd(sessionStorage.getItem("nameProd"))

        window.location.reload()
    }


    return (
        <div className="product-page">
            <div className="head-page">
                <span>
                    Catégories <FiChevronRight />
                    {nameCat} {nameCat ? <FiChevronsRight /> : ''}
                    {prodName}
                </span>
            </div>
            <div className="box">
                <BoxCategorie setNameCat={setNameCat}
                    setNameProd={setNameProd}
                    listCategorie={categories} />
                <div className="content-product">
                    <p>

                    </p>
                    <div className="head">
                        <div className="sort-div">
                            <div className="select-categorie">
                                <span>
                                    <span className="opt">categorie </span>
                                    <FiChevronDown />
                                </span>
                                <div className="options-categorie"
                                   /*  style={!showOption ? { display: 'none' } : { display: 'block' }} */>
                                    <span /* onClick={() => setShowOptions(false)}  */className="close">&times;</span>
                                    {
                                        categories.map(({ nameCat, items }, index1) => {
                                            return <li key={index1}
                                                className="li-categorie-box"> 
                                                    <span className="span-label"> {nameCat} <FiChevronRight /> </span>
                                                    {items && (
                                                        <ul className="item-cat ">
                                                            {items.map((list, index2) => {
                                                                return <li onClick={() => setCategorie(index1, index2, nameCat, list.type)} 
                                                                className="before-class-style li-cat-product" key={index2}> {list.type} </li>
                                                            })}
                                                        </ul>
                                                    )}
                                                 </li>
                                        })
                                    }
                                </div>
                            </div>
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

                            <div className="div-btns">
                                <a></a>
                            </div>
                        </div>
                        <div className="sort-div2">
                            <div className="card-choice">

                            </div>
                        </div>
                    </div>
                    <div className="box-product">
                        <div className="head-prod">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="div-products">
                            <CardProducts listProduct={products} />
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Product;