import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],  // your cart items array
    },
    reducers: {
      // Add Item Reducer
      addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
  
        if (existingItem) {
          existingItem.quantity++;  // increase quantity if already exists
        } else {
          state.items.push({ name, image, cost, quantity: 1 }); // add new with qty 1
        }
      },
  
      // Remove Item Reducer
      removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
        // payload should be item.name
      },
  
      // Update Quantity Reducer
      updateQuantity: (state, action) => {
        const { name, amount } = action.payload; // extracting details
        const item = state.items.find(i => i.name === name);
  
        if (item) {
          item.quantity = amount; // update quantity value
        }
      },
    },
  });
  
  export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
  export default cartSlice.reducer;
  