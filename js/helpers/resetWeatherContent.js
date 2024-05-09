import { createContent } from '../content.js';
import { createHeader } from '../header.js';
import { createFooter } from '../footer.js';

export const resetWeatherContent = (city, weather) => {
  localStorage.setItem('city', JSON.stringify(city));
  document.body.innerHTML = '';
  const header = createHeader(city);
  const content = createContent(weather);
  const footer = createFooter();
  document.body.append(header, content, footer);
};
