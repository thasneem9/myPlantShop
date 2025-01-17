
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem,selectCartCount } from '../CartSlice';
import { Link } from 'react-router-dom';
import './cartPage.css'
const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const totalCheckoutPrice = cartItems.reduce((total, item) => 
        total + item.quantity * parseFloat(item.cost.slice(1)), 0
    );
    const cartCount = useSelector(selectCartCount);
const handleCheckout=()=>{
 
        alert("Check-Out functinality will be added later");
  
}
    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <Link to="/plants"><button>Continue Shopping</button></Link>
            <button onClick={handleCheckout}>CheckOut</button>
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
                    <h3>Total Number of items:{cartCount}</h3>
                    <h3>Total: ${totalCheckoutPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default CartPage;
