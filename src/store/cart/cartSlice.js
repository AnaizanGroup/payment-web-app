import { createSlice } from "@reduxjs/toolkit";
import cat1 from "../../assets/images/categories/cat1.png";
import cat2 from "../../assets/images/categories/cat2.png";
import cat3 from "../../assets/images/categories/cat3.png";
import cat4 from "../../assets/images/categories/cat4.png";

const cartItem = [
    {
        img: cat1,
        names: 'Product name',
        price: 10000,
        quantity: 2,
    },
    {
        img: cat2,
        names: 'Product name',
        price: 10000,
        quantity: 2,
    },
    {
        img: cat3,
        names: 'Product name',
        price: 10000,
        quantity: 2,
    },
    {
        img: cat4,
        names: 'Product name',
        price: 10000,
        quantity: 2,
    }
]

const cart = createSlice({
    name: "cart",
    initialState: {
        cartItem: cartItem/* localStorage.getItem("cartItem") ? 
            [...JSON.parse(localStorage.getItem("cartItem"))] : [] */
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.cartItem.find (
                (item) => item.idProd === action.payload.idProd
            );

            if (item) {
                item.quantity++;
            } else {
               state.cartItem.push ({...action.payload, quantity: 1}); 
            }

            localStorage.removeItem("cartItem")
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        incrementQty: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.idProd === action.payload.idProd
            )

            item.quantity++;
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        decrementQty: (state, action) => {
            const item = state.cartItem.find (
                (item) => item.idProd === action.payload.idProd
            )

            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }

            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItem.find (
                (item) => item.idProd != action.payload.idProd
            )
            
            state.cartItem = removeItem

            localStorage.removeItem("cartItem")
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        }
    }
})

export const {
    addItem,
    incrementQty,
    decrementQty,
    removeItem
} = cart.actions;

export const cartReducer = cart.reducer;