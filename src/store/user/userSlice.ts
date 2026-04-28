import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  name: string;
  email: string;
  city: string;
};

const initialState: UserState = {
  name: 'Ivan',
  email: 'ivan@example.com',
  city: 'Kyiv',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { updateName, updateEmail, updateCity } = userSlice.actions;

export const userReducer = userSlice.reducer;
