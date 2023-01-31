import { createSlice } from "@reduxjs/toolkit";
import cat1 from "../../assets/images/categories/cat1.png";
import cat2 from "../../assets/images/categories/cat2.png";
import cat3 from "../../assets/images/categories/cat3.png";
import cat4 from "../../assets/images/categories/cat4.png";


const cart = createSlice({
    name: "cart",
    initialState: {
        cartItem: []
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.idProd === action.payload.idProd
            );

            if (item) {
                item.quantity++;
            } else {
                state.cartItem.push({ ...action.payload});
            }
        },
        incrementQty: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.idProd === action.payload.idProd
            )

            item.quantity++;
        },
        decrementQty: (state, action) => {
            const item = state.cartItem.find(
                (item) => item.idProd === action.payload.idProd
            )

            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cartItem.filter((item) =>
                item.idProd != action.payload.idProd);
            
            state.cartItem = removeItem;
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