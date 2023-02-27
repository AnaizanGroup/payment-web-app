import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios"
import { API_URL } from "../../settings/constant";

const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

/* register */
export const userRegister = createAsyncThunk(
    'user/register',
    async ({ firstname, lastname, country, telephone,
        email, password, isDone },
        { rejectedWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}accounts/register`, {
                firstname: 'MaxGeeks',
                lastname: 'Luciano',
                country: 'Benin',
                phone: '+2299392992',
                email: 'ttot@gmail.com',
                password: '123455'
            }, config)

            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return  rejectedWithValue(error)
        }
    }
)

/* login */
export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password },
        { rejectedWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}login`, {
                email: email,
                password: password
            }, config)

            return data;
        } catch (error) {
            console.log(error)
            return rejectedWithValue(error)
        }
    }
)


/* send email reset password */
export const sendEmail = createAsyncThunk(
    'user/sendEmail',
    async ({ email },
        { rejectedWithValue }) => {
        try {
            const data = await axios.post(`${API_URL}sendEmailReset`, { email: email }, config)

            return data
        } catch (error) {
            console.log(error)
            return rejectedWithValue(error)
        }
    }
)

/* reset password */
export const resetPwd = createAsyncThunk(
    'user/resetPassword',
    async ({ email, password },
        { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}resetPassword`, {
                password: password,
                email: email
            }, config)

            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)