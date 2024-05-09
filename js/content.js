import { appendContent } from './helpers/appendContent.js';
import { createMeasures } from './helpers/createMeasures.js';
import {
  section,
  inner,
  iconBloc,
  temperature,
  units,
  description,
  weatherInfo,
  weatherInfoList,
} from './const/const.js';
import { directionOfwWind } from './helpers/directionOfWind.js';

const createContent = data => {
  section.classList.add('weather', 'container');
  inner.classList.add('weather__inner');
  iconBloc.classList.add('weather__icon');
  temperature.classList.add('weather__temperature');
  units.classList.add('weather__units');
  description.classList.add('weather__description');
  weatherInfo.classList.add('weather-info');
  weatherInfoList.classList.add('weather-info__list');

  const currentTemperature = Math.floor(data.main.temp - 273.15);

  temperature.textContent = Math.floor(currentTemperature);
  const weatherDescription = data.weather[0].description;
  description.textContent =
    weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
  iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  units.textContent = 'o';

  weatherInfoList.innerHTML = '';
  const measureTable = createMeasures(data, directionOfwWind);
  const addListItems = appendContent(measureTable);

  section.append(inner, description, weatherInfo);
  inner.append(iconBloc, temperature, units);
  weatherInfo.append(weatherInfoList);
  weatherInfoList.append(...addListItems);

  return section;
};

export { createContent };
