import React, { useEffect, useState } from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { useFetch } from "./customHooks/UseFetch";
import { API_KEY } from "./customHooks/apiKey";
import { IpAddressContext } from "./contexts/IpAddressContext";

interface IPResponse {
  location: {
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  ip: string;
  isp: string;
}
function App() {
  const [url, setUrl] = useState<string>(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
  );
  const [lat, setLat] = useState(51.505);
  const [lng, setlng] = useState(-0.09);
  // const [response, setResponse] = useState<IPResponse>({
  //   location: {
  //     region: "--",
  //     city: "--",
  //     timezone: "--",
  //     lat: 4.86992,
  //     lng: -2.58404,
  //   },
  //   ip: "--",
  //   isp: "--",
  // });
  const [response, setResponse] = useState<IPResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
      setLat(data.location.lat);
      setlng(data.location.lng);
    };

    fetchData();
  }, [url]);

  const handleIPAddress = (ip: string) => {
    setUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );
    console.log(url);
    console.log(response);
  };
  return (
    <main className="container">
      <IpAddressContext.Provider value={{ response, handleIPAddress }}>
        <Search />
        <Display />
        <Map />
      </IpAddressContext.Provider>
    </main>
  );
}

export default App;
