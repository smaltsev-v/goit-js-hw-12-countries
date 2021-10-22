import countriesListHbs from '../templates/countries-list.hbs' 
import countryInfoHbs from '../templates/country-info.hbs'
import refs from '../js/refs.js'

const render = {
  countriesList(data) {
    const markup = countriesListHbs(data)
    refs.countriesList.innerHTML = ''
    refs.countriesList.insertAdjacentHTML('beforeend', markup)
  },
  country(data) {
    const markup = countryInfoHbs(...data)
    refs.countriesList.innerHTML = ''
    refs.countriesList.insertAdjacentHTML('beforeend', markup)
  
  }
}
export default render