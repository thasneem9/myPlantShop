// CartIcon.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice';
import './CartIcon.css';

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);

    return (
        <div className="cart-icon-container">
            <i className="cart-icon">🛒</i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
    );
};

export default CartIcon;
