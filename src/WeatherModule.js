export default function WeatherModule() {
    async function getAPIData(location) {
        const APIKey = 'e5f7be41d958d90ca7cb6387141e813e';
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`, {mode: 'cors'});
        const responseData = await response.json();
    
        return responseData;
    }

    function getWeatherData(responseData, unit) {
        let temp = responseData.main.temp;
        const main = responseData.weather[0].id;
        const desc = responseData.weather[0].description;
    
        if (unit == "F") {
            temp = convertToF(temp);
        } else {
            temp = convertToC(temp);
        }
        
        return {
            temperatue: temp,
            description: desc,
            main: main,
        }
    }

    const convertToF = (temp) => {
        return Math.round(((temp - 273.15) * (9 / 5) + 32));
    }
    
    const convertToC = (temp) => {
        return Math.round(temp - 273.15);
    }

    return { getAPIData, getWeatherData};
    
}

