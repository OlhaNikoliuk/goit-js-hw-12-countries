import './css/styles.css';
import countriesListTemp from './markup/countries.hbs';
import countryTemp from './markup/country.hbs';
import fetchCountries from './js/fetchCountries';

import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";

const debounce = require('lodash.debounce')

export { renderCountriesMarkup }


const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.input'),
  countryContainer: document.querySelector('.country-container')
}


refs.input.addEventListener('input', debounce(countrySearch, 500))


function countrySearch() {
  let searchQuery = refs.input.value;
  fetchCountries(searchQuery);
}


function renderCountriesMarkup(data) {
  refs.input.value = '';
  refs.countryContainer.innerHTML = '';
  
  if (data.length < 10 && data.length > 1) {
    refs.countryContainer.insertAdjacentHTML('beforeend', countriesListTemp(data))
  } else if (data.length === 1) {
    refs.countryContainer.insertAdjacentHTML('beforeend', countryTemp(data[0]))
  } else if (data.length > 10) {
    alert({
      type: 'error',
      text: 'To many matches found. Please enter a more specific query!',
      styling: 'brighttheme',
      mode: 'light'
    });
  }
}
