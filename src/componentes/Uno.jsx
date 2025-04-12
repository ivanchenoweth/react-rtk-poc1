import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  guardarMiNonbre,
  incrementarPuntuacion,
  modificarUnValor,
  agregarUnValor,
  eliminarUnValor,
} from "../store/misSlice";

const Uno = () => {
  /*
   * useSelector to get/read the state from Redux store
   * useDispatch to dispatch/affect actions to the Redux store
   * Dispatch an action to update the state
   * This action is defined in the slice (misSlice.js)
   * The action type is "unValor/guardarMiNonbre"
   * The action payload is the new value for miNombre
   * The action is dispatched to the Redux store
   * The action is dispatched using the dispatch function from useDispatch
   *   // The miNombre state is accessed using the useSelector hook
   *   // The puntuacion state is accessed using the useSelector hook
   */
  const dispatch = useDispatch();

  const miNombreAhora = useSelector((state) => state.unValor.miNombre);

  const miPuntuacionAhora = useSelector((state) => state.otroValor.puntuacion);

  const modificar = () => {
    dispatch(guardarMiNonbre("Bob esponja"));
  };

  const incrementar = () => {
    dispatch(incrementarPuntuacion());
  };

  const modificarArray = () => {
    dispatch(
      modificarUnValor({
        indice: 0,
        nuevoNombre: "React",
        nuevoInicio: "Mayo 2013",
      })
    );
  };

  const agregar = () => {
    dispatch(
      agregarUnValor({
        nombre: "Vue",
        inicio: 2014,
      })
    );
  };

  const eliminar = () => {
    dispatch(eliminarUnValor("Vue"));
  };

  return (
    <>
      <h1>{miNombreAhora}</h1>
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={modificar}>Modificar miNombre </button>
      <button onClick={incrementar}>Incrementar puntuación </button>
      <button onClick={modificarArray}>Modificar un Valor </button>
      <button onClick={agregar}>Agregar un Valor </button>
      <button onClick={eliminar}>Eliminar un Valor </button>
    </>
  );
};

export default Uno;
