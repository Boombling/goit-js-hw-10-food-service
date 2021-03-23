import menuCard from './menu.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');
const cardsMenu = createMenuCardList(menu);
const switchTheme = document.querySelector('.theme-switch__track');
const bodyRef = document.querySelector('body');
// const theme = JSON.parse(localStorage.getItem('theme'));

menuRef.insertAdjacentHTML('beforeend', cardsMenu)
function createMenuCardList(menu) {
    return menuCard(menu);
}

switchTheme.addEventListener('click', switcher)

bodyRef.classList.add('light-theme');
function switcher(evt) {
    if (evt.target) {
        bodyRef.classList.toggle('light-theme');
        bodyRef.classList.toggle('dark-theme');
        // localStorage.setItem('theme', 'dark');
    }
    
    // addLightTheme(evt)
    // addDarkTheme(evt)
    // themes (evt)
}

// localStorage.setItem('theme', 'dark');
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// function addDarkTheme(evt) {
//     if (evt.target) {
//         bodyRef.classList.remove('light-theme')
//         bodyRef.classList.add('dark-theme')
//     }
// }
// function addLightTheme(evt) {
//     if (bodyRef.classList === 'dark-theme') {
//         bodyRef.classList.remove('dark-theme')
//         bodyRef.classList.add('light-theme')
//     }
    
// }
// function themes() {
    if (bodyRef !== 'dark-theme') {
        localStorage.setItem('theme', true);
}
    else {
        localStorage.setItem('theme', false);
    }
// }