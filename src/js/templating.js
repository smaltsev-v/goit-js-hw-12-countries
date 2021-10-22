  const Handlebars = require("handlebars");
import dishesList from '../menu.json'
import itemsTemplate from '../templates/menu-items.hbs'

const markup = itemsTemplate(dishesList) 
const menuRef = document.querySelector('.js-menu');


menuRef.insertAdjacentHTML('beforeend', markup);