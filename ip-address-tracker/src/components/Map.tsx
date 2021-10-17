import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import marker from "../images/icon-location.svg";
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  // const position:number[] = [51.505, -0.09];
  const lat = 51.505;
  const long = -0.09;

  return (
    <div className="map">
      <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          // icon={<img src={marker} style={{ width: "100" }} />}
          position={[lat, long]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
