import * as React from "react";
import { IpAddressContext } from "../contexts/IpAddressContext";
import "../styles/display.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IDisplayProps {}
interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
const Display: React.FunctionComponent<IDisplayProps> = (props) => {
  // const response = React.useContext<IPResponse | null>(IpAddressContext);
  // console.log("context response: ", response);
  return (
    <div className="display">
      <div className="display__section">
        <h6 className="title">ip address</h6>
        <div className="info">
          <h2>192.212.174.101</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">location</h6>
        <div className="info">
          <h2>Booklyn, NY 10001</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">time zone</h6>
        <div className="info">
          <h2>UTC-05:00</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">isp</h6>
        <div className="info">
          <h2>SpaceX Starlink</h2>
        </div>
      </div>
    </div>
  );
};

export default Display;
