import { createContent } from '../content.js';
import { createHeader } from '../header.js';

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const resetWeatherContent = (city, weather) => {
  localStorage.setItem('city', JSON.stringify(city));
  document.body.innerHTML = '';
  const header = createHeader(city);
  const content = createContent(weather);
  document.body.append(header, content);
};
