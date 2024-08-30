import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  user: string;
  token: string;
}

const initialState: AuthState = {
  user: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      console.log('Action payload:', action.payload);
      console.log('State before update:', state);

      console.log('loggin in');
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const {login} = authSlice.actions;
export default authSlice.reducer;
