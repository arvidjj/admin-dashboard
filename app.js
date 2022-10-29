/*CHANGE THEME*/
const root = document.documentElement;
const setTheme = theme => root.className = theme;
const themeButton = document.querySelector('#themeButton');

function toggleTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    if (newTheme === 'dark') {
        themeButton.classList.remove('unFilledIcon');
        themeButton.classList.add('filledIcon');
        themeButton.style.color = 'white';
    } else {
        themeButton.classList.remove('filledIcon');
        themeButton.classList.add('unFilledIcon');
        themeButton.style.color = 'black';
    }
    root.className = newTheme;
}
//////////////////////////