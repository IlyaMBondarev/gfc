
document.querySelector('.page').classList.add('loaded');

let burgerInput = document.getElementById('burger');
let lists = document.querySelector('.header').querySelectorAll('ul');
let toScroll = document.querySelectorAll('.toScroll');
let specialScroll = document.querySelector('.specialScroll');
let specialScrollRows = specialScroll.querySelector('.about__rows');
let specialScrollRow = specialScrollRows.querySelectorAll('.about__row');

toScroll.forEach(toScroll => {
    if (toScroll.offsetTop > document.documentElement.scrollTop + document.documentElement.clientHeight - 150) {
        toScroll.classList.add('hidden');
    }
})


specialScrollRow.forEach(row => {
    if (row.offsetTop > document.documentElement.scrollTop + document.documentElement.clientHeight - 250) {
        row.classList.add('row-hidden');
    }
})

function scrollCheck() {
    toScroll.forEach(toScroll => {
        if (toScroll.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight - 250) {
            toScroll.classList.add('visible');
            toScroll.classList.remove('hidden');
        }
    })
    specialScrollRow.forEach(row => {
        if (row.offsetTop <= document.documentElement.scrollTop + document.documentElement.clientHeight - 250) {
            row.classList.add('row-visible');
            row.classList.remove('row-hidden');
        }
    })
}

window.addEventListener('scroll', scrollCheck);

function closeBurger() {
    burgerInput.checked = false;
}

lists.forEach(list => {
    let links = list.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            if (toScroll[i]) {
                toScroll[i].scrollIntoView({behavior: 'smooth'});
                closeBurger();
            }
        })
    }
})

