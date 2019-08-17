const hamburguerBtn = document.querySelector('.hamburguer');
const docBar = document.querySelector('.documentation-bar');

hamburguerBtn.addEventListener('click', () => {
  docBar.classList.toggle('toggle-bar');
});

const year = document.getElementById('year');
const date = new Date();
year.innerText = date.getFullYear();
