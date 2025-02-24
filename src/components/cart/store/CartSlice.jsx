import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    cart: {},  
    loading: false 
  },
  reducers: {
    setCart: (state, action) => {
      //console.log("Updating cart state in Redux:", action.payload);
      
      state.cart = action.payload || {};
      
      //console.log("New Redux state:", state.cart);
    },
    addToCart: (state, action) => {
      if (!state.cart.id) {
        //console.log(action.payload);
        state.cart = {
          id: action.payload.userId, // L'ID du panier est passé en paramètre
          total: action.payload.price + action.payload.price * 0.2, // Total initial = prix du premier article
          subtotal: action.payload.price,
          tax: action.payload.price * 0.2, // Ex: taxe de 20%
          items: [{ 
            id: action.payload.id, 
            name: action.payload.name, 
            image: action.payload.image, 
            price: action.payload.price, 
            qty: 1 
          }]
        };
      } else {
        // Vérifie si le produit est déjà dans le panier
        const item = state.cart.items.find((item) => item.id === action.payload.id);
        if (item) {
          item.qty += 1;
        } else {
          state.cart.items.push({ ...action.payload, qty: 1 });
        }
        // Mise à jour du total et de la taxe
        state.cart.subtotal += action.payload.price;
        state.cart.tax = state.cart.subtotal * 0.2; // Exemple : recalcul de la taxe
        state.cart.total = state.cart.subtotal + state.cart.tax;
      }
    },
    updateCartQuantity: (state, action) => {
      
      const item = state.cart.items?.find((item) => item.id === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeFromCart: (state, action) => {
      
      if (state.cart.items) {
        state.cart.items = state.cart.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      
      state.cart = {};
    },
  },
});

export const { setCart, addToCart, updateCartQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Actions API

export const fetchCart = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3000/carts/${userId}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Error: No cart found for userId ${userId}`);
      } else {
        console.error(`Error: Failed to fetch cart (Status: ${response.status})`);
      }
      return; // Stop execution if there's an error
    }

    const data = await response.json();
    //console.log("Cart data:", data);

    dispatch(setCart(data || {})); 
  } catch (error) {
    console.error("Error fetching cart:", error);
  }
};




export const addToCartAPI = (userId, product, quantity=1) => async (dispatch, getState) => {
  try {
    const cart = getState().cart;
    //console.log(product);

    // Vérifiez si un panier existe pour l'utilisateur via GET
    let response = await fetch(`http://localhost:3000/carts?userId=${userId}`);
    const existingCart = await response.json();
    //console.log(existingCart.length);

    if (existingCart.length === 0) {
      // Si le panier n'existe pas, créez un nouveau panier avec POST
      response = await fetch(`http://localhost:3000/carts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userId,
          items: [{ 
            id: product.id, 
            name: product.name, 
            image: product.image, 
            price: product.price, 
            qty: quantity 
          }],
          total: product.price,
          subtotal: product.price,
          tax: product.price * 0.2,
        }),
      });
    } else {
      // Si le panier existe déjà, mettez-le à jour
      const currentCart = existingCart[0]; // Récupérez le panier existant

      // Vérifiez si le produit est déjà dans le panier
      const productIndex = currentCart.items.findIndex(item => item.id === product.id);

      let updatedItems;
      if (productIndex !== -1) {
        // Produit déjà dans le panier, mise à jour de la quantité
        updatedItems = currentCart.items.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      } else {
        // Nouveau produit, on l'ajoute au panier
        updatedItems = [...currentCart.items, { 
          id: product.id, 
          name: product.name, 
          image: product.image, 
          price: product.price, 
          qty: quantity 
        }];
      }

      // Calculer le nouveau total
      const newSubtotal = updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0);

      response = await fetch(`http://localhost:3000/carts/${currentCart.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: updatedItems,
          total: newSubtotal + newSubtotal * 0.2,
          subtotal: newSubtotal,
          tax: newSubtotal * 0.2, 
        }),
      });
    }

    if (!response.ok) {
      throw new Error('Failed to add product to cart');
    }

    const updatedCart = await response.json();
    //console.log("===========");
    //console.log(updatedCart);
    dispatch(setCart(updatedCart)); // Mettez à jour le panier dans l'état global
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};



export const updateCartQuantityAPI = (userId, productId, qty) => async (dispatch, getState) => {
  try {
    // Récupérer le panier actuel
    const response = await fetch(`http://localhost:3000/carts?userId=${userId}`);
    const existingCart = await response.json();
    
    if (existingCart.length === 0) {
      throw new Error("Cart not found");
    }

    let cart = existingCart[0];

    // Mise à jour des produits (supprime ceux dont la quantité devient 0)
    const updatedItems = cart.items
      .map(item => (item.id === productId ? { ...item, qty } : item))
      .filter(item => item.qty > 0); // Supprime les produits avec qty = 0

    // Recalcul des totaux
    const newSubtotal = updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = newSubtotal * 0.2;
    const total = newSubtotal + tax;

    // Si le panier est vide après suppression
    if (updatedItems.length === 0) {
      // Supprimer complètement le panier
      await fetch(`http://localhost:3000/carts/${cart.id}`, { method: "DELETE" });
      dispatch(setCart({ items: [], subtotal: 0, tax: 0, total: 0 })); // Mettre à jour Redux
      return;
    }

    // Mise à jour du panier
    const updateResponse = await fetch(`http://localhost:3000/carts/${cart.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: updatedItems,
        subtotal: newSubtotal,
        tax,
        total,
      }),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update cart quantity");
    }

    const updatedCart = await updateResponse.json();
    dispatch(setCart(updatedCart));
  } catch (error) {
    console.error("Error updating cart quantity:", error);
  }
};





export const removeFromCartAPI = (userId, productId) => async (dispatch, getState) => {
  try {
    // Récupérer le panier actuel
    const response = await fetch(`http://localhost:3000/carts?userId=${userId}`);
    const existingCart = await response.json();

    if (existingCart.length === 0) {
      throw new Error("Cart not found");
    }

    let cart = existingCart[0];

    // Filtrer les articles pour supprimer celui qui correspond
    const updatedItems = cart.items.filter(item => item.id !== productId);

    // Recalcul des totaux
    const newSubtotal = updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = newSubtotal * 0.2;
    const total = newSubtotal + tax;

    // Mise à jour du panier (ou suppression s'il est vide)
    if (updatedItems.length > 0) {
      const updateResponse = await fetch(`http://localhost:3000/carts/${cart.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: updatedItems,
          subtotal: newSubtotal,
          tax,
          total,
        }),
      });

      if (!updateResponse.ok) {
        throw new Error("Failed to remove product from cart");
      }

      const updatedCart = await updateResponse.json();
      dispatch(setCart(updatedCart));
    } else {
      // Supprimer complètement le panier s'il est vide
      await fetch(`http://localhost:3000/carts/${cart.id}`, { method: "DELETE" });
      dispatch(setCart(null)); // Réinitialiser le panier
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
};

