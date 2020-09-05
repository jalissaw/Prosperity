const toggle = document.querySelector('.toggle');
const showMenu = document.querySelector('.showmenu');
const links = document.querySelectorAll('.showlink');


toggle.addEventListener('click', () => {
    for (let i = 0; i < links.length; i++) {
        setTimeout(function () {
            links[i].classList.toggle("appear");
        }, 150 * i);
    }
    showMenu.classList.toggle("appear")
})


