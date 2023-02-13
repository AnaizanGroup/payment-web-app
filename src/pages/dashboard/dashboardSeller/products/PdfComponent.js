import React from "react"
import { FiEdit3, FiTrash2 } from "react-icons/fi"

const PDFComponent = ({ allList, searchList }) => {
    return (
        <>
            <table className="table-data" >
                <thead>
                    
                    <tr>
                        <th> Id Produit </th>
                        <th> Nom Produit </th>
                        <th> Catégorie </th>
                        <th> Prix unité (XOF) </th>
                        <th> Stocks Initiale</th>
                        <th> Stocks Actuel </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allList && (
                            allList.map((list, index) => {
                                return <tr key={index}>
                                    <td> {list.idProduct} </td>
                                    <td> {list.nameProduct} </td>
                                    <td> {list.categorie} </td>
                                    <td> {list.priceUnit} </td>
                                    <td> {list.stockInit} </td>
                                    <td> {list.stockActuel} </td>

                                </tr>
                            })
                        )


                    }
                </tbody>
            </table>
        </>
    )
}

export default PDFComponent;