// // Toggle mobile menu
// const openMenu = document.getElementById('openMenu');
// const closeMenu = document.getElementById('closeMenu');
// const mainMenu = document.getElementById('mainMenu');

// openMenu.addEventListener('click', () => {
//     mainMenu.style.display = 'flex';
//     openMenu.style.display = 'none';
//     closeMenu.style.display = 'block';
// });

// closeMenu.addEventListener('click', () => {
//     mainMenu.style.display = 'none';
//     openMenu.style.display = 'block';
//     closeMenu.style.display = 'none';
// });


// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu functionality
    const mainMenu = document.getElementById('mainMenu');
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (mainMenu && openMenu && closeMenu) {
        openMenu.addEventListener('click', () => {
            mainMenu.style.display = 'flex';
            mainMenu.style.top = '0';
        });

        closeMenu.addEventListener('click', () => {
            mainMenu.style.top = '-100%';
        });
    } else {
        console.error('One or more menu elements not found');
    }
});