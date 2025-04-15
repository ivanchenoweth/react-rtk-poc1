import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Trabajador from "./Trabajador";

const Gestion = () => {
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );
  console.log("listaTrabajadores Gestion ", listaTrabajadores);

  return (
    <>
      <h1>Gestión de Trabajadores</h1>
      <p>Aquí puedes gestionar los trabajadores seleccionados.</p>
      <Link to="/candidatos">
        <button>Volver al Listado de candidatos</button>
      </Link>
      <div>
        {listaTrabajadores &&
          listaTrabajadores.map((valor, i) => (
            <Trabajador valor={valor} key={i} />
          ))}
      </div>
    </>
  );
};

export default Gestion;
