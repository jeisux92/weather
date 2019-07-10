import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./Weather.css";
import axios from "../../axios-weather";
import Spinner from "../../UI/Spinner/Spinner";
import CurrentWeather from "../../components/Weather/Weather";
import cities from "../../services/cities.json";
function Weather() {
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = e => setSearch(e.target.value);

  const clickSearchHandler = e => {
    setIsLoading(true);
    setCurrentWeather(null);
    axios
      .get(
        `current.json?key=8c3c7daa94234a59bd7140955182012&q=${search}&lang=es`
      )
      .then(response => {
        setCurrentWeather(response.data);
        setIsLoading(false);
      })
      .catch(x => setIsLoading(false));
  };

  let weather = (
    <h4>Por favor escriba el nombre del lugar que desee consultar</h4>
  );
  if (isLoading) {
    weather = <Spinner />;
  }
  if (currentWeather) {
    weather = (
      <CurrentWeather
        current={currentWeather.current}
        location={currentWeather.location}
      />
    );
  }

  return (
    <div className="Weather">
      <div className="Search-Container">
        <Search
          onChange={searchHandler}
          onClick={clickSearchHandler}
          cities={cities}
        />
      </div>
      <div className="Current-Weather-Container">{weather}</div>
    </div>
  );
}

export default Weather;
