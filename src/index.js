async function getWeatherData(location) {
    const APIKey = 'e5f7be41d958d90ca7cb6387141e813e';
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`);
    const responseData = await response.json();

    return responseData;
}

async function getTemperature(location, unit) {
    const responseData = await getWeatherData(location);
    const temp = responseData.main.temp;

    if (unit == "F") {
        console.log(convertToF(temp));
    } else {
        console.log(convertToC(temp));
    }
    
}

async function getDesc(location)

const convertToF = (temp) => {
    return Math.round(((temp - 273.15) * (9 / 5) + 32));
}

const convertToC = (temp) => {
    return Math.round(temp - 273.15);
}

