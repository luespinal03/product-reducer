import { createSlice } from "@reduxjs/toolkit"

// this is the initial state of the products slice
const initialState = {
    products: []
}

// createSlice takes an object as an argument. The object should have a name, initialState, and reducers. 
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
        editProduct: (state, action) => {
            return state.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );
        },
    },
});


// this is the reducer function for the products slice
export const { deleteProduct, editProduct } = productSlice.actions

// this is the selector for the products slice
export default productSlice.reducer