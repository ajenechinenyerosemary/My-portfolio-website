// document.addEventListener('DOMContentLoaded', function() {
    
//     const currentYearElement = document.getElementById('currentYear');
//     if (currentYearElement) {
//         currentYearElement.textContent = new Date().getFullYear();
//     }

    
//     const mainMenu = document.getElementById('mainMenu');
//     const openMenu = document.getElementById('openMenu');
//     const closeMenu = document.getElementById('closeMenu');

//     if (mainMenu && openMenu && closeMenu) {
//         openMenu.addEventListener('click', () => {
//             mainMenu.style.display = 'flex';
//             mainMenu.style.top = '0';
//         });

//         closeMenu.addEventListener('click', () => {
//             mainMenu.style.top = '-100%';
//         });
//     } else {
//         console.error('One or more menu elements not found');
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Update copyright year
//     const currentYearElement = document.getElementById('currentYear');
//     if (currentYearElement) {
//       currentYearElement.textContent = new Date().getFullYear();
//     }

//     // Mobile menu functionality
//     const mainMenu = document.getElementById('mainMenu');
//     const menuToggle = document.getElementById('menuToggle');

//     if (mainMenu && menuToggle) {
//       menuToggle.addEventListener('click', () => {
//         mainMenu.classList.toggle('active');
//         if (mainMenu.classList.contains('active')) {
//           menuToggle.innerHTML = '<i class="fas fa-times fa-2x"></i>';
//         } else {
//           menuToggle.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
//         }
//       });
//     } else {
//       console.error('Menu elements not found');
//     }
//   });



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