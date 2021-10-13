import React from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { useFetch } from "./customHooks/UseFetch";

const url = "";
function App() {
  const response: string[] | null = useFetch(url);
  return (
    <main className="App">
      <Search />
      <Display />
      <Map />
    </main>
  );
}

export default App;
