import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Array to hold cart items
    totalQuantity: 0, // Total number of items in the cart
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.cartItems.push(item);
            }
            state.totalQuantity++;
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(cartItem => cartItem.id === action.payload);
            if (item) item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(cartItem => cartItem.id === action.payload);
            if (item && item.quantity > 1) item.quantity--;
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
        },
    },
});


export const {  removeItem, incrementQuantity, decrementQuantity,addToCart } = cartSlice.actions;
export default cartSlice.reducer;
