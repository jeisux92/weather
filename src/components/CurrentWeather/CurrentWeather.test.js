import React from "react";
import ReactDOM from "react-dom";
import CurrentWeather from "./CurrentWeather";

const sum = (a, b) => a + b;

it("Check Render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CurrentWeather
      current={{ condition: "Nublado" }}
      location={{}}
      dayName=""
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
