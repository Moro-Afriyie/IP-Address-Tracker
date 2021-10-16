import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  const position: number[] = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
