import "./styles.css";
import React from "react";
import getWeather from "./Weather";
import Weatherdata from "./WeatherData";

export default function App() {
  const [city, setCity] = React.useState("");

  const [weather, setWeather] = React.useState({
    data: "",
    load: true
  });
  const getData = async (e) => {
    e.preventDefault();
    if (city === "") {
      alert("enter City Name");
    } else {
      const data = await getWeather(city);
      setWeather({ data: data, load: false });
      setCity("");
    }
  };
  const ClearData = (e) => {
    e.preventDefault();
    setWeather({ load: true });
  };
  const { load } = weather;

  return (
    <div className="App">
      <div className="Conatiner">
        <h2>Weather App</h2>
        <form className="FormData">
          <label className="LabelData">Enter City : </label>
          <input
            className="InputData"
            type="text"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            autocomplete="off"
            value={city}
          />
          <button className="Button" onClick={(e) => getData(e)}>
            Search
          </button>
          <button className="Button btn" onClick={(e) => ClearData(e)}>
            Clear
          </button>
        </form>
        {load ? null : <Weatherdata result={weather} />}
      </div>
    </div>
  );
}
