import menuCard from './menu.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');
const cardsMenu = createMenuCardList(menu);
const switchTheme = document.querySelector('.theme-switch__track');
const bodyRef = document.querySelector('body');

menuRef.insertAdjacentHTML('beforeend', cardsMenu)
function createMenuCardList(menu) {
    return menuCard(menu);
}

switchTheme.addEventListener('click', switcher)

bodyRef.classList.add('light-theme');
function switcher(evt) {
    if (evt.target) {
        bodyRef.classList.toggle('light-theme')
        bodyRef.classList.toggle('dark-theme')
    }
}
