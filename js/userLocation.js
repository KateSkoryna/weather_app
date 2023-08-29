import { resetWeatherContent } from "./helpers/resetWeatherContent.js";
import { getWeatherData } from "./api.js";

export const getWeatherByLocation = () => {
const options = {
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0
    }
const success = async (pos) => {
        const crd = pos.coords;

        const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=8459023e4c6943858502752b144ec214`
        )

const result = await response.json();      
    const weather = await getWeatherData(result.features[0].properties.city);
resetWeatherContent(result.features[0].properties.city, weather);
    }

    const error = (err) => {
        console.log(err.code + ' ' + err.message);
    }
    navigator.geolocation.getCurrentPosition(success, error, options);
};
