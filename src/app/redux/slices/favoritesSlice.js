import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addToLike: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex === -1) {
        state.items.push(action.payload);
      }
    },
    removeFromLike: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id); 
    },
    clearFavorites: (state) => {
      state.items = []; 
    },
  },
});

export const { addToLike, removeFromLike, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
