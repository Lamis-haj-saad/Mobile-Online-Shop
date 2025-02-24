import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  userId: localStorage.getItem("userId") || uuidv4(), // Si pas d'ID, on en crée un
};

// Sauvegarder l'ID dès le début s'il vient d'être généré
if (!localStorage.getItem("userId")) {
  localStorage.setItem("userId", initialState.userId);
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserId: (state) => {
      state.userId = uuidv4(); // Génère un nouvel ID
      localStorage.setItem("userId", state.userId); // Met à jour le localStorage
    },
  
    clearUserId: (state) => {
      state.userId = null; 
      localStorage.removeItem("userId");
    }
  }
});

export const { resetUserId, clearUserId } = userSlice.actions;
export default userSlice.reducer;
