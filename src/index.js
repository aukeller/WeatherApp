import  WeatherModule from "./WeatherModule";

const weather = WeatherModule();

// DOM selectors
const locationInput = document.querySelector('input');
const getWeatherBtn = document.querySelector('button');

const display = document.querySelector('.display-container');
const tempDisplay = document.querySelector('.temperature');
const tempDesc = document.querySelector('.description');

const radioBtns = document.querySelectorAll('input[type="radio"');

const loadingComponent = document.querySelector('.loading-component');


getWeatherBtn.addEventListener('click', function() {
    const unit = setUnit();

    loadingComponent.hidden = false;

    weather.getAPIData(locationInput.value)
    .then((response) => {
        loadingComponent.hidden = true;

        const weatherData = weather.getWeatherData(response, unit);

        tempDisplay.textContent = `${weatherData.temperatue}\u00B0`;
        tempDesc.textContent = weatherData.description;
        setBackground(weatherData.main);
    });
});

function setUnit() {
    for (const radio of radioBtns) {
        if (radio.checked) {
            return radio.value;
        }
    }
}

function setBackground(id) {
    if (id < 600) {
        display.style.backgroundImage = 'url(' + require('./img/rain.jpg') + ')'
    } else if (id > 600 && id < 700) {
        display.style.backgroundImage = 'url(' + require('./img/snow.jpeg') + ')';
    } else if (id > 700 && id < 800) {
        display.style.backgroundImage = 'url(' + require('./img/fog.jpg') + ')'
    } else if (id == 800) {
        display.style.backgroundImage = 'url(' + require('./img/clear.png') + ')'
    } else {
        display.style.backgroundImage = 'url(' + require('./img/clouds.jpg') + ')'
    }
}
