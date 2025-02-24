import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.cart.userId);

  // Function to handle add to cart
  const handleAddToCart = async () => {
    if (!userId) return; // Ensure userId exists  
      dispatch(addToCart({ userId, productId: product.id }));
      console.log(`Added product ${product.id} to cart for user ${userId}`);
  };

  return <button className="add_to_cart_button" type="button" onClick={handleAddToCart}>Add to Cart</button>;
}
