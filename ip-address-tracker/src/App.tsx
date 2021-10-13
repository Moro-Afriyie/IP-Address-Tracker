import React from "react";
import "./App.scss";
import Display from "./components/Display";
import Search from "./components/Search";
import Map from "./components/Map";
import { useFetch } from "./customHooks/UseFetch";

function App() {
  return (
    <main className="App">
      <Search />
      <Display />
      <Map />
    </main>
  );
}

export default App;
