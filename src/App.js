import "./App.css";
import { useEffect, useState, useRef } from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Card from "./components/Card";

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");
  const apiRef = useRef();

  const weatherApi = async () => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=87e794f41494a00278a7066a3e7e4d87&units=metric`
    );
    const apiData = await api.json();
    setCity(apiData);
  };

  apiRef.current = weatherApi;
  useEffect(() => {
    if (search) apiRef.current();
  }, [search, setSearch]);

  return (
    <div className="container">
      <div className="main">
        <h1 className="main-heading">Simple Weather App</h1>
        <div className="ipu-btn-div">
          <InputField
            value={search}
            type="text"
            className="input"
            placeholder="Search for a city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => weatherApi()}>Search</Button>
        </div>
        <div className="card-div">
          <Card weatherData={search} city={city} />
        </div>
      </div>
    </div>
  );
}

export default App;
