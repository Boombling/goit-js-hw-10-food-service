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

bodyRef.classList.add(Theme.LIGHT);  
switchTheme.addEventListener('change', switcher);
function switcher(evt) {
    const check = switchTheme.checked;
    if (check) {
        changeTheme(Theme.DARK, Theme.LIGHT)
    }
    else {
        changeTheme(Theme.LIGHT, Theme.DARK)
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

function changeTheme(x, y) {
    bodyRef.classList.add(x);
    bodyRef.classList.remove(y);
    
}
// function changeLightTheme() {
//     bodyRef.classList.add(Theme.LIGHT);
//     bodyRef.classList.remove(Theme.DARK);
// }