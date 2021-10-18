import * as React from "react";
import "../styles/search.scss";
import arrow from "../images/icon-arrow.svg";
import pattern from "../images/pattern-bg.png";
import { IpAddressContext } from "../contexts/IpAddressContext";

const Search: React.FunctionComponent = () => {
  const [ip, setIp] = React.useState("");
  const res = React.useContext(IpAddressContext);

  return (
    <div className="search" style={{ backgroundImage: `url(${pattern})` }}>
      <h1>IP Address Tracker</h1>
      <div className="search__input">
        <input
          type="text"
          name="ipAddress"
          id="ipAddress"
          value={ip}
          placeholder="Search for any IP address or domain "
          onChange={(e) => setIp(e.target.value)}
        />
        <button onClick={() => res?.handleIPAddress(ip)}>
          <img src={arrow} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default Search;
