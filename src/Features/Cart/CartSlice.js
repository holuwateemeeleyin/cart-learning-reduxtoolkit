// 3. Slice: what is createSlice for
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    amount:0,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
})

console.log(cartSlice);

// We need to get the reducer that is the property of cartSlice
// So that we can export it and made available for our store
export default cartSlice.reducer;


