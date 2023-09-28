const menuButton = document.getElementById('open-menu');
const navContainer = document.querySelector('.navContainer');
const requestBtnContainer = document.querySelector('.requestBtnContainer ');

let isMenuOpen = false;

function closeMenu() {
    navContainer.classList.remove('show');
    requestBtnContainer.classList.remove('show');
    menuButton.parentElement.classList.remove('close');
    isMenuOpen = false;
}

menuButton.addEventListener('click', () => {
  if (!isMenuOpen) {
    navContainer.classList.add('show');
    requestBtnContainer.classList.add('show');
    menuButton.parentElement.classList.add('close');
    isMenuOpen = true;
  } else {
    closeMenu()
  }
});

document.body.addEventListener('click', (event) => {
  // Check if the click occurred outside of the menu
  if (isMenuOpen && !menuButton.contains(event.target)) {
    closeMenu();
  }
});
