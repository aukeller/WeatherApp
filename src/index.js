import  WeatherModule from "./WeatherModule";

const weather = WeatherModule();

// DOM selectors
const locationInput = document.querySelector('input');
const getWeatherBtn = document.querySelector('button');

const tempDisplay = document.querySelector('.temperature');
const tempDesc = document.querySelector('.description');

getWeatherBtn.addEventListener('click', function() {
    weather.getAPIData(locationInput.value)
    .then((response) => {
        const weatherData = weather.getWeatherData(response, 'F');

        tempDisplay.textContent = weatherData.temperatue;
        tempDesc.textContent = weatherData.description;
    });
});