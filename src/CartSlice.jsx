/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
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
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                state.cartItems = state.cartItems.filter(cartItem => cartItem.name !== item.name);
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.name !== action.payload.name);
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice = existingItem.quantity * existingItem.cost;
            } else {
                state.cart.push({ ...action.payload, quantity: 1, totalPrice: action.payload.cost });
            }
            state.totalPrice = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        increment(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.cost;
            }
            state.totalPrice = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        decrement(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.cost;
            }
            state.totalPrice = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            state.totalPrice = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
        },
    },
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
