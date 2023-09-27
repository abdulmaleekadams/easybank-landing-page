const menuButton = document.getElementById('open-menu')
const navContainer = document.querySelector('.navContainer')
const requestBtnContainer  = document.querySelector('.requestBtnContainer ')

menuButton.addEventListener('click', () => {
   navContainer.classList.toggle('show')
    requestBtnContainer.classList.toggle('show')
    menuButton.parentElement.classList.toggle('close')
})

