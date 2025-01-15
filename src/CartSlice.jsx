
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.name === action.payload.name);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.name !== item.name);
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
        }
    }
});


export const selectCartItems = (state) => state.cart.cartItems;

// Selector to calculate the total number of items in the cart
export const selectCartCount = (state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer; 
