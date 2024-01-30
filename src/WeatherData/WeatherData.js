import WeatherIcon from "../WeatherIcon/WeatherIcon";

function WeatherData({ data, units }) {
  function processWeatherData(data) {
    const { main, weather, wind } = data;
    const { temp, pressure, humidity, temp_min, temp_max } = main;
    const { description, icon } = weather[0];
    const { speed } = wind;

    return {
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      description,
      icon,
      speed,
    };
  }

  // If there isn't a success, display error message
  if (data.cod !== 200) {
    return <p>Error: {data.message}</p>;
  }

  console.log(data);

  const processedData = processWeatherData(data);

  return (
    <>
      <p>Description: {processedData.description}</p>
      <p>
        Temperature: {processedData.temp}
        {units === "imperial" ? "°F" : "°C"}
      </p>
      <p>
        Min Temperature: {processedData.temp_min}
        {units === "imperial" ? "°F" : "°C"}
      </p>
      <p>
        Max Temperature: {processedData.temp_max}
        {units === "imperial" ? "°F" : "°C"}
      </p>
      <p>Pressure: {processedData.pressure} hPa</p>
      <p>Humidity: {processedData.humidity}%</p>
      <p>
        Wind Speed: {processedData.speed}
        {units === "imperial" ? " miles/hour" : " meter/sec"}
      </p>
      <WeatherIcon icon={processedData.icon} />
    </>
  );
}

export default WeatherData;
