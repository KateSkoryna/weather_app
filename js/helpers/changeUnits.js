import { convertTemperature } from './convertTemperature.js';

export const changeUnits = el => {
  if (el.target.className.includes('unit-current')) {
    return;
  }
  const celcius = document.querySelector('.button__c');
  const fahrenheit = document.querySelector('.button__f');
  const temp = document.querySelector('.weather__temperature');

  const units = el.target.textContent;
  if (units === 'F') {
    fahrenheit.classList.add('unit-current');
    celcius.classList.remove('unit-current');
    document.querySelector('.weather__units').textContent = 'f';
  } else {
    celcius.classList.add('unit-current');
    fahrenheit.classList.remove('unit-current');
    document.querySelector('.weather__units').textContent = 'o';
  }

  const convertedTemp = convertTemperature(+temp.textContent, units);
  temp.textContent = Math.round(convertedTemp);
};
