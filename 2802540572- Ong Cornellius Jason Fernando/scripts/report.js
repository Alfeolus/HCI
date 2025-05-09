document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.burger');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    if (toggleBtn && dropdownMenu) {
        toggleBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('open');
        });
    }
});
