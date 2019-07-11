import axios from "axios";

const weatherService = {
  getWeather(place, days) {
    return new Promise((resolve, reject) =>
      axios
        .all([
          axios.get(
            `http://api.apixu.com/v1/current.json?key=8c3c7daa94234a59bd7140955182012&q=${place}&lang=es`
          ),
          axios.get(
            `http://api.apixu.com/v1/forecast.json?key=8c3c7daa94234a59bd7140955182012&q=${place}&lang=es&days=${days}`
          )
        ])
        .then(
          axios.spread((current, history) => {
            resolve({ current: current.data, history: history.data });
          })
        )
        .catch(error => reject(error))
    );
  }
};
export default weatherService;
