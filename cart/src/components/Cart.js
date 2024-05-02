// CartPage.js
import React from 'react';
import { useCart } from './CratContext';

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
