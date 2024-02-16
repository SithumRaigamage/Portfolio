const menuItem = document.getElementById('menu-item');
const submenu = document.getElementById('submenu');
const arrow = document.querySelector('.arrow');

menuItem.addEventListener('click', () => {
  submenu.classList.toggle('show');
  arrow.classList.toggle('rotate');
});


  