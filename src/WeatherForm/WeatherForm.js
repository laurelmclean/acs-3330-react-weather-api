import "./WeatherForm.css";
import WeatherData from "../WeatherData/WeatherData";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState } from "react";

function WeatherForm() {
  const [zipCode, setZipCode] = useState("");
  const [units, setUnits] = useState("imperial");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  async function getWeather() {
    if (zipCode === "") {
      alert("Please enter a ZIP code.");
      return;
    }

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=${units}&appid=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    console.log(weatherData);
  };
  return (
    <div className="container">
      <h1>WeatherPulse</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label>Enter Zip Code:</label>
        <input
          id="zip"
          type="number"
          placeholder="Zip code"
          title="Please Enter a valid Zip Code"
          pattern="\d{5}"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <br />
        <label htmlFor="unitSelect">Select units:</label>
        <select
          id="unitSelect"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        >
          <option value="metric">Metric (°C)</option>
          <option value="imperial">Imperial (°F)</option>
        </select>
        <br />
        <div>
          <input
            type="radio"
            id="imperial"
            name="unit"
            value="imperial"
            checked={units === "imperial"}
            onChange={(e) => setUnits(e.target.value)}
          />
          <label>Fahrenheit</label>
        </div>

        <div>
          <input
            type="radio"
            id="metric"
            name="unit"
            value="metric"
            checked={units === "metric"}
            onChange={(e) => setUnits(e.target.value)}
          />
          <label>Celsius</label>
        </div>
        <button type="submit">Search</button>
      </form>
      {/* Conditional Rendering - error and weather data */}
      {error && <ErrorMessage error={error} />}
      {weatherData ? (
        <WeatherData data={weatherData} units={units} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default WeatherForm;
