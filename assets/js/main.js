const body = document.querySelector('body');
const darkButton = document.querySelector('#darkButton');
const p = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');
const a = document.querySelectorAll('main a');
const main = document.querySelector('#projetos');
const img = document.querySelectorAll('.icone');
const footer = document.querySelector('#footer');
const footerText = document.querySelectorAll('#footer a');

document.getElementById("darkButton").addEventListener("click", myFunction);

function myFunction() {
    let i = body.classList.contains("dark");

    if (!i) {
        body.classList.add('dark');
        document.querySelector('h1').classList.add('darkText');
        footer.classList.add('darkBg');
        main.classList.add('darkBg');
        darkButton.innerHTML = '☀'; 
        darkButton.innerHTML += '<span> - Light Mode</span>'; 
        darkMode();
    } else {
        body.classList.remove('dark');
        document.querySelector('h1').classList.remove('darkText');
        footer.classList.remove('darkBg');
        main.classList.remove('darkBg');
        darkButton.innerHTML = '🌙'; 
        darkButton.innerHTML += '<span> - Dark Mode</span>'; 
        whiteMode()
        
    }
}

function darkMode() {
    for (let value of p) {
       value.classList.add('darkText');
    }

    for (let value of h2) {
        value.classList.add('darkText');
    }

    for (let value of a) {
        value.classList.add('darkText-2');
    }

    for (let i = 0; i < img.length; i++) {
        const imgLink = ['./assets/img/github-w.png',
        './assets/img/linkedin-w.png',
        './assets/img/twitter-w.png',
        './assets/img/instagram-w.png',
        './assets/img/o-email-w.png']
        img[i].setAttribute('src', imgLink[i]);
    }

    for (let value of footerText) {
        value.classList.add('darkText-3');
    }
}

function whiteMode() {
    for (let value of p) {
        value.classList.remove('darkText');
    }

    for (let value of h2) {
        value.classList.remove('darkText');
    }

    for (let value of a) {
        value.classList.remove('darkText-2');
    }

    for (let i = 0; i < img.length; i++) {
        const imgLink = ['./assets/img/github.png',
        './assets/img/linkedin.png',
        './assets/img/twitter.png',
        './assets/img/instagram.png',
        './assets/img/o-email.png']
        img[i].setAttribute('src', imgLink[i]);
    }

    for (let value of footerText) {
        value.classList.remove('darkText-3');
    }
}

