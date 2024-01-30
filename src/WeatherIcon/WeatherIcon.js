function WeatherIcon({ icon }) {
  return (
    <>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="Weather Icon"
        width="100"
      />
    </>
  );
}

export default WeatherIcon;
