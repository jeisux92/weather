import React from "react"
import Search from "../../components/search/Search";
import "./Weather.css"

import {  } from "react"
function Weather() {


    const searchHandler = (e) => {
        alert(2)
    }


    return (<div className="Weather">
        <Search onChange={searchHandler} />
    </div>)
}


export default Weather;