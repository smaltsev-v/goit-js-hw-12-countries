import './sass/main.scss';
import countriesAll from './templates/countries.hbs';
import country from './templates/country.hbs';
import Fetch from './partials/fetchCountries';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import debounce from 'lodash.debounce';
defaultModules.set(PNotifyMobile, {});

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  countriesContainer: document.querySelector('.countriesConrainer'),
};

const fetchF = new Fetch();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function clearCountriesContainer() {
  refs.countriesContainer.textContent = '';
}

function createCountries(e) {
  return countriesAll(e);
}
function createCountry(e) {
  return country(e);
}
function appendCountry(e) {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountry(e));
}

function appendCountries(e) {
  refs.countriesContainer.insertAdjacentHTML('beforeend', createCountries(e));
}

function onSearch(e) {
  fetchF.queary = e.target.value;

  clearCountriesContainer();

  fetchF.fetchCountries().then(countries => {
    console.log(countries);
    if (countries.length > 10) {
      return alert({
        text: 'Too many marches found. Please enter a more specific query',
      });
    }

    if (countries.length >= 2 && countries.length <= 10) {
      console.log(countries);
      return appendCountries(countries);
    }
    if (countries.length <= 1) {
      appendCountry(countries);
    }
  });
}
