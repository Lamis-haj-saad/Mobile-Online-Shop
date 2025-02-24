import useDiscount from "../../store.jsx";
import React from 'react';
import { useDispatch } from 'react-redux';

const CartDetails = ({ handleAddToCart }) => {
  const dispatch = useDispatch();

  // Example product structure
  const product = {
    id: 5029,
    name: 'sony xperia xz3',
    imageName: 'sony-xperia-xz3-.jpg',
    price: 725,
    qty: 1,
  };

  return (
    <div className="product-details">
      <h3>{product.name}</h3>
      <img src={product.imageName} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default CartDetails;
/*

export default function CartDetails({ cart = [] }) {
  // Assuming the first cart in the list is the active cart.
  const products = cart.length > 0 ? cart[0].items : [];

  return (
    <table cellSpacing="0" className="shop_table cart">
      <thead>
        <tr>
          <th className="product-remove">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan="6">Your cart is empty.</td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product.id} className="cart_item">
              <td className="product-remove">
                <a title="Remove this item" className="remove" href="#">
                  ×
                </a>
              </td>
              <td className="product-thumbnail">
                <a href="single-product.html">
                  <img
                    width="145"
                    height="145"
                    alt={product.name}
                    className="shop_thumbnail"
                    src={`img/${product.imageName}`}
                  />
                </a>
              </td>
              <td className="product-name">
                <a href="single-product.html">{product.name}</a>
              </td>
              <td className="product-price">
                <span className="amount">
                  {useDiscount(product.price, 0).toFixed(2)}€ {/* Assuming no discount for simplicity *//*}
                </span>
              </td>
              <td className="product-quantity">
                <div className="quantity buttons_added">
                  <button className="minus">-</button>
                  <input
                    type="number"
                    size="4"
                    className="input-text qty text"
                    title="Qty"
                    value={product.qty}
                    min="1"
                    step="1"
                    readOnly
                  />
                  <button className="plus">+</button>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">
                  {(useDiscount(product.price, 0) * product.qty).toFixed(2)} €
                </span>
              </td>
            </tr>
          ))
        )}
        <tr>
          <td className="actions" colSpan="6">
            <input
              type="button"
              onClick={() => (window.location.href = "checkout.html")}
              value="Checkout"
              className="checkout-button button alt wc-forward"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
*/