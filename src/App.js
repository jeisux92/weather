import React from "react";
import classes from "./App.module.scss";
import Weather from "./containers/Weather/Weather";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.WeatherContainer}>
        <Weather />
      </div>
    </div>
  );
}

export default App;
