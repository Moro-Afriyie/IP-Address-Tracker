import * as React from "react";
import "../styles/map.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IMapProps {}

const Map: React.FunctionComponent<IMapProps> = (props) => {
  return (
    <div className="map">
      <h1>Map</h1>
    </div>
  );
};

export default Map;
