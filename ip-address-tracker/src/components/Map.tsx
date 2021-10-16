import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import marker from "../images/icon-location.svg";
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  // const position:number[] = [51.505, -0.09];

  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          // icon={<img src={marker} style={{ width: "100" }} />}
          position={[51.505, -0.09]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
