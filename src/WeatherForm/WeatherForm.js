import "./WeatherForm.css";

function WeatherForm() {
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
          value={""}
          onChange={""}
        />
        <br />
        <label htmlFor="city">OR enter location:</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          value={""}
          onChange={""}
        />
        <input
          id="state"
          type="text"
          placeholder="State"
          value={""}
          onChange={""}
        />
        <input
          id="country"
          type="text"
          placeholder="Country"
          value={""}
          onChange={""}
        />
        <br />
        <label htmlFor="latitude">OR enter geolocation:</label>
        <input
          id="latitude"
          type="text"
          placeholder="Latitude"
          value={""}
          onChange={""}
        />
        <input
          id="longitude"
          type="text"
          placeholder="Longitude"
          value={""}
          onChange={""}
        />
        <br />
        <label htmlFor="unitSelect">Select units:</label>
        <select id="unitSelect" value={""} onChange={""}>
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
