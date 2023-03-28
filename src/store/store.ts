import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './userAuth/userSlice';

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			},
		}),
});

// export const persistor = persistStore(store)
