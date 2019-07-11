import React from "react";
import classes from "./Search.module.scss";

const search = props => {
  const options = props.cities.map((x, index) => (
    <option value={x} key={index}>
      {x}
    </option>
  ));
  return (
    <div className={classes.Search}>
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
