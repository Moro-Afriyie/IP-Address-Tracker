import React from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { useFetch } from "./customHooks/UseFetch";
import { API_KEY } from "./customHooks/apiKey";
import { IpAddressContext } from "./contexts/IpAddressContext";

interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
// with ip address
// `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8`;
function App() {
  // const response: IPResponse | null = useFetch(url);
  // const location = response?.location;
  // const ip = response?.ip;
  // const isp = response?.isp;
  // console.log({ location });
  // console.log(ip);
  // console.log(isp);
  // console.log(response);
  return (
    <main className="container">
      <IpAddressContext.Provider value="">
        <Search />
        <Display />
        <Map />
      </IpAddressContext.Provider>
    </main>
  );
}

export default App;
