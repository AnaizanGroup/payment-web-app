import React, { useState } from "react"

import { FaPrint, FaSearch } from "react-icons/fa"
import "./SearchBar.scss"

const SearchBar = ({placeholderText }) => {
    
    const [keyword, setKeyword] = useState("")

    const handleChange = () => {
    
    }
    return (
        <>
            <div className="searchbar">
                <button className="btn_print"> <FaPrint /> Print </button>
                <div className="bar">
                    <FaSearch />
                    <input type="text" name="keyword"
                    placeholder={placeholderText} />
                </div>
            </div>
        </>
    )
}

export default SearchBar;