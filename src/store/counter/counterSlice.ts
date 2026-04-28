import { CounterState } from './types.ts';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE_VALUE = 0;

const initialState: CounterState = {
  value: INITIAL_STATE_VALUE,
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
