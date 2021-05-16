import { renderCountriesMarkup } from '../index.js';

import { alert } from "@pnotify/core";

export default fetchCountries

function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';
  return fetch(`${baseUrl}${searchQuery}`)
    .then(response => {
      if (response.status === 404) {
        alert({
          type: 'error',
          text: 'Unavailable country name!',
          styling: 'brighttheme',
          mode: 'light',
        });
      } else {
        return response.json();
      }
    })    
    .then((data) => {
      renderCountriesMarkup(data);
    })
}
