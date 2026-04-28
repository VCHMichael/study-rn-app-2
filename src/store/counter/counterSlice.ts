import { CounterState } from './types.ts';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
    decrement: state => {
      state.value = state.value - 1;
    },
    reset: state => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
