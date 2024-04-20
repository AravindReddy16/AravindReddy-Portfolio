let menu = document.querySelector('.menu-icon');
let menu_list = document.querySelector('.menu-list');
let container = document.querySelector('.container');
let theme = document.querySelector('.theme-changer');

let isOpen = false;

menu.addEventListener('click', function() {
    menu_list.style.display = 'flex';
    isOpen = true;
});

document.querySelector('.container').addEventListener('click', function(e) {
    if(isOpen && !menu.contains(e.target)) {
        menu_list.style.display = 'none';
        isOpen = false;
    }
})

theme.addEventListener('click', function() {
    container.classList.toggle('dark-mode');
})