// OtroComponente.jsx

import React from "react";
import GraficoDeBarrasComponente from "./GraficoDeBarrasComponente";
import useFetchData from "./useFetchData";

const enlace = "src/assets/precipitaciones.json";

export const OtroComponente = () => {
  const { datos, cargando } = useFetchData(enlace);

  if (cargando) {
    return <div>Cargando gráfico...</div>;
  }

  // Asegúrate de que los datos de precipitación estén en el formato correcto
  const datosPrecipitacion = datos[0]?.Precipitacion; // Reemplaza con la estructura correcta de tus datos

  return (
    <div>
      {datosPrecipitacion && (
        <GraficoDeBarrasComponente datosPrecipitacion={datosPrecipitacion} />
      )}
    </div>
  );
};
