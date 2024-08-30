import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartReducer';
import AuthSlice from './AuthSlice';

export default configureStore({
  reducer: {
    cart: CartReducer,
    auth: AuthSlice,
  },
});
