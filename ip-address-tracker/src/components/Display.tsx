import * as React from "react";
import { IpAddressContext } from "../contexts/IpAddressContext";
import "../styles/display.scss";
import ClipLoader from "react-spinners/ClipLoader";

const Display: React.FunctionComponent = () => {
  const result = React.useContext(IpAddressContext);
  const ip = result?.response?.ip;
  const city = result?.response?.location.city;
  const region = result?.response?.location.region;
  const timezone = result?.response?.location.timezone;
  const isp = result?.response?.isp;
  return (
    <div className="display">
      <div className="display__section">
        <h6 className="title">ip address</h6>
        <div className="info">
          <h2>{ip || <ClipLoader />}</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">location</h6>
        <div className="info">
          <h2>{city + ", " + region || <ClipLoader />}</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">time zone</h6>
        <div className="info">
          <h2>{`UTC${timezone || "00:00"}`}</h2>
        </div>
      </div>
      <div className="display__section">
        <h6 className="title">isp</h6>
        <div className="info">
          <h2>{isp || <ClipLoader />}</h2>
        </div>
      </div>
    </div>
  );
};

export default Display;
