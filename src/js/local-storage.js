const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//! Не корректно работает, если брать клик на document.querySelector('.theme-switch__control')
// const themeSwitchControlRef = document.querySelector('.theme-switch__control');

// const themeSwitchTrackRef = document.querySelector('.theme-switch__track');
const toggleInputRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

console.dir(toggleInputRef);

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
} else if (localStorage.getItem('theme') === Theme.DARK) {
  toggleInputRef.checked = true;
}

body.classList.add(localStorage.getItem('theme'));

// themeSwitchTrackRef.addEventListener('click', changeTheme);
//! Почему работает с toggleInputRef, если у него размеры 0 х 0 px?
toggleInputRef.addEventListener('click', changeTheme);

function changeTheme() {
  if (localStorage.getItem('theme') === Theme.LIGHT) {
    localStorage.setItem('theme', Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else if (localStorage.getItem('theme') === Theme.DARK) {
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}
