// OtroComponente.js

import React from "react";
import { MapaComponente } from "./MapaComponente";
import { useFetchData } from "./CustomHook";

const enlace = "src/assets/precipitaciones.json";

export const OtroComponente = () => {
  const { datos, cargando } = useFetchData(enlace);

  if (cargando) {
    return <div>Cargando mapa...</div>;
  }

  return <MapaComponente datos={datos} />;
};
