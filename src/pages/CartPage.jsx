/* import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart }  from '../CartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <Link to="/plants"><button>Continue Shooping</button></Link>
            <button>Checkout</button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} width="200" height="200" />
                            <div className="cart-item-info">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>{item.cost}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                                </div>
                                <button onClick={() => dispatch(removeFromCart(item))}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage; */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../CartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalCheckoutPrice = cartItems.reduce((total, item) => 
        total + item.quantity * parseFloat(item.cost.slice(1)), 0
    );

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <Link to="/plants"><button>Continue Shopping</button></Link>
            <button onClick={""}>CheckOut</button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.name} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: {item.cost}</p>
                            <p>Quantity: {item.quantity}</p>
                            <img src={item.image} width="250px"></img>
                            <p>{item.description}</p>
                            <p>Subtotal: ${(item.quantity * parseFloat(item.cost.slice(1))).toFixed(2)}</p>
                            <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                            <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                            <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${totalCheckoutPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default CartPage;
