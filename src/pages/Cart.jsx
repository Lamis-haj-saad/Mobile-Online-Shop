import { useEffect, useState } from 'react';  
import CartDetails from "../components/cart/CartDetails";
import Interests from '../components/cart/Interests';  
import CartTotals from '../components/cart/CartTotals';  
import { useSelector } from 'react-redux';

export default function Cart(){
    const cartItems = useSelector((state) => state.cart.cartItems);
    return(
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            {(cartItems || []).map(item => (
            <div key={item.id}>{item.productId}</div>
            ))}

            {/*cartItems.map((item, index) => (
                <li key={index}>Product ID: {item.productId}</li>
            ))*/}
        </ul>
    </div>
)
}

/*
        <>
        <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                        <div className="woocommerce">
                            <CartDetails/>
                        <div className="cart-collaterals">
                        <Interests/>
                        <CartTotals/>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
  </>*/