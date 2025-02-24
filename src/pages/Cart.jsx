import { useEffect, useState } from 'react';  
import CartDetails from "../components/cart/CartDetails";
import Interests from '../components/cart/Interests';  
import CartTotals from '../components/cart/CartTotals';  


export default function Cart() {
  const [cart, setCart] = useState(null);  // cart will be null initially until it's fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) {
      console.error("Cart ID not found!");
      return;
    }

    // Fetch cart details
    const fetchCartDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/carts/${cartId}`);
        if (!response.ok) {
          throw new Error("Error fetching cart details");
        }

        const data = await response.json();
        setCart(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart details:", error);
        setLoading(false);
      }
    };

    fetchCartDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Ensure cart and cart.items are defined before trying to map over it
  const cartItems = cart && cart.items ? cart.items : [];

  return (
    <div>
      <h3>Cart Details</h3>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}€</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

/*

export default function Cart(){
    return(
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
  </>
    )
}*/