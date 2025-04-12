import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "unValor",
  initialState: {
    miNombre: "JAB",
    edad: 18,
    bibliotecas: [
      { nombre: "react", inicio: "2013" },
      { nombre: "redux", inicio: "2015" },
    ],
  },
  reducers: {
    guardarMiNonbre: (state, action) => {
      state.miNombre = action.payload;
    },
    modificarUnValor: (state, action) => {
      console.log("action.payload", action.payload);
      console.log("state.bibliotecas", state.bibliotecas);
      const { indice, nuevoNombre, nuevoInicio } = action.payload;
      state.bibliotecas[indice].nombre = nuevoNombre;
      state.bibliotecas[indice].inicio = nuevoInicio;
    },
    agregarUnValor: (state, action) => {
      state.bibliotecas.push(action.payload);
    },
    eliminarUnValor: (state, action) => {
      state.bibliotecas = state.bibliotecas.filter(
        (valor) => valor.nombre !== action.payload
      );
    },
  },
});

export const otroSlice = createSlice({
  name: "unValor",
  initialState: { puntuacion: 0 },
  reducers: {
    incrementarPuntuacion: (state) => {
      state.puntuacion += 1;
    },
  },
});

export const { incrementarPuntuacion } = otroSlice.actions;
export const { guardarMiNonbre } = origenSlice.actions;
export const { modificarUnValor } = origenSlice.actions;
export const { agregarUnValor } = origenSlice.actions;
export const { eliminarUnValor } = origenSlice.actions;
