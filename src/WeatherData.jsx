import React from "react";
export default function Weatherdata({ result }) {
  const { data } = result;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const { data: WeatherData } = data;
  return (
    <div className="Results">
      <div className="data">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <p className="Temperature">
        {Math.floor(WeatherData.main.temp - 273.15)}
        &nbsp;
        <sup>o</sup>C
      </p>
      <img
        className="icon"
        src={`https://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`}
        alt=""
      />

      <table>
        <tr>
          <td>City</td>
          <td>{WeatherData.name}</td>
          <td>Conditions</td>
          <td>{WeatherData.weather[0].main}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{WeatherData.main.humidity}</td>
          <td>Pressure</td>
          <td>{WeatherData.main.pressure}</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{WeatherData.wind.speed}</td>
          <td>Country Code</td>
          <td>{WeatherData.sys.country}</td>
        </tr>
        <tr>
          <td>Max Temperature</td>
          <td>
            {Math.round(WeatherData.main.temp_min - 273.15)}
            <sup>o</sup>C
          </td>
          <td>Min Temperature</td>
          <td>
            {Math.ceil(WeatherData.main.temp_max - 273.15)}
            <sup>o</sup>C
          </td>
        </tr>
      </table>
    </div>
  );
}
