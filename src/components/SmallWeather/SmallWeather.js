import React from "react";
import classes from "./SmallWeather.module.scss";

const SmallWeather = props => (
  <div className={classes.SmallWeather}>
    <h6>{props.day.substring(0, 3)}.</h6>
    <img src={props.weather.condition.icon} alt="History image" />
    <div className={classes.Temperature}>
      <h6>
        <strong>{props.weather.maxtemp_c} °C</strong>
      </h6>
      <h6>, {props.weather.mintemp_c} °C</h6>
    </div>
  </div>
);

export default SmallWeather;
