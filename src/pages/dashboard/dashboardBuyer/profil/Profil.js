import React, { useEffect, useState } from "react"
import { FiDownload, FiEdit, FiEdit2 } from "react-icons/fi"
import { FormAdresse } from "../../../../components/formAdresse/formAdresse"
import { HeadTabs } from "../../../../components/headTab2/HeadTab2"
import { PopupLayout } from "../../../../components/popupLayout/PopupLayout"
import { RadioButton } from "../../../../components/radioButton/RadioButton"
import Select from "../../../../components/select/Select"
import SelectCountryField from "../../../../components/selectCountryField/SelectCountryField"

import "./Profil.scss"

const ProfilBuyer = () => {
    const [role, setRole] = useState('Achecteur')
    const [formAddr, isFormAddr] = useState(false)
    const [popup, isPopup] = useState(false)


    const [names, setNames] = useState(null)
    const [country, setCountry] = useState(null)
    const [code, setCode] = useState(null)
    const [city, setCity] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [phone, setPhone] = useState(null)

    const listSexe = [
        { label: 'Masculin', value: 'Masculin' },
        { label: 'Féminin', value: 'Féminin' }
    ]

    const addr = [
        {
            name: "Jean Hugues HOUINSSOU",
            phone: "+22997970097",
            country: "Bénin",
            code: "bj",
            province: "Cotonou",
            codePostal: "01BP9514",
        },
        {
            name: "Jean Hugues",
            phone: "+22997970097",
            country: "Togo",
            code: "tg",
            province: "Cotonou",
            codePostal: "01BP9514",
        },
    ]

    const editAddr = (n, c, cy, z, p, co) => {
        sessionStorage.setItem("country", c)
        sessionStorage.setItem("code", co)
        isPopup(true)
        setNames(n)
        setCountry(c)
        setCity(cy)
        setZipCode(z)
        setPhone(p)
        setCode(co)
    }

    const newAddr = () => {
        isPopup(true)
        setNames(null)
        setCountry(null)
        setCity(null)
        setZipCode(null)
        setPhone(null)
        setCode(null)
    }

    return (
        <div className="profil-dashboard-buyer">
            <PopupLayout closes={popup}>
                <FormAdresse
                    isPopup={isPopup}
                    n={names}
                    c={country}
                    cy={city}
                    z={zipCode}
                    p={phone}
                    co={code}
                />
            </PopupLayout>
            <HeadTabs title={"Profil"} />
            <div className="block-form">
                <div className="block-div1">
                    <div className="div1">
                        <form>
                            <h3 className="title-h3"> Information Personnel </h3>
                            <div className="div-input">
                                <p>
                                    <label> Nom et Prénom* </label>
                                    <input type="text" name="" placeholder="..." />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Sexe* </label>
                                    <Select listOption={listSexe} />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Pays actuel*</label>
                                    <SelectCountryField />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label>Ville*</label>
                                    <input type="text" name="" placeholder="..." />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Zip Code/ Code postale*</label>
                                    <input type="text" placeholder="" />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Photo de profile*</label>
                                    <div className="file-img">
                                        <FiDownload />
                                        <span> Sélectionner un fichier </span>
                                        <input type="file" name="file" />
                                    </div>
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <button className="btn-update"> Mettre à jour </button>
                        </form>
                    </div>
                    <div className="bars"></div>
                    <div className="div2">
                        <form>
                            <h3 className="title-h3"> Information de compte </h3>
                            <div className="div-input">
                                <p>
                                    <label> email* </label>
                                    <input type="text" name="" placeholder="..." />
                                </p>
                                <span className="span-error"></span>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Je sui un </label>
                                    <RadioButton role={role} setRole={setRole} />
                                </p>
                            </div>
                            <div className="div-input">
                                <p>
                                    <label> Changer de Mot de passe </label>
                                    <button className="btn-click"> Cliquer ici</button>
                                    <div className="change-pwd-div">
                                        <form>
                                            <input type="password" placeholder="Nouveau Mot de passe" />
                                            <input type="password" placeholder="Confirmer " />
                                            <button> Appliquer</button>
                                        </form>
                                    </div>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="block-div2">
                <h3 className="title-h3"> Mes adresse de livraison</h3>
                <div className="block-div-addr">
                    <div className="div-addrs">
                        {addr.lenght != 0 ? (
                            addr.map((list, index) => {
                                return (
                                    <>
                                        <div className="addr" key={index}>
                                            <div>
                                                <p> <b> {list.name} </b> </p>
                                                <p> {list.phone} </p>
                                                <p> {list.country}, {list.province}, {list.codePostal} </p>
                                            </div>
                                            <button
                                                onClick={() => editAddr(
                                                    list.name,
                                                    list.country,
                                                    list.province,
                                                    list.codePostal,
                                                    list.phone,
                                                    list.code
                                                )}
                                            > <FiEdit /> Modifier </button>
                                        </div>
                                    </>
                                )
                            })
                        ) : (
                            <p> Aucun adresse</p>
                        )
                        }
                    </div>
                    <button
                        onClick={newAddr}
                        className="btn-add-addr"> Ajouter une nouvelle adresse </button>
                </div>
            </div>
        </div>
    )
}

export default ProfilBuyer;