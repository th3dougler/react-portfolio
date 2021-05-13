import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename='/'>
    <App />
  </Router>,
  document.getElementById("root")
);
