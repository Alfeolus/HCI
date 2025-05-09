document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.burger');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open');
    });
});
