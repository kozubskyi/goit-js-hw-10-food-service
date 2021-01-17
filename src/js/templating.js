import itemTemplate from '../templates/menu-item.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');

const markup = itemTemplate(menu);

menuListRef.insertAdjacentHTML('beforeend', markup);
