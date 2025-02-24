import { useState } from "react";

export default function AddToCartButton({ product }) {
  const [quantity, setQuantity] = useState(1);

  // Function to handle add to cart
  const handleAddToCart = async () => {
    // Assuming cartId is stored in localStorage or retrieved from state
    const cartId = localStorage.getItem("cartId");

    if (!cartId) {
      console.error("Cart ID is missing!");
      return;
    }

    const cartItem = {
      productId: product.id,
      quantity: quantity,
    };

    try {
      const response = await fetch(`http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      if (!response.ok) {
        throw new Error("Error adding product to cart");
      }

      console.log("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return <button className="add_to_cart_button" type="button" onClick={handleAddToCart}>Add to Cart</button>;
}
