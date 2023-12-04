import React, { useState } from "react";
import { useFetchData } from "./CustomHook";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const enlace = "src/assets/precipitaciones.json";

const processData = (Precipitacion) => {
  const filteredKeys = Object.keys(Precipitacion).filter(
    (key) => !key.includes("Unnamed")
  );
  const filteredData = filteredKeys.map((key) => Precipitacion[key]);

  return {
    labels: filteredKeys,
    datasets: [
      {
        label: "Precipitación",
        data: filteredData,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
};

export const MiComponente = () => {
  const { datos, cargando } = useFetchData(enlace);
  const [codigoSeleccionado, setCodigoSeleccionado] = useState("");

  if (cargando) {
    return <div>Cargando datos...</div>;
  }

  const handleChange = (event) => {
    setCodigoSeleccionado(event.target.value);
  };

  const estacionSeleccionada = datos.find(
    ({ "COD-DHIME": cod }) => cod.toString() === codigoSeleccionado
  );

  const chartData = estacionSeleccionada
    ? processData(estacionSeleccionada.Precipitacion)
    : null;

  return (
    <div>
      <select onChange={handleChange} value={codigoSeleccionado}>
        <option value="">Seleccione una estación</option>
        {datos.map(({ id, "COD-DHIME": cod }) => (
          <option key={id} value={cod}>
            {cod}
          </option>
        ))}
      </select>

      {estacionSeleccionada && (
        <div>
          <h3>{estacionSeleccionada.ESTACION.toUpperCase()}</h3>
          <h3>{estacionSeleccionada.MUNICIPIO.toUpperCase()}</h3>
          <div style={{ width: "800px", height: "400px" }}>
            <Bar data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

// Si solo quieres exportar MiComponente por defecto, puedes cambiar la última línea a:
// export default MiComponente;
