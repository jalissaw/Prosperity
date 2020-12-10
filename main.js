const toggler = document.querySelector('.toggle');
const showMenu = document.querySelector('.showmenu');
const links = document.querySelectorAll('.showlink');
const aLinks = document.querySelectorAll('.showlink a');
const footBtn = document.querySelector('.footbtn');
const hamburgerSlashOne = document.querySelector('.top');
const hamburgerSlashTwo = document.querySelector('.bottom');



// toggle function on click of menu


toggler.addEventListener('click', () => {
    for (let i = 0; i < links.length; i++) {
        setTimeout(function () {
            links[i].classList.add("appear");
        }, 150 * i);
    }
    showMenu.classList.toggle("appear")
    hamburgerSlashOne.classList.toggle("color")
    hamburgerSlashTwo.classList.toggle("color")
})


//remove links and menu when link is clicked
//get rid of color of span on click as well
function removeMenu() {
    for (let i = 0; i < aLinks.length; i++) {
        aLinks[i].addEventListener('click', () => {
            showMenu.classList.remove('appear')
            links[i].classList.remove("appear");
            hamburgerSlashOne.classList.remove("color")
            hamburgerSlashTwo.classList.remove("color")
        })
    }
}

removeMenu()


//form 
const form = document.querySelector('.form')
form.addEventListener('submit', (e) => {

    const alertMessage = document.querySelector('.alert');
    const email = document.querySelector('.email').value;
    const name = document.querySelector('.name').value;
    e.preventDefault();

    if (name === '' || email === '') {
        alertMessage.innerHTML = 'Name/Email Required';
        alertMessage.style.padding = '10px';
        alertMessage.style.color = 'red';

    } else {

        alertMessage.innerHTML = 'Thanks! Someone will be in touch with you soon!';
        alertMessage.style.color = 'black';
        alertMessage.style.padding = '10px';
        alertMessage.style.textAlign = 'center';
        setTimeout(() => form.submit(), 1000);
    }
})
