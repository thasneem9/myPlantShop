import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  incrementQuantity, decrementQuantity, removeItem  } from '../CartSlice';
import { useEffect } from 'react';
const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();
   
    useEffect(() => {
        console.log("Cart items:", cartItems);
    }, [cartItems]);
    return (
        <div>
        <h2>Cart</h2>
        <p>Total Items: {totalQuantity}</p>
        <ul>
            {cartItems.map(item => (
                <li key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
    );
};
export default CartPage