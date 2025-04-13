import React, { useEffect } from "react";
import Candidato from "./Candidato";
import { useDispatch, useSelector } from "react-redux";
import { agregarUnValor } from "../store/miSlice";
import { use } from "react";
import { Link } from "react-router-dom";

export default function Listado() {
  const [candidatos, setCandidatos] = React.useState([]);
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((data) => {
        setCandidatos(data.results);
      });
  }, []);

  const buscarUno = (id) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => {
        const provisional = [...candidatos];
        provisional[id] = { ...data.results[0] };
        setCandidatos(provisional);
      });
  };

  const guardarUno = (valor) => {
    dispatch(agregarUnValor(valor));
  };

  return (
    <>
      <h1>Listado de Candidatos</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {Array.isArray(candidatos) &&
          candidatos.map((candidato, index) => (
            <Candidato
              candidato={candidato}
              index={index}
              onBuscarUno={buscarUno}
              onGuardarUno={guardarUno}
            />
          ))}
      </ul>
      <hr />
      <h2>Lista de Trabajadores</h2>

      {listaTrabajadores &&
        listaTrabajadores.map((valor, i) =>
          valor && valor.name && valor.name.first ? (
            <Link key={i} to={`/gestion/${valor}`}>
              <button>{valor.name.first}</button>
            </Link>
          ) : null
        )}
    </>
  );
}
