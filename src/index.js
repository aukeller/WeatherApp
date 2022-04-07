import  WeatherModule from "./WeatherModule";

const weather = WeatherModule();

// DOM selectors
const locationInput = document.querySelector('input');
const getWeatherBtn = document.querySelector('button');

const tempDisplay = document.querySelector('.temperature');
const tempDesc = document.querySelector('.description');

const radioBtns = document.querySelectorAll('input[type="radio"');

getWeatherBtn.addEventListener('click', function() {
    const unit = setUnit();
    weather.getAPIData(locationInput.value)
    .then((response) => {
        const weatherData = weather.getWeatherData(response, unit);

        tempDisplay.textContent = `${weatherData.temperatue}\u00B0`;
        tempDesc.textContent = weatherData.description;
    });
});

function setUnit() {
    for (const radio of radioBtns) {
        if (radio.checked) {
            return radio.value;
        }
    }
}