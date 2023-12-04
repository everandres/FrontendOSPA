import React from "react";
import { useFetchData } from "./CustomHook";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const enlace = "src/assets/precipitaciones.json";

export const MiComponente = () => {
  const { datos, cargando } = useFetchData(enlace);

  if (cargando) {
    return <div>Cargando datos...</div>;
  }

  const processData = (datos) => {
    return datos
      .slice(0, 1)
      .map(({ _id, ESTACION, MUNICIPIO, Precipitacion }) => {
        const filteredKeys = Object.keys(Precipitacion).filter(
          (key) => !key.includes("Unnamed")
        );
        const filteredData = filteredKeys.map((key) => Precipitacion[key]);

        const chartData = {
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

        const maximoValor = Math.max(...filteredData);
        const llaveMaximoValor =
          filteredKeys[filteredData.indexOf(maximoValor)];

        return {
          _id,
          ESTACION,
          MUNICIPIO,
          chartData,
          maximoValor,
          llaveMaximoValor,
        };
      });
  };

  const processedData = processData(datos);

  return (
    <div>
      {processedData.map(
        ({
          _id,
          ESTACION,
          MUNICIPIO,
          chartData,
          maximoValor,
          llaveMaximoValor,
        }) => (
          <div key={_id}>
            <h3>{ESTACION.toUpperCase()}</h3>
            <h3>{MUNICIPIO.toUpperCase()}</h3>
            <div style={{ width: "800px", height: "400px" }}>
              <Bar data={chartData} />
            </div>
            <h4>
              La mayor lluvia fue el día {llaveMaximoValor} con un valor de{" "}
              {maximoValor} mm
            </h4>
          </div>
        )
      )}
    </div>
  );
};
