import React from "react";

const Trabajador = ({ valor, index }) => {
  return (
    <>
      <li>
        <img src={valor.picture.large} alt="Trabajador" />
        <p>
          {valor.location.city}, {valor.location.country}
        </p>
        <p>Phone: {valor.phone}</p>
        <p>{valor.email}</p>
        <p>
          {valor.name.first} {valor.name.last}
        </p>
      </li>
      <hr />
    </>
  );
};

export default Trabajador;
