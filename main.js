const toggler = document.querySelector('.toggle');
const showMenu = document.querySelector('.showmenu');
const links = document.querySelectorAll('.showlink');
const aLinks = document.querySelectorAll('.showlink a');



// toggle function on click of menu
toggler.addEventListener('click', () => {
    for (let i = 0; i < links.length; i++) {
        setTimeout(function () {
            links[i].classList.add("appear");
        }, 150 * i);
    }
    showMenu.classList.toggle("appear")
})


//remove links and menu when click on link
function removeMenu() {
    for (let i = 0; i < aLinks.length; i++) {
        aLinks[i].addEventListener('click', () => {
            showMenu.classList.remove('appear')
            links[i].classList.remove("appear");
        })
    }
}

removeMenu()

