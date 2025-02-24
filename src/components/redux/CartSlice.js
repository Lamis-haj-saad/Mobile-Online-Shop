import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  userId: null, // Stores the user id
  totalPrice:0,
  total:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
    setTotalPrice: (state, action) =>{
      state.totalPrice= state.totalPrice+action.payload;
    },
    incrementQty: (state, action) =>{
      const { id, price } = action.payload;
  
      // Find the product in the cart
      const product = state.items.find(item => item.id === id);
      product.qty += 1;

      state.totalPrice += price; // Update the total price
      state.total += 1; // Increment the total item count
      },
    decrementQty: (state, action) =>{
      const { id, price } = action.payload;
  
      // Find the product in the cart
      const product = state.items.find(item => item.id === id);
      product.qty -= 1;

      state.totalPrice -= price; // Update the total price
      state.total -= 1; // Increment the total item count
    }

  },
});

export const { addToCart, setUserId, clearCart, setTotalPrice, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;