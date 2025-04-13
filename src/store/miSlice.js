import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload];
    },
  },
});

export const departamentosSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: [],
  },
  reducers: {
    setDepartamentos: (state, action) => {
      state.departamentos = action.payload;
    },
  },
});

export const { agregarUnValor } = miSlice.actions;
