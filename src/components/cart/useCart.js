import { useState, useEffect } from "react";

export default function useCart() {
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  useEffect(() => {
    // If no cart ID exists, create one
    if (!cartId) {
      const fetchCartId = async () => {
        try {
          const response = await fetch("http://localhost:3000/carts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({}),
          });

          if (!response.ok) {
            throw new Error("Failed to create cart");
          }

          const data = await response.json();
          setCartId(data.id);
          localStorage.setItem("cartId", data.id); // Store in localStorage
        } catch (error) {
          console.error("Error creating cart:", error);
        }
      };

      fetchCartId();
    }
  }, [cartId]);

  return cartId;
}
