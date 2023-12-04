import React, { useState, useEffect } from "react";
import { useFetchData } from "./CustomHook";

const enlace = "src/assets/precipitaciones.json";

export const MiComponente = () => {
  const { datos, cargando } = useFetchData(enlace);

  if (cargando) {
    return <div>Cargando datos...</div>; // Puedes reemplazar esto con un spinner o cualquier otro indicador visual
  }

  return (
    <div>
      {datos.slice(0, 1).map(({ _id, ESTACION, MUNICIPIO }) => (
        <div key={_id}>
          <h1>{ESTACION.toUpperCase()}</h1>
          <h1>{MUNICIPIO.toUpperCase()}</h1>
        </div>
      ))}
    </div>
  );
};
