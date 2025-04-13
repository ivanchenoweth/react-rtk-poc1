import React from "react";
import { Route, Routes } from "react-router-dom";
import Listado from "../componentes/Listado";
import Gestion from "../componentes/Gestion";

const MiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Listado />} />
      <Route path="/candidatos" element={<Listado />} />
      <Route path="/gestion" element={<Gestion />} />
    </Routes>
  );
};

export default MiRouter;
