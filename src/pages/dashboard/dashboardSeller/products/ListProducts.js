import React, { useEffect, useRef, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { HeadTabs } from "../../../../components/headTabs/HeadTabs"
import Pagination from "../../../../components/pagination2/Pagination"
import SearchBar from "../../../../components/searchBar2/SearchBar"
import { DASHBOARD_SELLER_ADD_PRODUCTS } from "../../../../settings/constant"
import { useReactToPrint } from "react-to-print"

import "./products.scss"
import PDFComponent from "./PdfComponent"

const ListProduct = () => {
    const navigate = useNavigate()
    const [searchWord, setSearchWord] = useState("")
    const [startNbPage, setStartNbPage] = useState(4)
    const [nextPage, setNextPage] = useState(startNbPage)
    const [previouspage, setPreviousPage] = useState(0)
    const [resultSearch, setResultSearch] = useState([])


    const allProducts = [

        {
            idProduct: '1',
            nameProduct: 'Laptops',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '2',
            nameProduct: 'Laptop',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '1',
            nameProduct: 'Laptops',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '2',
            nameProduct: 'Laptop',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '1',
            nameProduct: 'Laptops',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '2',
            nameProduct: 'Laptop',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '1',
            nameProduct: 'Laptops',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '2',
            nameProduct: 'Laptop',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '1',
            nameProduct: 'Laptops',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },
        {
            idProduct: '2',
            nameProduct: 'Laptop',
            categorie: 'Informatique et Logicièls',
            priceUnit: '200000',
            stockInit: 20,
            stockActuel: 20,
        },

    ]

    const [products, setProducts] = useState(allProducts.length != 0 ? allProducts : [])

    const search = async () => {
        if (searchWord) {
            const tab = allProducts.filter(
                (item) => searchWord == item.idProduct || searchWord == item.nameProduct
                    || searchWord == item.categorie
            )

            if (tab.length != 0) {
                console.log(tab)
                setResultSearch(tab)
            } else {
                setResultSearch([])
            }
        }
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    useEffect(() => {
        search()
    }, [searchWord])

    return (
        <div className="product-dashboard-buyer">
            <HeadTabs title={" Liste des Produits"} />
            <div className="product-box parent">
                <div className="btn-add-product">
                    <p> Aucun produits disponible. </p>
                    <button
                        onClick={() => navigate(DASHBOARD_SELLER_ADD_PRODUCTS)}> <FaPlus /> Nouveau produit </button>
                </div>
                <div className="list-product child">

                    {
                        allProducts.length != 0 ? (
                            <>
                                <SearchBar placeholderText="Rechercher par idProduct, nom Product et categorie"
                                    searchWord={searchWord} allList={allProducts}
                                    setList={setResultSearch}
                                    setWord={setSearchWord}
                                    handlePrint={handlePrint} />
                                    {/* <div  ref={componentRef}>
                                    <PDFComponent ref={componentRef} allList={allProducts} />
                                    </div> */}
                                <table className="table-data" ref={componentRef}>
                                    <thead>
                                        <tr>
                                            <th> Id Produit </th>
                                            <th> Nom Produit </th>
                                            <th> Catégorie </th>
                                            <th> Prix unité (XOF) </th>
                                            <th> Stocks Initiale</th>
                                            <th> Stocks Actuel </th>
                                            <th> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            resultSearch.length == 0 ? (
                                                allProducts && (
                                                    allProducts.map((list, index) => {
                                                        if (previouspage <= index && (nextPage - 1) >= index) {
                                                            return <tr key={index}>
                                                                <td> {list.idProduct} </td>
                                                                <td> {list.nameProduct} </td>
                                                                <td> {list.categorie} </td>
                                                                <td> {list.priceUnit} </td>
                                                                <td> {list.stockInit} </td>
                                                                <td> {list.stockActuel} </td>
                                                                <td>
                                                                    <button> <FiEdit3 /> Publier </button>
                                                                    <button> <FiEdit3 /> Modifier </button>
                                                                    <button> <FiTrash2 /> Supprimer </button>
                                                                </td>
                                                            </tr>
                                                        }
                                                    })
                                                )
                                            ) : (
                                                resultSearch.map((list, index) => {
                                                    return <tr key={index}>
                                                        <td> {list.idProduct} </td>
                                                        <td> {list.nameProduct} </td>
                                                        <td> {list.categorie} </td>
                                                        <td> {list.priceUnit} </td>
                                                        <td> {list.stockInit} </td>
                                                        <td> {list.stockActuel} </td>
                                                        <td>
                                                            <button> <FiEdit3 /> Publier </button>
                                                            <button> <FiEdit3 /> Modifier </button>
                                                            <button> <FiTrash2 /> Supprimer </button>
                                                        </td>
                                                    </tr>
                                                })
                                            )

                                        }
                                    </tbody>
                                </table>
                                {resultSearch.length == 0 ? (
                                    <Pagination nb={startNbPage}
                                        countTab={allProducts.length}
                                        setNextt={setNextPage}
                                        setPrevious={setPreviousPage}
                                        nextt={nextPage}
                                        previous={previouspage} />
                                ) : null}
                            </>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProduct;