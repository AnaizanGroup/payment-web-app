import { createSlice } from "@reduxjs/toolkit";
import { resetPwd, userLogin, userRegister } from "./userReducer";


const userToken = localStorage.getItem("userToken") ?
    localStorage.getItem("userToken") : ''

const initialState = {
    loading: false,
    isError: false,
    errorMessage: null,
    isSuccess: false,
    userInfo: null,
    userToken,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("accesToken")
            state.loading = false
            state.isError = false
            state.isSuccess = true
        }
    },
    extraReducers: {
        /* register */
        [userRegister.pending]: (state) => {
            state.loading = true
            state.isError = false
        },
        [userRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.isError = false
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.isError = true
            state.errorMessage = payload.message
        },

        /* login */
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.userToken = payload.accessToken
            state.isError = false
        },
        [userLogin.rejected]: (state, {payload}) => {
            state.loading = false
            state.isError = true
            state.errorMessage = payload.message
        },

        /* reset password */
        [resetPwd.pending]: (state) => {
            state.loading = true
            state.isError = false
        },
        [resetPwd.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.userInfo = payload
            state.isError = false
            state.isSuccess = true
        },
        [resetPwd.rejected]: (state, {payload}) => {
            state.loading = false
            state.isError = true
            state.errorMessage = payload.message
        }
    }
})

export const { logout } = userSlice.actions

export const userReducer = userSlice.reducer