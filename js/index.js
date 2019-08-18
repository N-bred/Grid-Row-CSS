const hamburguerBtn = document.querySelector('.hamburguer');
const docBar = document.querySelector('.documentation-bar');

hamburguerBtn.addEventListener('click', () => {
  docBar.classList.toggle('toggle-bar');
});

window.addEventListener('resize', function(e) {
  if (this.innerWidth >= 768) {
    docBar.classList.remove('toggle-bar');
  }
});

if (window.innerWidth < 768) {
  const navigationLinks = document.getElementById('navigation-links');
  document.body.addEventListener('click', function(e) {
    if (
      e.target.id !== docBar.id &&
      e.target.id !== hamburguerBtn.id &&
      e.target.id !== navigationLinks.id
    ) {
      docBar.classList.add('toggle-bar');
    }
  });
}

const searchForm = document.querySelector('#search-form');
const searchBar = document.querySelector('.search-bar');

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  find(searchBar.value);
});

const navLinks = [...document.querySelectorAll('#navigation-links li a')];

navLinks.forEach(link => {
  const hrefVal = link.getAttribute('href');
  const section = document.querySelector(hrefVal);
  const navbarOffset = 90;

  link.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo(0, section.offsetTop - navbarOffset);
  });
});

const year = document.getElementById('year');
const date = new Date();
year.innerText = date.getFullYear();
