import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Uno from "./componentes/Uno";
import Dos from "./componentes/Dos";

const MiRouter = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/uno">
        <button>Ir al UNO</button>
      </Link>
      <Link to="/dos">
        <button>Ir al DOS</button>
      </Link>
      <Routes>
        <Route path="/uno" element={<Uno />} />
        <Route path="/dos" element={<Dos />} />
      </Routes>
    </Router>
  );
};

export default MiRouter;
