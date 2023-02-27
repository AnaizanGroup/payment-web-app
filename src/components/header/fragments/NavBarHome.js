import React, {useState, useEffect} from "react"
import 'flag-icon-css/css/flag-icons.min.css'
import axios from "axios"

import { FiChevronDown } from "react-icons/fi"

import "../Header.scss"
import DropCategorie from "../../dropCategorie/DropCategorie"
import { useSelector } from "react-redux"
import { country } from "../../currencyList/countries"

export const NavBarHome = () => {

    const categories = useSelector((state) => state.products.categorie)
    const [codeCountry, setCodeCountry] = useState()
    const [countrys, setCountrys] = useState()
    const [current, setCurrent] = useState()
    const [city, setCity] = useState()

    const showCategorie = () => {
        let drop = document.querySelector(".head-div3")

        if (drop.style.width == "0vh") {
            drop.style.width ="100%"
        }else {
            drop.style.width ="0vh"
        }
    }

    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data)

        let countri = res.data.country_name
        let currency = country.find(
            (item) => item.countryName == countri
        )

        setCurrent(currency.currencyCode)

        setCodeCountry(res.data.country_code.toLowerCase())
        setCountrys(res.data.country_name)
        setCity(res.data.city)
        
        sessionStorage.setItem('code_country', codeCountry)
        sessionStorage.setItem('country', countrys)
        sessionStorage.setItem('city', city)
        sessionStorage.setItem('currency', current)
    }

    useEffect(()=>{
        //passing getData method to the lifecycle method
       getData()
    })

    return(
        <>
            <div className="head-div3">
            <span onClick={showCategorie} className="close-x">&times;</span>
                <div className="div-left">
                    <DropCategorie link={"/categories/products/"} listCategorie={categories} />
                    <li>
                        <a href="" className="link"> Profiter de nos offres </a>
                    </li>
                    <li>
                        <a href="" className="link"> Nos Boutiques </a>
                    </li>
                </div>

                <div className="div-right">
                    <div className="divs">
                        <span className="">  French <FiChevronDown /> </span>
                        <div className="lang">
                            <p>
                                choisissez une langage
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        English
                                    </span>
                                    <FiChevronDown />
                                </div>
                                <div className="child2">
                                    <a href="#">English</a>
                                    <a href="#">French</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar"></div>
                    <div className="divs">
                        <span> <i className={`flag-icon flag-icon-${codeCountry}`}></i> {current} <FiChevronDown /> </span>
                        <div className="lang">
                            <p>Votre pays actuel est bien le <i className={`flag-icon flag-icon-${codeCountry}`}></i> ?
                                sinon choisissez votre pays actuel...
                            </p>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        <i className={`flag-icon flag-icon-${codeCountry}`}></i> Bénin
                                    </span>
                                    <FiChevronDown />
                                </div>
                                <div className="child2">
                                    {country.map((list, index) => {
                                        return <a href="#" key={index}> <i className={`flag-icon flag-icon-${list.countryCode.toLowerCase()}`}></i> {list.countryName} </a>
                                    })}
                                </div>
                            </div>
                            <div className="div-select">
                                <div className="child1">
                                    <span>
                                        <i className={`flag-icon flag-icon-${codeCountry}`}></i> {current}
                                    </span>
                                    <FiChevronDown />
                                </div>
                                <div className="child2">
                                    {country.map((list, index) => {
                                        return <a href="#" key={index}> <i className={`flag-icon flag-icon-${list.countryCode.toLowerCase()}`}></i> {list.currencyCode} </a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}