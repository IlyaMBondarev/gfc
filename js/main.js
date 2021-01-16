
document.querySelector('.page').classList.add('loaded');

//появление элементов при скролле

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

//скролл при нажатии на пункт меню

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

//жалюзи
let itemsBlock = document.querySelector('.offer__items');
let items = itemsBlock.querySelectorAll('.item');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        let previous = itemsBlock.querySelector('.item-active');
        if (previous !== items[i]) {
            if (previous) {
                previous.classList.remove('item-active');
                previous.querySelector('.item__title').classList.remove('item__title-hidden');
                previous.querySelector('.mask').classList.remove('mask-visible');
                items[i].querySelector('.item__title').classList.remove('item__title-rotated');
            }
            items[i].classList.add('item-active');
            items[i].querySelector('.item__title').classList.add('item__title-hidden');
            items[i].querySelector('.mask').classList.add('mask-visible');
            for (let j = 0; j < items.length; j++) {
                if (j !== i) {
                    items[j].querySelector('.item__title').classList.add('item__title-rotated');
                }
            }
        } else {
            previous.classList.remove('item-active');
            previous.querySelector('.item__title').classList.remove('item__title-hidden');
            previous.querySelector('.mask').classList.remove('mask-visible');
            for (let j = 0; j < items.length; j++) {
                if (j !== i) {
                    items[j].querySelector('.item__title').classList.remove('item__title-rotated');
                }
            }
        }
    })
}

document.addEventListener('click', () => {
    if (event.target !== itemsBlock && !(itemsBlock.contains(event.target))) {
        let previous = itemsBlock.querySelector('.item-active');
        if (previous) {
            previous.classList.remove('item-active');
            previous.querySelector('.item__title').classList.remove('item__title-hidden');
            previous.querySelector('.mask').classList.remove('mask-visible');
            for (let j = 0; j < items.length; j++) {
                items[j].querySelector('.item__title').classList.remove('item__title-rotated');
            }
        }
    }
})