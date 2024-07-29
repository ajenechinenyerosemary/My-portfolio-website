document.addEventListener('DOMContentLoaded', function() {
  const mainMenu = document.getElementById('mainMenu');
  const menuToggle = document.getElementById('menuToggle');

  if (mainMenu && menuToggle) {
      menuToggle.addEventListener('click', () => {
          mainMenu.classList.toggle('active');
          if (mainMenu.classList.contains('active')) {
              menuToggle.innerHTML = '<i class="fas fa-times fa-2x"></i>';
          } else {
              menuToggle.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
          }
      });
  } else {
      console.error('Menu elements not found');
  }
});