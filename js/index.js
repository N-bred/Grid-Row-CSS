const hamburguerBtn = document.querySelector('.hamburguer');
const docBar = document.querySelector('.documentation-bar');

hamburguerBtn.addEventListener('click', () => {
  docBar.classList.toggle('toggle-bar');
});

const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('.search-bar');

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  find(searchBar.value);
});

const year = document.getElementById('year');
const date = new Date();
year.innerText = date.getFullYear();
