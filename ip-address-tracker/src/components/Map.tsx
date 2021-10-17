import * as React from "react";
import "../styles/map.scss";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import marker from "../images/icon-location.svg";
import { IpAddressContext } from "../contexts/IpAddressContext";
// import Marker from "react-leaflet-enhanced-marker";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  // const position:number[] = [51.505, -0.09];
  const result = React.useContext(IpAddressContext);
  const lat = result?.response?.location.lat;
  const long = result?.response?.location.lng;

  return (
    <div className="map">
      <MapContainer
        center={[lat || 51.505, long || -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          // icon={<img src={marker} style={{ width: "100" }} />}
          position={[lat || 51.505, long || -0.09]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
