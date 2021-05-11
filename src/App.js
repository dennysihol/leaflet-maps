import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {

  return (
    <div className="App">
      <MapContainer center={[-6.17539,106.82718]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.17539,106.82718]}>
          <Popup>
            Monumen Nasional <br /> Jakarta, Indonesia.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
