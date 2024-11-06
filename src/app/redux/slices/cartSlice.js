import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              
                existingItem.quantity += 1;
            } else {
            
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
