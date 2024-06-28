const navToggle = document.querySelector('header nav');
const navList = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
