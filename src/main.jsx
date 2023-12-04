import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MiComponente } from "./GraficaPrec.jsx";
import "./index.css";
import { MapaComponente } from "./MapaComponente.jsx";
import { OtroComponente } from "./OtroComponente.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MiComponente />
    <OtroComponente />
    <MapaComponente />
  </React.StrictMode>
);
