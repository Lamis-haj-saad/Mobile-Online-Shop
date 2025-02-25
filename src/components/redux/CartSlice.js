import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  userId: null, // Stores the user id
  totalPrice: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice += product.price;
      state.total += 1;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.total = 0;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    incrementQty: (state, action) => {
      const { id, price } = action.payload;

      const product = state.items.find(item => item.id === id);
      product.qty += 1;
      state.totalPrice += price; // Update the total price
      state.total += 1; // Increment the total item count
    },
    decrementQty: (state, action) => {
      const { id, price } = action.payload;

      // Find the product in the cart
      const product = state.items.find(item => item.id === id);
      product.qty -= 1;
      state.totalPrice -= price; // Update the total price
      state.total -= 1; // Increment the total item count
      // If the quantity becomes 0, remove the item from the cart
      if (product.qty === 0) {
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      const product = state.items.find(item => item.id === id);

      state.totalPrice -= product.price * product.qty;
      state.total -= product.qty;
      state.items = state.items.filter(item => item.id !== id);
    }
  },
});

export const { addToCart, setUserId, clearCart, setTotalPrice, incrementQty, decrementQty, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;