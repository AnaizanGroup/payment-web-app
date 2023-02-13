import React, { useEffect, useState } from "react"

import { FaPrint, FaSearch } from "react-icons/fa"
import "./SearchBar.scss"

const SearchBar = ({ placeholderText, setWord,
    searchWord, allList, setList, handlePrint }) => {
    const [keyword, setKeyword] = useState("")

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    const key = () => {
        if (keyword.length > 0) {
            setWord(keyword)
        }
    }


    return (
        <>
            <div className="searchbar">
                <p>
                    <button className="btn_print"
                        onClick={handlePrint} > <FaPrint /> Imprimer </button>
                </p>
                <div className="bar">
                    <FaSearch />
                    <input type="text" name="keyword"
                        placeholder={placeholderText}
                        value={keyword}
                        onChange={handleChange}
                        onKeyUp={key} />
                </div>
            </div>
        </>
    )
}

export default SearchBar;