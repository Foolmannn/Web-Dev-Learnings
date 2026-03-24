// features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    add: (state, action) => {
      state.value += action.payload;
    },
    multiply:(state)=>{
      state.value *=2;
    }
  }
});

export const { increment, decrement, add ,multiply} = counterSlice.actions;
export default counterSlice.reducer;