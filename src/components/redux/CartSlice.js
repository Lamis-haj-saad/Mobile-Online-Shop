import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Stores cart items
  userId: null, // Stores the user id
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
  },
});

export const { addToCart, setUserId, clearCart } = cartSlice.actions;
export default cartSlice.reducer;