import { configureStore } from '@reduxjs/toolkit'
import cartLoading from './cart/cartSlice'

export const store = configureStore({
  reducer: { cart: cartLoading }
})
