import { getWeatherByLocation } from './userLocation.js';
import { getWeatherData } from './api.js';
import { resetWeatherContent } from './helpers/resetWeatherContent.js';
import {
  header,
  headerContainer,
  headerCity,
  headerUnits,
  cityChange,
  cityLocation,
  cityName,
  unitsC,
  unitsF,
  cityInner,
  searchBlock,
  searchInput,
  searchBtn,
  errorBlock,
} from './const/const.js';
import { showError } from './helpers/showError.js';
import { changeUnits } from './helpers/changeUnits.js';

const createHeader = city => {
  header.classList.add('header');
  headerContainer.classList.add('container', 'header__container');
  headerCity.classList.add('header__city');
  headerUnits.classList.add('header__units');
  cityChange.classList.add('city__change', 'btn-reset');
  cityLocation.classList.add('city__location', 'btn-reset');
  cityName.classList.add('city__name');
  cityInner.classList.add('city__inner');
  unitsC.classList.add('units__button', 'button__c', 'btn-reset', 'unit-current');
  unitsF.classList.add('units__button', 'button__f', 'btn-reset');
  searchBlock.classList.add('search');
  searchInput.classList.add('search_input');
  searchBtn.classList.add('search_btn');
  errorBlock.classList.add('search__error');

  if (unitsF.classList.contains('unit-current')) {
    unitsC.classList.remove('unit-current');
  }

  searchBtn.textContent = 'ok';
  cityName.textContent = city;
  cityChange.textContent = 'Change city';
  cityLocation.textContent = 'My location';
  unitsC.textContent = 'C';
  unitsF.textContent = 'F';

  window.addEventListener('click', e => {
    if (e.target === searchInput || e.target === searchBtn || e.target === cityChange) {
      return;
    }
    headerCity.innerHTML = '';
    errorBlock.classList.remove('show-error');
    searchInput.value = '';
    headerCity.append(cityName, cityInner);
  });

  cityChange.addEventListener('click', e => {
    e.stopPropagation();
    headerCity.innerHTML = '';
    searchBlock.append(searchInput, searchBtn, errorBlock);
    headerCity.append(searchBlock);
  });

  searchBtn.addEventListener('click', async e => {
    e.stopImmediatePropagation();
    if (!searchInput.value) {
      showError(errorBlock, 'Please, enter the city');
      return;
    }
    try {
      const weather = await getWeatherData(searchInput.value);
      console.log(weather);
      if (weather.message) {
        showError(errorBlock, weather.message);
        return;
      }
      headerCity.innerHTML = '';
      resetWeatherContent(weather.name, weather);
    } catch (error) {
      console.log(error.message);
    }
  });

  cityLocation.addEventListener('click', getWeatherByLocation);
  headerUnits.addEventListener('click', changeUnits);

  header.append(headerContainer);
  headerContainer.append(headerCity, headerUnits);
  cityInner.append(cityChange, cityLocation);
  headerCity.append(cityName, cityInner);
  headerUnits.append(unitsC, unitsF);

  return header;
};

export { createHeader };
