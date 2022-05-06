// https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid=8&units=metric

import apiKey from "../../apikey";

let Weather = {};

Weather.getCurrentWeather = async () => {
    let weather = await (await fetch(apiKey.openweather.access.apiUrl + apiKey.openweather.access.apiKey + "&units=metric")).json();
    return weather;
}

export default Weather;