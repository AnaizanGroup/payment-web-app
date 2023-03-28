import { createSlice } from '@reduxjs/toolkit';
import { resetPwd, userLogin, userRegister } from './userReducer';

const userToken =
	localStorage.getItem('userToken') != null
		? localStorage.getItem('userToken')
		: '';

const initialState = {
	loading: false,
	isError: false,
	errorMessage: '',
	isSuccess: false,
	userInfo: null,
	userToken,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('accesToken');
			state.loading = false;
			state.isError = false;
			state.isSuccess = true;
		},
	},
	extraReducers: {
		/* register */
		[userRegister.pending.toString()]: (state) => {
			state.loading = true;
			state.isError = false;
		},
		[userRegister.fulfilled.toString()]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload;
			state.isError = false;
		},
		[userRegister.rejected.toString()]: (state, { payload }) => {
			state.loading = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},

		/* login */
		[userLogin.pending.toString()]: (state: any) => {
			state.loading = true;
			state.error = '';
		},
		[userLogin.fulfilled.toString()]: (state, { payload }) => {
			state.loading = false;
			state.userToken = payload.accessToken;
			state.isError = false;
		},
		[userLogin.rejected.toString()]: (state, { payload }) => {
			state.loading = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},

		/* reset password */
		[resetPwd.pending.toString()]: (state) => {
			state.loading = true;
			state.isError = false;
		},
		[resetPwd.fulfilled.toString()]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload;
			state.isError = false;
			state.isSuccess = true;
		},
		[resetPwd.rejected.toString()]: (state, { payload }) => {
			state.loading = false;
			state.isError = true;
			state.errorMessage = payload.message;
		},
	},
});

export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
