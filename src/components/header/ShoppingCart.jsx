import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../cart/useCart";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const total = useSelector((state) => state.cart.total);
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
            <Link to="/cart">Cart :   <span className="cart-amunt">{totalPrice} €</span>
            <i className="fa fa-shopping-cart"></i> 
            <span className="product-count">{total}</span></Link>
        </div>
    </div>
  );
}
