import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import render from '../js/render.js'

const info = {
showResult(data) {
  const countriesCount = data.length;
  
  if (countriesCount > 10) {
    const message = "Too many matches found"
    const type = 'info'
    showNotification(message, type)
  } else if ((countriesCount >= 2)&&(countriesCount <= 10)){
    render.countriesList(data)
  } else if (countriesCount === 1) {
    render.country(data)
  } else {
    const message = "Matches not found"
    const type = 'error'
    showNotification(message, type) 
  }
  },
  showNotification(message, type) {
  const myNotification = alert({
    type: `${type}`,
    text: `${message}`,
    mode: 'light',
    delay: 2000,
    sticker: false,
    maxTextHeight: null,
    addClass: 'notification',
  });

  myNotification.on('click', () => {
    myNotification.close();
  });
}

}

export default info