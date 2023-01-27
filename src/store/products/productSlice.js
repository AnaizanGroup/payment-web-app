import { createSlice } from "@reduxjs/toolkit";

import cat1 from "../../assets/images/categories/cat1.png";
import cat2 from "../../assets/images/categories/cat2.png";
import cat3 from "../../assets/images/categories/cat3.png";
import cat4 from "../../assets/images/categories/cat4.png";

const products = [
    {
        img: cat1,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
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
        img: cat2,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat3,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat4,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat1,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat2,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat3,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat4,
        names: 'Product name',
        price: 10000,  
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat1,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat2,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat3,
        names: 'Product name',
        price: 10000, 
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    },
    {
        img: cat4,
        names: 'Product name',
        price: 10000,
        size: ['S','SM','X','XL','2XL'],
        color: ['blue','red','black','white','green'],
        orders: 123,
        sold: 123,
        like: 1290,
        reduce: 20,
        shop: "LVM Shop",
        country: "Bénin",
        code_country: "bj"
    }
]

const initialState = {
    loading: false,
    info: null,
    error: null,
    products: products
}
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers:{},
    extraReducers: {}
})

export const productReducer = productSlice.reducer;
