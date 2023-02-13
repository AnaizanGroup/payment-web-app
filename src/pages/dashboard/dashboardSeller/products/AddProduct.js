import React, { useState } from "react"
import { FaCheck, FaPlus } from "react-icons/fa";
import { FiCheck, FiChevronDown, FiChevronRight, FiDownload, FiImage } from "react-icons/fi";
import { Checkbox } from "../../../../components/checkBox/CheckBox";

import "./products.scss"

const AddProduct = () => {

    const [nb, setNb] = useState(1)
    const [momo, setMomo] = useState()
    const [moov, setMoov] = useState()
    const [visa, setVisa] = useState()
    const [masterCard, setMasterCard] = useState()

    const categorie = ["Vêtements", "Santé et Beauté", "Agriculture",
        "Informatique et logicièls", "Construction et immobilier",
        "Electronique grand public", "Produist Chimique", "Fourniture d'équipement électrique",
        "Energie", "Environnement", "Nouriture et boisson",
        "Meuble", "Santé et Médécine", "Maison et Jardin", "Appareils ménagers",
        "Lumières et Eclairage", "Sacs", "Instruments de mesure et d'analyse",
        "Minéraux & Métallurgie", "Fournitures de bureau",
        "Chaussures et Accessoires pour chaussure", "Sports et divertissement",
        "Télécommunication", "Produit textile", "Montres, bijoux et lunettes",
        "Jouets et loisirs", 'Transport']

    const categories = [
        {
            categorie: "Vêtements",
            subCategorie: [
                {
                    subCat: "Vêtements pour Femme",
                    items: [
                        { item: "Robes de nuits" },
                        { item: "Robes de soiré" },
                        { item: "Robes de sortie" },
                        { item: "Autres Robes " },
                        { item: "Jeans" },
                        { item: "Chemisier" },
                        { item: "Robes de nuits" },
                        { item: "T-shirts" },
                        { item: "Pantalon" },
                        { item: "Veste" },
                        { item: "Shorts" },
                        { item: "Jogging" },
                        { item: "Sous-vêtements" },
                        { item: "Robes de nuits" },
                        { item: "Pull" },
                    ]
                },
                {
                    subCat: "Vêtements pour Homme",
                    items: [
                        { item: "Jeans" },
                        { item: "Chemisier" },
                        { item: "T-shirts" },
                        { item: "Pantalon" },
                        { item: "Veste" },
                        { item: "Shorts" },
                        { item: "Jogging" },
                        { item: "Sous-vêtements" },
                        { item: "Pull" },
                        { item: "Pull" },
                    ]
                },
                { subCat: "Vêtements pour Enfant" },
                { subCat: "Meanteau" },
                { subCat: "Vêtements ethniques" },
                { subCat: "Jeans" },
                { subCat: "Veste" },
                { subCat: "Chemise" },
            ]
        },
        {
            categorie: "Beauté et soins",
        },
        {
            categorie: "Informatiques et logicièls",
        },
        {
            categorie: "Construction et immobilier",
        },
        {
            categorie: "Vêtements",
            subCategorie: [
                {
                    subCat: "Vêtements pour Femme",
                    items: [
                        { item: "Robes de nuits" },
                        { item: "Robes de soiré" },
                        { item: "Robes de sortie" },
                        { item: "Autres Robes " },
                        { item: "Jeans" },
                        { item: "Chemisier" },
                        { item: "Robes de nuits" },
                        { item: "T-shirts" },
                        { item: "Pantalon" },
                        { item: "Veste" },
                        { item: "Shorts" },
                        { item: "Jogging" },
                        { item: "Sous-vêtements" },
                        { item: "Robes de nuits" },
                        { item: "Pull" },
                    ]
                },
                {
                    subCat: "Vêtements pour Homme",
                    items: [
                        { item: "Jeans" },
                        { item: "Chemisier" },
                        { item: "T-shirts" },
                        { item: "Pantalon" },
                        { item: "Veste" },
                        { item: "Shorts" },
                        { item: "Jogging" },
                        { item: "Sous-vêtements" },
                        { item: "Pull" },
                        { item: "Pull" },
                    ]
                },
                { subCat: "Vêtements pour Enfant" },
                { subCat: "Meanteau" },
                { subCat: "Vêtements ethniques" },
                { subCat: "Jeans" },
                { subCat: "Veste" },
                { subCat: "Chemise" },
            ]
        },
        {
            categorie: "Beauté et soins",
        },
        {
            categorie: "Informatiques et logicièls",
        },
        {
            categorie: "Construction et immobilier",
        },

    ]

    
    return (
        <div className="add-product-form">
            <h2 className="title-tabs"> Nouveau Product</h2>
            <div className="block-form-product">
                <div className="form">
                    <form>
                        <h3 className=""> Information de base </h3>
                        <div className="div-input">
                            <div className="div-categorie">
                                <label> Catégorie:</label>
                                <p className="select-categorie">
                                    Sélectionner une catégorie
                                    <p><FiChevronDown /></p>
                                </p>
                                {categories.map(({ categorie, subCategorie }, index) => {
                                    return <ul key={index} className="ul1">
                                        <p className="nameCat">
                                            {categorie}
                                            {subCategorie ? <FiChevronRight /> : null}
                                        </p>
                                        {subCategorie && (

                                            subCategorie.map(({ items, subCat }, index2) => {
                                                return <ul key={index2} className="ul2">
                                                    <p className="subCat">
                                                        {subCat}
                                                        {items ? <FiChevronRight /> : null}
                                                    </p>
                                                    {items && (
                                                        <ul className="ul3">
                                                            {items.map((list, index3) => {
                                                                return <li key={index} className="item-sub">
                                                                    {list.item}
                                                                </li>
                                                            })}
                                                        </ul>
                                                    )}
                                                </ul>
                                            })

                                        )}
                                    </ul>
                                })}
                            </div>
                            <span className="span-error">ddsss</span>
                        </div>
                        <div className="div-input">
                            <p>
                                <label> Nom de Produit* </label>
                                <input type="text" name="" placeholder="..." />
                            </p>
                            <span className="span-error"></span>
                        </div>
                        <div className="div-input">
                            <p>
                                <label> Description du produit* </label>
                                <textarea cols={6} rows={5} placeholder="décrivez le produit en quelques mots"> </textarea>
                            </p>
                            <span className="span-error"></span>
                        </div>
                        <div className="div-input">
                            <p>
                                <label> Image du product*</label>
                                <div className="file-img">
                                    <FiImage />
                                    <span> Sélectionner une image </span>
                                    <input type="file" name="file" />
                                </div>

                            </p>
                            <p className="text-file-img">
                                La taille maximale pour une seule image est de 3 Mo. Les formats suivants sont pris en charge : jpeg, jpg, png. Utilisez autant de photos sous autant d'angles que nécessaire pour afficher correctement votre produit.
                                Nous suggérons que vos images soient inférieures à 1000px*1000px avec un sujet clair pour améliorer la satisfaction de l'acheteur.
                            </p>
                            <span className="span-error"></span>
                        </div>
                        <h3 className=""> Plus de détails </h3>
                        <div className="div-input">
                            <p>
                                <label> Taille</label>
                                <ul className="sizes">
                                    <span> S </span>
                                    <span> SM </span>
                                    <span> X </span>
                                    <span> XL </span>
                                    <span> 2XL </span>
                                </ul>
                                <i>choisissez les tailles ou la taille par défaut <b>(Facultatif)</b> </i>
                            </p>
                        </div>
                        <div className="div-input">
                            <p>
                                <label> Couleur</label>
                                <ul className="color">
                                    <div className="block-input">
                                        <p>
                                            <input type="text" placeholder="nom ou valeur"
                                                defaultValue={""} />
                                            {/*  <div style={{background: "", width: "100px", height: '60px', borderRadius: '6px'}}></div> */}
                                        </p>
                                        {
                                            new Array(nb).fill().map((_, index) => {
                                                return (
                                                    <p key={index}>
                                                        <input type="text" placeholder="nom ou valeur"
                                                            defaultValue={""} />
                                                        {/*  <div style={{background: "", width: "100px", height: '60px', borderRadius: '6px'}}></div> */}
                                                        <span className="closes"
                                                            onClick={() => setNb(nb - 1)}>&times;</span>
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="add-input"
                                        onClick={() => setNb(nb + 1)}> <FaPlus />
                                    </div>
                                </ul>
                                <i>choisissez les couleur ou la couleur par défaut <b>(Facultatif)</b> </i>
                            </p>
                        </div>
                        <h3> Moyen de paiement attribué</h3>
                        <div className="moyen-pay">
                            <div className="row-pay">
                                <div className="row-child">
                                    <Checkbox text={"Mobile Money"} value={"momo"}
                                        setValue={setMomo} />
                                    <Checkbox text={"Moov Money"} value={"flooz"}
                                        setValue={setMoov} />
                                </div>
                                <div className="row-child">
                                    <Checkbox text={"Visa"} value={"visa"}
                                        setValue={setVisa} />
                                    <Checkbox text={"Master Card"} value={"master card"}
                                        setValue={setMasterCard} />
                                </div>
                            </div>
                        </div>
                        <p className="text-info">
                            Assurez vous que les informations renseigné à propos du produit 
                            sont correcte et juste. Cela pourra affecter la visibilité  de ce dernier 
                            dans votre boutique.
                        </p>
                        <button className="btn-update"> Ajouter le produit </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;