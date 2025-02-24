import useDiscount from "../../store.jsx";
import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQty, setTotalPrice, decrementQty } from "../redux/CartSlice.js";

import { useDispatch } from "react-redux";

export default function CartDetails() {

  const dispatch = useDispatch();
  function handleAddProdcut(id, price){
    dispatch(incrementQty({id, price}))
  }
  function handleRemoveProdcut(id, price){
    dispatch(decrementQty({id, price}))
  }
  //const products = cart.length > 0 ? cart[0].items : [];
  const products = useSelector((state) => state.cart.items); 

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
                    src={`../../../produts-img/${product.imageName}`} 
                  />
                </a>
              </td>
              <td className="product-name">
                <a href="single-product.html">{product.name}</a>
              </td>
              <td className="product-price">
                <span className="amount">
                  {product.price}€ 
                </span>
              </td>
              <td className="product-quantity">
                <div className="quantity buttons_added">
                  <button className="minus" onClick={handleRemoveProdcut(product.id,product.price)}>-</button>
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
                  <button className="plus" onClick={handleAddProdcut(product.id,product.price)}>+</button>
                </div>
              </td>
              <td className="product-subtotal">
                <span className="amount">
                  {(product.price * product.qty).toFixed(2)} €
                </span>
              </td>
            </tr>
          ))
        )}
        <tr>
          <td className="actions" colSpan="6">
            <Link to = 'checkout' >
            <input
              type="button"
              onClick={() => (window.location.href = "checkout")}
              value="Checkout"
              className="checkout-button button alt wc-forward"
            />
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
