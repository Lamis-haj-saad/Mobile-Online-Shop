import { createSlice } from '@reduxjs/toolkit';  

const productSlice = createSlice({  
  name: 'products',  
  initialState: {  
    items: [], // Array to store products  
  },  
  reducers: {  
    setProducts(state, action) {  
      state.items = action.payload;  
    },  
    // Add more reducers as needed  
  },  
});  

export const { setProducts } = productSlice.actions;  

export default productSlice.reducer;