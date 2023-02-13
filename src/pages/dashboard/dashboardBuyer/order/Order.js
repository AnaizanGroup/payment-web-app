import React, { useEffect, useRef, useState } from "react"
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useReactToPrint } from "react-to-print"
import { HeadTabs } from "../../../../components/headTab2/HeadTab2"
import Pagination from "../../../../components/pagination2/Pagination"
import SearchBar from "../../../../components/searchBar2/SearchBar"

import "./Order.scss"

const Order = () => {

    const navigate = useNavigate()
    const [searchWord, setSearchWord] = useState("")
    const [startNbPage, setStartNbPage] = useState(5)
    const [nextPage, setNextPage] = useState(startNbPage)
    const [previouspage, setPreviousPage] = useState(0)
    const [resultSearch, setResultSearch] = useState([])

    const allOrder = [
        {
            idOrder: '12',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        }
    ]

    const search = async () => {
        if (searchWord) {
            const tab = allOrder.filter(
                (item) => searchWord == item.idOrder || searchWord == item.seller
                    || searchWord == item.statusDelivr
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
        <div className="order-dashboard-buyer">
            <HeadTabs title={"Mes Commandes"} />
            <div className="orders parent">
                <SearchBar placeholderText="Rechercher par idProduct, nom Product et categorie"
                    searchWord={searchWord} allList={allOrder}
                    setList={setResultSearch}
                    setWord={setSearchWord}
                    handlePrint={handlePrint} />
                <div className="table">
                    <table className="table-data">
                        <thead>
                            <tr>
                                <th> Id Commande </th>
                                <th> Vendeur </th>
                                <th> Products </th>
                                <th> Prix Total (XOF) </th>
                                <th> Status livraison </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                resultSearch.length == 0 ? (
                                    allOrder && (
                                        allOrder.map((list, index) => {
                                            if (previouspage <= index && (nextPage - 1) >= index) {
                                                return <tr key={index}>
                                                    <td> {list.idOrder} </td>
                                                    <td> {list.seller} </td>
                                                    <td> {list.products} </td>
                                                    <td> {list.price} </td>
                                                    <td> {list.statusDelivr} </td>
                                                    <td>
                                                        <button> <FiTrash2 /> </button>
                                                    </td>
                                                </tr>
                                            }
                                        })
                                    )) : (
                                    resultSearch.map((list, index) => {
                                        return <tr key={index}>
                                            <td> {list.idOrder} </td>
                                            <td> {list.seller} </td>
                                            <td> {list.products} </td>
                                            <td> {list.price} </td>
                                            <td> {list.statusDelivr} </td>
                                            <td>
                                                <button> <FiTrash2 /> </button>
                                            </td>
                                        </tr>
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>
                {resultSearch.length == 0 ? (
                    <Pagination nb={startNbPage}
                        countTab={allOrder.length}
                        setNextt={setNextPage}
                        setPrevious={setPreviousPage}
                        nextt={nextPage}
                        previous={previouspage} />
                ) : null}
            </div>
        </div>
    )
}

export default Order;