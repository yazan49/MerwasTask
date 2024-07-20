import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart) {
        console.log('Item Already in Cart');
      } else {
        state.cart.push({...action.payload});
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeFromCart;
    },
  },
});
export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
