import React, { useEffect, useRef, useState } from "react"
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import { HeadTabs } from "../../../../components/headTabs/HeadTabs";
import Pagination from "../../../../components/pagination2/Pagination";
import SearchBar from "../../../../components/searchBar2/SearchBar";

import "./products.scss"

const Cobeille = () => {
    const [searchWord, setSearchWord] = useState("")
    const [startNbPage, setStartNbPage] = useState(4)
    const [nextPage, setNextPage] = useState(startNbPage)
    const [previouspage, setPreviousPage] = useState(0)
    const [resultSearch, setResultSearch] = useState([])


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })
    const cobeille = [

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

    const [products, setProducts] = useState(cobeille.length != 0 ? cobeille : [])

    const search = async () => {
        if (searchWord) {
            const tab = cobeille.filter(
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

    useEffect(() => {
        search()
    }, [searchWord])

    return (
        <div className="cobeille-product">
            <HeadTabs title={"Cobeille des produit"} />
            <div className="block-parent parent">
                <div className="list-product child">

                    {
                        cobeille.length != 0 ? (
                            <>
                                <SearchBar placeholderText="Rechercher par idProduct, nom Product et categorie"
                                    searchWord={searchWord} allList={cobeille}
                                    setList={setResultSearch}
                                    setWord={setSearchWord}
                                    handlePrint={handlePrint} />
                                <table className="table-data">
                                    <thead>
                                        <tr>
                                            <th> Id Produit </th>
                                            <th> Nom Produit </th>
                                            <th> Catégorie </th>
                                            <th> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cobeille && (
                                                cobeille.map((list, index) => {
                                                    return <tr key={index}>
                                                        <td> {list.idProduct} </td>
                                                        <td> {list.nameProduct} </td>
                                                        <td> {list.categorie} </td>
                                                        <td>
                                                            <button> <FaTrashRestoreAlt /> Restaurer </button>
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
                                        countTab={cobeille.length}
                                        setNextt={setNextPage}
                                        setPrevious={setPreviousPage}
                                        nextt={nextPage}
                                        previous={previouspage} />
                                ) : null}
                            </>
                        ) : <p> Cobeille vide </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cobeille;