import React from 'react'
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

export default CartPage;