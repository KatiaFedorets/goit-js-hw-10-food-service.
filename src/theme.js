

const themeSwitchToggler = document.querySelector('#theme-switch-toggle');
const menuContainer = document.querySelector('.js-menu');
const body = document.body;
const THEME_KEY = 'theme';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

themeSwitchToggler.addEventListener('change', themeSwitcher);

themeSwitchToggler.checked = false;
function themeSwitcher() {
    if (this.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem(THEME_KEY, 'DARK');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem(THEME_KEY, 'LIGHT');
    }
}

window.onload = checkLocalStorageTheme;

function checkLocalStorageTheme() {
    const localStorageTheme = localStorage.getItem(THEME_KEY);

    if (localStorageTheme === null || localStorageTheme === 'LIGHT') {
        themeSwitchToggler.checked = false;
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeSwitchToggler.checked = true;
    }
}
