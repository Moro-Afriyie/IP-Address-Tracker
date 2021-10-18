import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../images/icon-location.svg";
import { IpAddressContext } from "../contexts/IpAddressContext";
import { useState, useEffect } from "react";
import { API_KEY } from "../customHooks/apiKey";
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  const result = React.useContext(IpAddressContext);
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${result?.response?.ip}`
      );
      const data = await res.json();
      setLat(data.location.lat);
      setLng(data.location.lng);
      console.log({ lat, lng });
    };

    fetchData();
  }, [result?.response?.ip]);
  // [51.505, -0.09];
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: marker,
              iconSize: [40, 50],
              iconAnchor: [12, 41],
            })
          }
          position={[51.505, -0.09]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
