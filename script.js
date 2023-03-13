const openBox = document.getElementById('menu');
const closeBox = document.getElementById('close')
const sideBar = document.querySelector('ul')

openBox.addEventListener('click', () => {
    sideBar.classList.remove('away');
})

closeBox.addEventListener('click', () => {
    sideBar.classList.add('away');
})