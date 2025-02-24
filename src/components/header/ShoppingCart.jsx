
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import { fetchCart, addToCartAPI, removeFromCartAPI, updateCartQuantityAPI } from '../cart/store/CartSlice';
import { addToCart } from '../cart/store/CartSlice';
import { resetUserId, clearUserId } from "../cart/store/UserSlice";


export default function Cart() {

    //const userId = "e364b282-6460-4665-bfc8-1c5bb68f18ff";
    const userId = useSelector((state) => state.user.userId);
    
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart.cart, shallowEqual);


       
    useEffect(() => {
    const loadCart = async () => {
        await dispatch(fetchCart(userId));
    };

    loadCart();
    }, [dispatch, userId]);


    //useEffect(() => {
        //console.log("Cart updated:", cart);
     // }, [cart]);

     
    
    const items = cart.items || []; 

    const itemsNumber = items.reduce((total, item) => total + item.qty, 0);
    const totalAmount = Number(cart.total).toFixed(2); 

    const location = useLocation();

    
    const hideNavBarPages = ["/panier", "/checkout" ];
    return (
        <div className={!hideNavBarPages.includes(location.pathname) ? "col-sm-4" : "col-sm-6"}>
            <div className="shopping-item">
                <Link to='/panier'>
                    <span className="cart-amunt">${!isNaN(totalAmount) && totalAmount != null ? totalAmount : 0}</span>
 
                    <FontAwesomeIcon icon={faShoppingCart} /> 
                    <span className="product-count">{itemsNumber}</span>
                </Link>
            </div>
        </div>
    );
}



/*import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../cart/useCart";

export default function ShoppingCart() {
  const cartId = useCart();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!cartId) return;

    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:3000/carts/${cartId}`);
        const data = await response.json();
        setCart(data.products || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [cartId]);

  return (
    <div className="col-sm-4">
        <div className="shopping-item">
            <Link to="/cart">Cart :   <span className="cart-amunt">{cart.subTotal} €</span>
            <i className="fa fa-shopping-cart"></i> 
            <span className="product-count">{cart.length}</span></Link>
        </div>
    </div>
  );
}
*/