import React, { useState } from "react";
import Search from "../../components/Search/Search";
import "./Weather.css";
import axios from "../../axios-weather";
import Spinner from "../../UI/Spinner/Spinner";

function Weather() {
  const [search, setSearch] = useState("");
  const [currentWeather, setCurrentWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = e => setSearch(e.target.value);

  const clickSearchHandler = e => {
    setIsLoading(true);
    setCurrentWeather(null);
    axios
      .get(`current.json?key=8c3c7daa94234a59bd7140955182012&q=${search}`)
      .then(response => {
        setCurrentWeather(response.data);
        setIsLoading(false);
      })
      .catch(x => setIsLoading(false));
  };

  let img = null;
  if (isLoading) {
    img = <Spinner />;
  }
  if (currentWeather) {
    img = (
      <img src={currentWeather.current.condition.icon} alt="icon weather" />
    );
  }

  return (
    <div className="Weather">
      <Search onChange={searchHandler} onClick={clickSearchHandler} />
      {img}
    </div>
  );
}

export default Weather;
