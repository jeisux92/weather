import React, { useState } from "react";
import classes from "./CurrentWeather.module.scss";
const CurrentWeather = props => {
  const [isDegree, setIsDegree] = useState(true);
  const current = props.current;
  const location = props.location;

  let date = new Date(location.localtime);

  const temp = <h1>{isDegree ? current.temp_c : current.temp_f}</h1>;
  return (
    <div className={classes.CurrentWeather}>
      <div className={classes.Information}>
        <h4>{location.name}</h4>
        <div className={classes.LeftContainer}>
          <h5>
            {props.dayName}, {date.toLocaleTimeString()}
          </h5>
          <h5>{current.condition.text}</h5>
        </div>
        <div className={classes.RightContainer}>
          <h5>Humedad: {current.humidity}%.</h5>
          <h5>Viento: a {current.wind_kph} km/h.</h5>
        </div>
      </div>
      <div className={classes.Temperature}>
        <img src={current.condition.icon} alt="icon weather" />
        {temp}
        <sup>
          <span
            onClick={() => setIsDegree(true)}
            style={{ fontWeight: isDegree ? "bolder" : "normal" }}
          >
            °C
          </span>
          {" | "}
          <span
            onClick={() => setIsDegree(false)}
            style={{ fontWeight: !isDegree ? "bolder" : "normal" }}
          >
            °F
          </span>
        </sup>
      </div>
    </div>
  );
};

export default CurrentWeather;
