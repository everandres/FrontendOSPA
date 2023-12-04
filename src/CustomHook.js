// useFetchData.js

import { useState, useEffect } from "react";
import { fetchPrecipitation } from "./FetchData";

export const useFetchData = (enlace) => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerDatos = async () => {
      setCargando(true);
      try {
        const datosObtenidos = await fetchPrecipitation(enlace);
        setDatos(datosObtenidos);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
      setCargando(false);
    };

    obtenerDatos();
  }, [enlace]); // Dependencia 'enlace' para re-ejecutar el hook si cambia la URL

  return { datos, cargando };
};
