import "./WeatherForm.css";
import { useState } from "react";

function WeatherForm() {
  const [zipCode, setZipCode] = useState("");
  const [units, setUnits] = useState("imperial");
  return (
    <div className="container">
      <h1 id="temp">{/* Temp */}</h1>
      <p id="humidity">{/* Humidity */}</p>
      <p id="desc">{/* Description */}</p>
      <form id="form">
        <label htmlFor="zip">Enter Zip Code:</label>
        <input
          id="zip"
          type="number"
          placeholder="Zip code"
          title="Please Enter a valid Zip Code"
          pattern="^\d{5}(?:[-\s]\d{4})?$"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <br />
        <label htmlFor="unitSelect">Select units:</label>
              <select id="unitSelect" value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="metric">Metric (°C, m/s)</option>
          <option value="imperial">Imperial (°F, mph)</option>
        </select>
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default WeatherForm;
