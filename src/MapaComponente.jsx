// MapaComponente.js

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapaComponente = ({ datos }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {datos.map((dato, index) => (
        <Marker key={index} position={[dato.LAT, dato.LON]}>
          <Popup>
            {dato.ESTACION} <br /> {dato.MUNICIPIO}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
