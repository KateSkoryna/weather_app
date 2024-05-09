import { getWeatherData } from './api.js';
import { createHeader } from './header.js';
import { createContent } from './content.js';
import { createFooter } from './footer.js';

const app = async () => {
  const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Berlin');
  const header = createHeader(weather.name);
  const main = createContent(weather);
  const footer = createFooter();
  document.body.append(header, main, footer);
};

app();
