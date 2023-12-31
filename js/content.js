import { appendContent } from "./helpers/appendContent.js";
import { directionOfwWind } from "./helpers/directionOfWind.js";

const createContent = (data) => {

    const main = document.createElement('main');
    const section = document.createElement('section');
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const iconBloc = document.createElement('img');
    const temperature = document.createElement('h2');
    const units = document.createElement('span');
    const description = document.createElement('p');
    const weatherInfo = document.createElement('div');
    const weatherInfoList = document.createElement('ul');

    section.classList.add('weather');
    container.classList.add('container', 'weather__container');
    inner.classList.add('weather__inner');
    iconBloc.classList.add('weather__icon');
    temperature.classList.add('weather__temperature');
    units.classList.add('weather__units');
    description.classList.add('weather__description');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info__list');

    temperature.textContent = Math.floor(data.main.temp);
    const weatherDescription = data.weather[0].description;
    description.textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    units.textContent = 'o';

    const a = [
        { title: 'Wind', measure: data.wind.speed + ' m/s, ' + directionOfwWind(data.wind.deg) },
        { title: 'Pressure', measure: data.main.pressure + ' mmHg' },
        { title: 'Humidity', measure: data.main.humidity + ' %' },
        { title: 'Clouds', measure: data.clouds.all + ' %' }
    ];

    const addListItems = appendContent(a);

    main.append(section);
    section.append(container);
    container.append(inner, description, weatherInfo);
    inner.append(iconBloc, temperature, units);
    weatherInfo.append(weatherInfoList);
    weatherInfoList.append(...addListItems);

    return main;
};

export { createContent };