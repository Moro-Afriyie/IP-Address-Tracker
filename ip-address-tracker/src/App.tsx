import React, { useEffect, useState } from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { API_KEY } from "./customHooks/apiKey";
import { IpAddressContext } from "./contexts/IpAddressContext";
import { IPResponse } from "./models/interfaces";

function App() {
  const [url, setUrl] = useState<string>(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`
  );
  const [response, setResponse] = useState<IPResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      if (data.ip) {
        setResponse(data);
        setLoading(false);
      } else {
        setLoading(false);
        alert("IP not found. using default ip");
      }
    };

    fetchData();
  }, [url]);

  const handleIPAddress = (ip: string) => {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/gm;
    if(regex.test(ip)){
      setUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=${ip}`
    );
    }
    else{
      setUrl(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );
    }
    
  };
  return (
    <main className="container">
      <IpAddressContext.Provider value={{ response, handleIPAddress, loading }}>
        <Search />
        <Display />
        <Map />
      </IpAddressContext.Provider>
    </main>
  );
}

export default App;
