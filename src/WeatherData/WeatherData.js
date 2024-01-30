import "./WeatherData.css";

function WeatherData({data, units}) {

    function processWeatherData(data) {
        const { main, weather } = data;
        const { temp, pressure, humidity, temp_min, temp_max } = main;
        const { description, icon } = weather[0];

        return { temp, pressure, humidity, temp_min, temp_max, description, icon };
    }

    // If there isn't a success, display error message
    if (data.cod !== 200) {
        return <p>Error: {data.message}</p>
    }

    const processedData = processWeatherData(data);

    return (
        <>
            <p>Temperature: {processedData.temp}{units === "imperial" ? '°F' : '°C'}</p>
            <p>Pressure: {processedData.pressure} hPa</p>
            <p>Humidity: {processedData.humidity}%</p>
            <p>Min Temperature: {processedData.temp_min}{units === "imperial" ? '°F' : '°C'}</p>
            <p>Max Temperature: {processedData.temp_max}{units === "imperial" ? '°F' : '°C'}</p>
            <p>Description: {processedData.description}</p>
            <img src={`http://openweathermap.org/img/w/${processedData.icon}.png`} alt="Weather Icon" width="100"/>
        </>
    );
}

export default WeatherData;
