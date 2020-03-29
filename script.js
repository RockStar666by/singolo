// slider
let items = document.querySelectorAll('.elem');
let currentElem = 0;
let isEnabled = true;

function changeCurrent(n) {
    currentElem = (n + items.length) % items.length;
}

function hide(direction) {
    isEnabled = false;
    items[currentElem].classList.add(direction);
    items[currentElem].addEventListener('animationend', function() {
        this.classList.remove('active3', direction);
    })
}

function show(direction) {
    items[currentElem].classList.add('next', direction);
    items[currentElem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active3');
        isEnabled = true;
    })
}

function previous(n) {
    hide('to_right');
    changeCurrent(n - 1);
    show('from_left');
}

function next(n) {
    hide('to_left');
    changeCurrent(n + 1);
    show('from_right');
}
document.querySelector('.right').addEventListener('click', function() {
    if (isEnabled) {
        previous(currentElem)
    }
});
document.querySelector('.left').addEventListener('click', function() {
    if (isEnabled) {
        next(currentElem)
    }
});



// slider black screen
const PHONE_VERT = document.getElementById('phone-vert');
const BLACK_SCREEN_1 = document.getElementById('black-screen-1');
const PHONE_HOR = document.getElementById('phone-hor');
const BLACK_SCREEN_2 = document.getElementById('black-screen-2');

PHONE_VERT.addEventListener('click', () => {
    if (BLACK_SCREEN_1.classList.contains('hidden')) {
        BLACK_SCREEN_1.classList.remove('hidden');
    } else BLACK_SCREEN_1.classList.add('hidden');
});
BLACK_SCREEN_1.addEventListener('click', () => {
    BLACK_SCREEN_1.classList.add('hidden');
});

PHONE_HOR.addEventListener('click', () => {
    if (BLACK_SCREEN_2.classList.contains('hidden')) {
        BLACK_SCREEN_2.classList.remove('hidden');
    } else BLACK_SCREEN_2.classList.add('hidden');
});
BLACK_SCREEN_2.addEventListener('click', () => {
    BLACK_SCREEN_2.classList.add('hidden');
});


// menu and image active indicator
const MENU = document.getElementById('menu');
const MENU2 = document.getElementById('menu2');
const IMG = document.getElementById('images');


MENU.addEventListener('click', (event) => {

    MENU.querySelectorAll('.menu-text').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    menu_function();

});

MENU2.addEventListener('click', (event) => {
    MENU2.querySelectorAll('.tag').forEach(elem => elem.classList.remove('active2'));
    event.target.classList.add('active2');
    let imageList = IMG.getElementsByTagName('li');
    let temp;
    for (let i = 0; i < imageList.length - 1; i++) {
        temp = imageList[i].innerHTML;
        imageList[i].innerHTML = imageList[i + 1].innerHTML;
        imageList[i + 1].innerHTML = temp;
    }
});

IMG.addEventListener('click', (event) => {
    IMG.querySelectorAll('img').forEach(el => el.classList.remove('border'));
    event.target.classList.add('border');
});


// form message
const BUTTON = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close');
const GET_FORM = document.getElementById('form');

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();

    if (subject) document.getElementById('subject_msg').innerText = ('Subject:  ' + subject);
    else document.getElementById('subject_msg').innerText = 'Without subject';

    if (description) document.getElementById('description_msg').innerText = ('Description:  ' + description);
    else document.getElementById('description_msg').innerText = 'Without description';

});

GET_FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('subject_msg').innerText = '';
    document.getElementById('description_msg').innerText = '';
    document.getElementsByTagName('form')[0].reset();
    document.getElementById('message-block').classList.add('hidden');
});

// sticky header
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// side menu bar function
function menu_function() {
    let x = document.getElementById("navbar");
    let x2 = document.getElementById("burger-button");
    let x3 = document.getElementById("logo-home");
    if (x.className === "navbar") {
        x.className += " responsive";
        x2.className += " rotate";
        x3.className += " move";
    } else {
        x.className = "navbar";
        x2.className = "burger-button";
        x3.className = "logo-home";
    }
}