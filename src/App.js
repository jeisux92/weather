import React from 'react';
import './App.css';
import Weather from './containers/weather/Weather';

function App() {
  return (
    <div className="App">
      <div className="Weather-Container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
