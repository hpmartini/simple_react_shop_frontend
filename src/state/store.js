 import { configureStore } from '@reduxjs/toolkit'
 import {
     persistStore,
     persistReducer,
     FLUSH,
     REHYDRATE,
     PAUSE,
     PERSIST,
     PURGE,
     REGISTER,
 } from 'redux-persist'
 import cartStore from './cartStore'
 import userStore from './userStore'
 import storage from 'redux-persist/lib/storage'

 const persistConfig = {
    key: 'root',
     version: 1,
     storage
 }

 const persistedReducer = persistReducer(persistConfig, userStore)

 export const store = configureStore({
     reducer: {
         cart: cartStore,
         user: persistedReducer,
     },
     middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
             serializableCheck: {
                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
             },
         }),
 })

 export const persistor = persistStore(store)
