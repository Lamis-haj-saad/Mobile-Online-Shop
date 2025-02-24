import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchCart, addToCartAPI, removeFromCartAPI, updateCartQuantityAPI } from './store/CartSlice';
import { addToCart } from './store/CartSlice';
import { useDispatch, useSelector } from "react-redux";

export default function ShopTable({products}){


    //const cart = useLoaderData();
    //const items = cart[0].items;
    //console.log(cart);

    const dispatch = useDispatch();
    //const userId = "e364b282-6460-4665-bfc8-1c5bb68f18ff";

    const userId = useSelector((state) => state.user.userId);
    //const brandsNames = ["Apple", "Samsung", "LG", "Huawei", "Sony"];

    const handleUpdateQuantity = (productId, quantity) => {
        dispatch(updateCartQuantityAPI(userId, productId, quantity)); 
        console.log("------------------------")
      };

    const handleRemoveProduct = (productId) => {
    dispatch(removeFromCartAPI(userId, productId)); 
    console.log("------------------------")
    };
 

    return(
        <table cellSpacing={0} className="shop_table cart">
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
            {products.length > 0 ? (
                products.map((item, index) => (
                <tr className="cart_item" key={index}>
                    <td className="product-remove">
                    <a title="Remove this item" className="remove" onClick={()=>handleRemoveProduct(item.id)}>
                        ×
                    </a>
                    </td>
                    <td className="product-thumbnail">
                    <a href="single-product.html">
                        <img
                        width={145}
                        height={145}
                        alt="poster_1_up"
                        className="shop_thumbnail"
                        src={item.image}
                        />
                    </a>
                    </td>
                    <td className="product-name">
                    <Link to="">{item.name}</Link>
                    </td>
                    <td className="product-price">
                    <span className="amount">${item.price.toFixed(2)}</span>
                    </td>
                    <td className="product-quantity">
                    <div className="quantity buttons_added">
                        <input
                        type="button"
                        className="minus"
                        defaultValue="-"
                        onClick={() => handleUpdateQuantity(item.id, item.qty - 1)}
                        />
                        <input
                        type="number"
                        size={4}
                        className="input-text qty text"
                        title="Qty"
                        value={item.qty}
                        min={0}
                        step={1}
                        onSubmit={(event) => handleUpdateQuantity(item.id, event.target.value)}
                        />
                        <input
                        type="button"
                        className="plus"
                        defaultValue="+"
                        onClick={() => handleUpdateQuantity(item.id, item.qty + 1)}
                        />
                    </div>
                    </td>
                    <td className="product-subtotal">
                    <span className="amount">${(Math.floor(item.price) * Math.floor(item.qty)).toFixed(2)}</span>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={6} style={{ textAlign: 'center' }}>
                    No products in the cart.
                </td>
                </tr>
            )}


               
                <tr>
                    {
                        products.length > 0 && (
                            <td className="actions" colSpan={6}>
                                <Link to='checkout'>
                                    <input
                                    type="button"
                                    defaultValue="Checkout"
                                    name="proceed"
                                    className="checkout-button button alt wc-forward"
                                    />
                                </Link>
                            
                            </td>
                        )
                    }
               
                </tr>
            </tbody>
            </table>
    )
}