import { createSlice } from "@reduxjs/toolkit";

interface PalabraState {
  value: string;
}

const initialState: PalabraState = {
  value: "hola",
};

const palabraSlice = createSlice({
  name: "palabra",
  initialState,
  reducers: {
    agregarA: (state) => {
      state.value += "A";
    },
    agregarB: (state) => {
      state.value += "B";
    },
    agregarFizz: (state) => {
      state.value += "Fizz";
    },
    agregarBuzz: (state) => {
      state.value += "Buzz";
    },
    reiniciar: (state) => {
      state.value = "hola";
    },
  },
});

export const { agregarA, agregarB, agregarFizz, agregarBuzz, reiniciar } = palabraSlice.actions;

export default palabraSlice.reducer;