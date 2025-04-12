import React from "react";
import ReactDOM from "react-dom/client";
import MiRouter from "./MiRouter";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* The Provider component is used to connect the Redux store to the React application */}
      {/* The Provider component takes a prop called store */}
      {/* The Provider component makes the Redux store available to any nested components that need to access the Redux store */}
      {/* The store prop is the Redux store created using configureStore */}
      {/* The Provider component wraps the entire application */}
      {/* This allows any component in the application to access the Redux store */}
      {/* The Provider component uses React Context to pass the store down to all components */}
      {/* This allows components to access the store without having to pass it down manually through props */}
      <MiRouter />
    </Provider>
  </React.StrictMode>
);
