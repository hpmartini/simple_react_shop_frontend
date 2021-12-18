 import { configureStore } from '@reduxjs/toolkit'
 import cartStore from './cartStore'

 export default configureStore({
     reducer: {
         cart: cartStore,
     }
 })
