// 1. Creating a redux store
import { configureStore } from "@reduxjs/toolkit";

// 4. Now import our reducer here from cartSlice
import cartReducer from '../Features/Cart/CartSlice'

export default configureStore({
    reducer:{
        cart:cartReducer
    }
})

// You can also use 
// export const store = configureStore({
//     reducer:{}
// })