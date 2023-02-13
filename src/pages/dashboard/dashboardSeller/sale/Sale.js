import React, { useEffect, useState } from "react"
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import { HeadTabs } from "../../../../components/headTabs/HeadTabs"
import Pagination from "../../../../components/pagination2/Pagination"
import SearchBar from "../../../../components/searchBar2/SearchBar"

import "./Sale.scss"

const Sale = () => {
    const [searchWord, setSearchWord] = useState("")
    const [startNbPage, setStartNbPage] = useState(5)
    const [nextPage, setNextPage] = useState(startNbPage)
    const [previouspage, setPreviousPage] = useState(0)
    const [resultSearch, setResultSearch] = useState([])

    const allSale = [
        {
            idSale: '12372',
            buyerName: 'Jean Hugues',
            products: 'Sous vêtements homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'en cour',
        },
        {
            idSale: '12',
            buyerName: 'Jean Hugues Houinssou',
            products: 'homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'tout',
            statusDelivr: 'délivré',
        },
        {
            idSale: '13',
            buyerName: 'Martial',
            products: 'Femme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'terminé',
            statusDelivr: 'en cour',
        },
        {
            idSale: '14',
            buyerName: 'Sam',
            products: 'Jean',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'terminé',
        },
        {
            idSale: '15',
            buyerName: 'Jean Hugues',
            products: 'Jean',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'terminé',
            statusDelivr: 'en cour',
        },
        {
            idSale: '12372',
            buyerName: 'Jean Hugues',
            products: 'Sous vêtements homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'en cour',
        },
        {
            idSale: '12372',
            buyerName: 'Jean Hugues',
            products: 'Sous vêtements homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'en cour',
        },
        {
            idSale: '12',
            buyerName: 'Jean Hugues Houinssou',
            products: 'homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'tout',
            statusDelivr: 'délivré',
        },
        {
            idSale: '13',
            buyerName: 'Martial',
            products: 'Femme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'terminé',
            statusDelivr: 'en cour',
        },
        {
            idSale: '14',
            buyerName: 'Sam',
            products: 'Jean',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'terminé',
        },
        {
            idSale: '15',
            buyerName: 'Jean Hugues',
            products: 'Jean',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'terminé',
            statusDelivr: 'en cour',
        },
        {
            idSale: '12372',
            buyerName: 'Jean Hugues',
            products: 'Sous vêtements homme',
            price: 27,
            paye: 0,
            nonPaye: 0,
            statusPay: 'partiel',
            statusDelivr: 'en cour',
        },
    ]

    const [sales, setSales] = useState(allSale.length != 0 ? allSale : [])

    /* const search = async () => {
        if (searchWord) {
            const tab = allSale.filter(
                (item) => searchWord == item.idSale || searchWord == item.buyerName
                    || searchWord == item.statusPay || searchWord == item.statusDelivr
            )

            if (tab.length != 0) {
                console.log(tab)
                setSales(tab)
            } else {
                setSales(allSale)
            }
        } 
    } */

    const search = async () => {
        if (searchWord) {
            const tab = allSale.filter(
                (item) => searchWord == item.idSale || searchWord == item.buyerName
                    || searchWord == item.statusPay || searchWord == item.statusDelivr
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
        <div className="sale-dashboard-buyer">
            <HeadTabs title={"Mes Ventes"} />
            <div className="sale parent">
                <div className="child">
                    <SearchBar placeholderText="Rechercher par idVente, acheteur et les status"
                        searchWord={searchWord} allList={allSale}
                        setList={setResultSearch}
                        setWord={setSearchWord} />
                    <table className="table-data">
                        <thead>
                            <tr>
                                <th> Id vente </th>
                                <th> Nom Acheteur </th>
                                <th> Produits </th>
                                <th> Prix Total (XOF) </th>
                                <th> Status payement</th>
                                <th> Status livraison </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resultSearch.length == 0 ? (
                                    allSale && (
                                        allSale.map((list, index) => {
                                            if (previouspage <= index && (nextPage - 1) >= index) {
                                                return <tr key={index}>
                                                    <td> {list.idSale} </td>
                                                    <td> {list.buyerName} </td>
                                                    <td> {list.products} </td>
                                                    <td> {list.price} </td>
                                                    <td> {list.statusPay} </td>
                                                    <td> {list.statusDelivr} </td>
                                                    <td>
                                                        <button> <FiTrash2 /> </button>
                                                    </td>
                                                </tr>
                                            }
                                        })
                                    )
                                ) : (
                                    resultSearch.map((list, index) => {
                                        return <tr key={index}>
                                            <td> {list.idSale} </td>
                                            <td> {list.buyerName} </td>
                                            <td> {list.products} </td>
                                            <td> {list.price} </td>
                                            <td> {list.statusPay} </td>
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
                    {resultSearch.length == 0 ? (
                        <Pagination nb={startNbPage}
                            countTab={allSale.length}
                            setNextt={setNextPage}
                            setPrevious={setPreviousPage}
                            nextt={nextPage}
                            previous={previouspage} />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Sale;