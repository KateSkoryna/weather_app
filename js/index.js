import { getWeatherData } from "./api.js";
import { createHeader } from "./header.js";
import { createContent } from "./content.js";

const app = async () => {
    const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || "Berlin");
    const header = createHeader(weather.name);
    const main = createContent(weather);
    document.body.append(header, main);
    console.log(weather);
}

app();