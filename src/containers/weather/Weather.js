import React, { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import classes from "./Weather.module.scss";
import Spinner from "../../UI/Spinner/Spinner";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import cities from "../../services/cities.json";
import weatherService from "../../services/weatherService";
import days from "../../services/days.json";
import SmallWeather from "../../components/SmallWeather/SmallWeather";

function Weather() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [currentWeather, setCurrentWeather] = useState();
  const [history, setHistory] = useState();
  const [isLoading, setisLoading] = useState(false);
  const searchHandler = e => setSearch(e.target.value);

  useEffect(() => setSearch(cities[0]), []);
  const clickSearchHandler = e => {
    setisLoading(true);
    setError(false);
    setCurrentWeather(null);

    weatherService
      .getWeather(search, 7)
      .then(response => {
        setCurrentWeather(response.current);
        setisLoading(false);
        setHistory(response.history);
      })
      .catch(e => {
        setError(true);
      });
  };
  let currentClass = classes.NotLoaded;
  let weather = (
    <h4>Por favor escriba el nombre del lugar que desee consultar</h4>
  );

  if (isLoading) {
    weather = error ? (
      <h4>Se ha presentado un error en la búsqueda</h4>
    ) : (
      <Spinner />
    );
  }
  if (currentWeather) {
    currentClass = classes.CurrentWeatherContainer;
    const date = new Date(currentWeather.location.localtime);
    weather = (
      <CurrentWeather
        current={currentWeather.current}
        location={currentWeather.location}
        dayName={days[date.getDay()]}
      />
    );
  }

  let historic = null;

  if (!isLoading && history) {
    historic = (
      <div className={classes.HistoryContainer}>
        {history.forecast.forecastday.map(day => {
          const date = new Date(`${day.date} 12:00:00`);
          return (
            <div key={day.date_epoch} className={classes.History}>
              <SmallWeather day={days[date.getDay()]} weather={day.day} />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={classes.Weather}>
      <div className={classes.SearchContainer}>
        <Search
          onChange={searchHandler}
          onClick={clickSearchHandler}
          cities={cities}
        />
      </div>
      <div className={currentClass}>{weather}</div>
      {historic}
    </div>
  );
}

export default Weather;
