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
    country: string;
    region: string;
    timezone: string;
  };
  ip: string;
  isp: string;
}
function App() {
  const [url, setUrl] = useState<string>(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
  );
  const [response, setResponse] = useState<IPResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
      console.log(response);
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
