import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L, { Icon, LatLngExpression } from "leaflet";
import marker from "../images/icon-location.svg";
import { IpAddressContext } from "../contexts/IpAddressContext";
import { useState, useEffect } from "react";
import { API_KEY } from "../customHooks/apiKey";
/// <reference path="./node_modules/@types/leaflet/index.d.ts" />
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPResponse {
  location: {
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  ip: string;
  isp: string;
}

const Map: React.FunctionComponent = () => {
  const result = React.useContext(IpAddressContext);
  const lat = result?.response?.location.lat || 0;
  const lng = result?.response?.location.lng || 0;

  console.log(lat, lng);
  return (
    <div className="map">
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={
            new Icon({
              iconUrl: marker,
              iconSize: [40, 50],
            })
          }
          position={[lat, lng]}
        ></Marker>
        <ChangeMapView lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
};

interface mapview {
  lat: number;
  lng: number;
}
function ChangeMapView<mapView>(props: mapview) {
  const map = useMap();
  map.setView(new L.LatLng(props.lat, props.lng), map.getZoom());

  return null;
}
export default Map;
