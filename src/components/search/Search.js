import React from "react";
import "./Search.css";

const search = props => {
  const options = props.cities.map((x, index) => (
    <option value={x} key={index}>
      {x}
    </option>
  ));
  return (
    <div className="Search">
      <select placeholder="El tiempo en..." onChange={props.onChange}>
        {options}
      </select>
      <button type="button" onClick={props.onClick}>
        Buscar
      </button>
    </div>
  );
};

export default search;
