import React from "react"
import { FiEdit3, FiTrash2 } from "react-icons/fi"
import Pagination from "../../../../components/pagination2/Pagination"
import SearchBar from "../../../../components/searchBar2/SearchBar"

import "./Order.scss"

const Order = () => {

    const allOrder = [
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
        },
        {
            idOrder: '12372',
            seller: 'LVM Shop',
            products: 'Sous vêtements homme',
            price: 2732,
            statusDelivr: 'en attente',
        }
    ]


    return (
        <div className="order-dashboard-buyer">
            <h2 className='title-tabs'> Mes Commandes </h2>
            <div className="orders">
                <SearchBar placeholderText="Rechercher ici" />
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
                            allOrder && (
                                allOrder.map ((list, index) => {
                                    return <tr key={index}>
                                            <td> {list.idOrder} </td>
                                            <td> {list.seller} </td>
                                            <td> {list.products} </td>
                                            <td> {list.price} </td>
                                            <td> {list.statusDelivr} </td>
                                            <td> 
                                                <button> <FiEdit3 /> </button>    
                                                <button> <FiTrash2 /> </button>    
                                            </td>
                                        </tr>
                                })
                            )
                        }
                    </tbody>
                </table>
                <Pagination />
            </div>
        </div>
    )
}

export default Order;