import menuCard from './menu.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');
const cardsMenu = createMenuCardList(menu);
const switchTheme = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const theme = localStorage.getItem('theme');


menuRef.insertAdjacentHTML('beforeend', cardsMenu)
function createMenuCardList(menu) {
    return menuCard(menu);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchTheme.addEventListener('change', switcher);
// bodyRef.classList.add(Theme.LIGHT);  
function switcher(evt) {
    const check = switchTheme.checked;
    if (check) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
    }
    else {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
    }
    localStorageChange()
}

function localStorageChange(evt) {
  const check = switchTheme.checked;
    if (check) {
        localStorage.setItem('theme', Theme.DARK);
    }
    else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}


if (theme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchTheme.checked = true;
}