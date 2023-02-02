import react from "react"

import "../Header.scss"

export const SearchBar = () => {
    return (
        <>
            <form className="form-search">
                <select className="">
                    <option value="">Produit</option>
                    <option value="">Vendeur</option>
                </select>
                <input type="search" name="keyword" id="" placeholder="Rechercher vos produits ici" />
                <button type="submit"> Rechercher </button>
            </form>
        </>
    )
}