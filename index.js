import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
