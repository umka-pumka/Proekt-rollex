import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice"; 
import cartReducer from "./slices/cartSlice";
import favoritesReducer from './slices/favoritesSlice';
const store = configureStore({
    reducer: {
        posts: postsReducer, 
        cart: cartReducer,
        favorites: favoritesReducer,
    },
});

export default store; 
