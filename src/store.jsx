import { useMemo } from "react"; 
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './components/redux/CartSlice.js';

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

const loadStateFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('reduxState');
    return savedState ? JSON.parse(savedState) : undefined; // Return undefined if no state is found
  } catch (error) {
    console.error('Could not load state', error);
    return undefined; // Return undefined in case of error
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    localStorage.setItem('reduxState', JSON.stringify(state));
  } catch (error) {
    console.error('Could not save state', error);
  }
};

const store = configureStore({  
  reducer: {  
    cart : cartReducer,
  },  
  preloadedState: loadStateFromLocalStorage(), // Load persisted state into the store
});  


store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});


export default store;
