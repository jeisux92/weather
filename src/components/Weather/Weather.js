import React from "react";
import classes from "./Weather.module.scss";
const Weather = props => {
  const current = props.current;
  const location = props.location;
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let date = new Date(location.localtime);
  const dayName = days[date.getDay()];

  return (
    <div className={classes.CurrentWeather}>
      <div className={classes.Information}>
        <div className={classes.LeftContainer}>
          <h4>{location.name}</h4>
          <h5>
            {dayName}, {date.toLocaleTimeString().substring(date.toLocaleTimeString().length-3,3)}
          </h5>
          <h5>{current.condition.text}</h5>
        </div>
        <div className={classes.LeftContainer}>
          <h5>Humedad: {current.humidity}%.</h5>
          <h5>Viento: a {current.wind_kph} km/h.</h5>
        </div>
      </div>
      <img src={current.condition.icon} alt="icon weather" />
    </div>
  );
};

export default Weather;
