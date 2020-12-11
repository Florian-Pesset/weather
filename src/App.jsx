import "./App.css";
import CityContext from "./contexts/CityContext";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("Nantes");

  return (
    <div className="App">
      <CityContext.Provider value={{ city, setCity }}>
        <Weather />
      </CityContext.Provider>
    </div>
  );
}

export default App;
