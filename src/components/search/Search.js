import React from "react";
import "./Search.css"

const search = (props) => {
    return (<div className="Search">
        <input placeholder="El tiempo en..." onKeyDown={props.onChange} />
        <button type="button">Buscar</button>
    </div>)
}

export default search;