async function getWeatherData(location) {
    const APIKey = 'e5f7be41d958d90ca7cb6387141e813e';
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`);
    const responseData = await response.json();

    return responseData;
}

async function getTemperature(location, unit) {
    const responseData = await getWeatherData(location);
    const temp = responseData.main.temp;

    if (unit == "farenheit") {
        return convertToF(temp);
    }
    
}

const convertToF = (temp) => {
    return ((temp - 273.15) * (9 / 5) + 32);
}

getTemperature('farenheit');