import fetchCountries from './fetchCountries.js';
import refs from './refs.js';
import debounce from 'lodash.debounce';
import countriesListTpl from '../templates/countries-list.hbs';
import oneCountryTpl from '../templates/one-country.hbs';

refs.inputRef.addEventListener('input', debounce(onSearch, 500));

function onSearch() {
  const searchQuery = getSearchQuery();

  if (!searchQuery) {
    return;
  }

  fetchCountries(searchQuery).then(data => {
    refs.containerRef.innerHTML = '';

    if (data.length > 10) {
      return alert('Please, make more specific query');
    } else if (data.length > 1 && data.length <= 10) {
      renderCountriesList(data);
    } else {
      renderOneCountry(data);
    }
  });
}

function getSearchQuery() {
  return refs.inputRef.value;
}

function renderOneCountry(data) {
  const oneCountryMarkup = oneCountryTpl(data);
  refs.containerRef.insertAdjacentHTML('beforeend', oneCountryMarkup);
}

function renderCountriesList(data) {
  const countriesListMarkup = countriesListTpl(data);
  refs.containerRef.insertAdjacentHTML('beforeend', countriesListMarkup);
}
