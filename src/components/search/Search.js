import React from "react";
import "./Search.css";

const search = props => {
  const inputHandler = e => {
    if (e.which === 13 || e.keyCode === 13) {
      props.onClick();
    }
    return true;
  };
  return (
    <div className="Search">
      <input
        placeholder="El tiempo en..."
        onChange={props.onChange}
        onKeyDown={inputHandler}
      />
      <button type="button" onClick={props.onClick}>
        Buscar
      </button>
    </div>
  );
};

export default search;
