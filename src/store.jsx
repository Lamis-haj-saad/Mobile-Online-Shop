import { useMemo } from "react";

import { configureStore } from '@reduxjs/toolkit';  
import productReducer from './productSlice';  

export function useDiscount(price, discountRate) {
  return useMemo(() => {
    if (!price || !discountRate) return price; // Handle edge cases
    const discountedPrice = price - price * (discountRate / 100);
    return parseFloat(discountedPrice.toFixed(2)); // Ensure two decimal places
  }, [price, discountRate]);
}

export function useStar(review) {
     const filledStars = Math.round(review || 0);
     return (
       <>
         {[...Array(5)].map((_, index) => (
           <i key={index} className={`fa fa-star ${index < filledStars ? "filled" : ""}`}></i>
         ))}
       </>
     );
   }
   

const store = configureStore({  
  reducer: {  
    products: productReducer,  
  },  
});  

export default store;