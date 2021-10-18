import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import marker from "../images/icon-location.svg";
import { IpAddressContext } from "../contexts/IpAddressContext";
import { useState, useEffect } from "react";
import { API_KEY } from "../customHooks/apiKey";
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  const result = React.useContext(IpAddressContext);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(-1);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${result?.response?.ip}`
      );
      const data = await res.json();
      setLat(data.location.lat);
      setLng(data.location.lng);
    };

    fetchData();
  }, [result?.response?.ip]);

  return (
    <div className="map">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          // icon={<img src={marker} style={{ width: "100" }} />}
          position={[lat, lng]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
