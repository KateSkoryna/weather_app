const getWeatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fdd207a18ea1478cc0e3cbd8082bdf1&lang=en`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export {getWeatherData};