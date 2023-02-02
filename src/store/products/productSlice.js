import { createSlice } from "@reduxjs/toolkit";

import cat1 from "../../assets/images/categories/cat1.png";
import cat2 from "../../assets/images/categories/cat2.png";
import cat3 from "../../assets/images/categories/cat3.png";
import cat4 from "../../assets/images/categories/cat4.png";
import cat5 from "../../assets/images/categories/cat5.png";

const products = [
    {
        idProd: 1,
        nameCat: 'Vêtements Homme',
        img: cat1,
        names: 'Product name',
        description: 'Product',
        price: 10000,
        size: 'X',
        color: 'blue',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        reviews: 20,
        description: '',
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 2,
        img: cat2,
        nameCat: 'Vêtements Femme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        size: 'S',
        color: 'red',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "Marx Shop",
        country: "Bénin",
        code_country: "fr"
    },
    {
        idProd: 3,
        img: cat3,
        nameCat: 'Vêtements Homme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        color: 'red',
        size: 'XL',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "Bénin mode",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 4,
        img: cat4,
        nameCat: 'Vêtements Femme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        color: 'red',
        size: 'X',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "Viva Mode",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 5,
        img: cat1,
        nameCat: 'Vêtements Homme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        color: 'red',
        size: '2XL',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 6,
        img: cat2,
        nameCat: 'Vêtements Homme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        color: 'red',
        size: '2XL',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "Marx Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 7,
        img: cat3,
        nameCat: 'Vêtements Femme',
        names: 'Product name',
        description: 'Product',
        price: 10000,
        color: 'red',
        size: '2XL',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "Bénin mode",
        country: "Bénin",
        code_country: "bj"
    },
    {
        idProd: 8,
        img: cat4,
        nameCat: 'Vêtements Homme',
        names: 'Product name',
        description: 'Product',
        price: 10000,  
        color: 'red',
        size: '2XL',
        sizes: ['S','SM','X','XL','2XL'],
        colors: ['blue','red','black'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    }
]

export const categories = [
    {
        img: cat1,
        nameCat:"Vêtements Femme",
        items: [
            {type: 'Robe de sortie'},
            {type: 'Robe de nuit'},
            {type: 'Robe'},
        ]
    },
    {
        img: cat2,
        nameCat:"Vêtements Homme",
        items: [
            {type: 'Chemise'},
            {type: 'Pantalon'},
            {type: 'Pantalons'},
        ]
    },
    {
        img: cat3,
        nameCat:"Informatique et Bureautique"
    },
    {
        img: cat4,
        nameCat: "Téléphone et Télécommunication"
    },
    {
        img: cat5,
        nameCat:"Electronique grand public"
    },
    {
        img: cat1,
        nameCat:"Sacs & Chaussures"
    },
    {
        img: cat2,
        nameCat:"Sports & Loisirs"
    },
    {
        img: cat3,
        nameCat:"Accessoires Cuisine"
    },
    {
        img: cat1,
        nameCat:"Maison & Jardin"
    },
    {
        img: cat4,
        nameCat:"Santé, Beauté & Cheveux"
    },
    {
        img: cat1,
        nameCat:"Automobiles & Moto"
    },
    {
        img: cat3,
        nameCat:"Jouets, Enfant & Bébé"
    },
]

const initialState = {
    loading: false,
    info: null,
    error: null,
    products: products,
    categorie: categories
}
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers:{},
    extraReducers: {}
})

export const productReducer = productSlice.reducer;
