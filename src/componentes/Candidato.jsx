import React from "react";

const Candidato = ({ candidato, index, onBuscarUno, onGuardarUno }) => {
  return (
    <>
      <li key={index}>
        <img src={candidato.picture.large} alt="Candidato" />
        <p>
          {candidato.name.first} {candidato.name.last}
        </p>
        <p>
          {candidato.location.city}, {candidato.location.country}
        </p>
        <p>{candidato.email}</p>
        <p>Phone: {candidato.phone}</p>
        <p>Age: {candidato.dob.age}</p>
        <button onClick={() => onBuscarUno(index)}>Ocultar</button>
        <button onClick={() => onGuardarUno(candidato, index)}>Guardar</button>
      </li>
      <hr />
    </>
  );
};

export default Candidato;
