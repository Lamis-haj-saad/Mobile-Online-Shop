import { useLoaderData } from "react-router-dom";
import ShopTable from "./ShopTable";
import CartTotal from "./CartTotal";

import { fetchCart, addToCartAPI, removeFromCartAPI, updateCartQuantityAPI } from './store/CartSlice';
import { addToCart } from './store/CartSlice';
import { resetUserId, clearUserId } from "./store/UserSlice.jsx"
import store from "./store/store.jsx";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";


export default function CartPage(){
    //const cartId ="e364b282-6460-4665-bfc8-1c5bb68f18ff";
    //const cart = useLoaderData();
    //console.log(cart);
    //const items = cart.items;
    //console.log(items);

    const userId = useSelector((state) => state.user.userId);
    

    const cart = useSelector((state) => state.cart.cart, shallowEqual);
    const dispatch = useDispatch();

       
    useEffect(() => {
    const loadCart = async () => {
        await dispatch(fetchCart(userId));
    };

    loadCart();
    }, [dispatch, userId]);


    const products = cart.items || [];
    console.log(cart);
    

    


    return(
        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="product-content-right">
                    <div className="woocommerce">
                       <ShopTable products = {products}/>
                        <div className="cart-collaterals">
                        <div className="cross-sells">
                            <h2>You may be interested in...</h2>
                            <ul className="products">
                            <li className="product">
                                <a href="single-product.html">
                                <img
                                    width={325}
                                    height={325}
                                    alt="T_4_front"
                                    className="attachment-shop_catalog wp-post-image"
                                    src="img/product-2.jpg"
                                />
                                <h3>Ship Your Idea</h3>
                                <span className="price">
                                    <span className="amount">20.00 €</span>
                                </span>
                                </a>
                                <a
                                className="add_to_cart_button"
                                data-quantity={1}
                                data-product_sku=""
                                data-product_id={22}
                                rel="nofollow"
                                href="single-product.html"
                                >
                                Add to Cart
                                </a>
                            </li>
                            <li className="product">
                                <a href="single-product.html">
                                <img
                                    width={325}
                                    height={325}
                                    alt="T_4_front"
                                    className="attachment-shop_catalog wp-post-image"
                                    src="img/product-4.jpg"
                                />
                                <h3>Ship Your Idea</h3>
                                <span className="price">
                                    <span className="amount">20.00 €</span>
                                </span>
                                </a>
                                <a
                                className="add_to_cart_button"
                                data-quantity={1}
                                data-product_sku=""
                                data-product_id={22}
                                rel="nofollow"
                                href="single-product.html"
                                >
                                Add to Cart
                                </a>
                            </li>
                            </ul>
                        </div>
                       <CartTotal total ={cart.total} subTotal ={cart.subtotal} tax = {cart.tax} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>



    )
}



export async function loader(params){
    const state = store.getState();  
    const cartId = state.user.userId; 
    console.log(cartId);
    if (!cartId) {
        throw new Response(
            JSON.stringify({ message: "Cart ID not found." }),
            { status: 400 }
        );
    }

    const response = await fetch(`http://localhost:3000/carts/${cartId}`);

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ message: "Could not fetch cart." }),
            { status: 500 }
        );
    }

    return await response.json();
}