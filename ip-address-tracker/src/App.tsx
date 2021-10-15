import React from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { useFetch } from "./customHooks/UseFetch";
import { API_KEY } from "./customHooks/apiKey";

interface IPResponse {
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
const url = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`;
function App() {
  const response: IPResponse | null = useFetch(url);
  const location = response?.location;
  const ip = response?.ip;
  const isp = response?.isp;
  console.log({ location });
  console.log(ip);
  console.log(isp);
  // console.log(response);
  return (
    <main className="container">
      <Search />
      <Display />
      <Map />
    </main>
  );
}

export default App;
