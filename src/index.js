import React from "react";
import ReactDOM from "react-dom/client";
import MiRouter from "./router/MiRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MiRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
