
document.querySelector('.page').classList.add('loaded');

//появление элементов при скролле

let burgerInput = document.getElementById('burger');
let lists = document.querySelector('.header').querySelectorAll('ul');
let toScroll = document.querySelectorAll('.toScroll');
let specialScroll = document.querySelector('.specialScroll');
let specialScrollRows = specialScroll.querySelector('.about__rows');
let specialScrollRow = specialScrollRows.querySelectorAll('.about__row');

toScroll.forEach(toScroll => {
    if (toScroll.offsetTop > document.documentElement.scrollTop + (0.8*document.documentElement.clientHeight)) {
        toScroll.classList.add('hidden');
    }
})


specialScrollRow.forEach(row => {
    if (row.offsetTop > document.documentElement.scrollTop + (0.8*document.documentElement.clientHeight)) {
        row.classList.add('row-hidden');
    }
})

function scrollCheck() {
    toScroll.forEach(toScroll => {
        if (toScroll.offsetTop <= document.documentElement.scrollTop + (0.8*document.documentElement.clientHeight)) {
            toScroll.classList.add('visible');
            toScroll.classList.remove('hidden');
        }
    })
    specialScrollRow.forEach(row => {
        if (row.offsetTop <= document.documentElement.scrollTop + (0.8*document.documentElement.clientHeight)) {
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
let indexOfActiveItem = -1;
let arrowsBlock = document.querySelector('.offer__navigation');
let arrowPrev = arrowsBlock.querySelector('.offer__prev');
let arrowNext = arrowsBlock.querySelector('.offer__next');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== items[i]) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.remove('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                    items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
                }
                indexOfActiveItem = i;
                items[indexOfActiveItem].classList.add('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
                for (let j = 0; j < items.length; j++) {
                    if (j !== indexOfActiveItem) {
                        items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                        items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
                    }
                }
            } else {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
                for (let j = 0; j < items.length; j++) {
                    if (j !== indexOfActiveItem) {
                        items[j].querySelector('.item__title_hor').classList.add('item__title-visible');
                        items[j].querySelector('.item__title_ver').classList.remove('item__title-visible');
                    }
                }
                indexOfActiveItem = -1;
            }
        } else {
            if (items[indexOfActiveItem] !== items[i]) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.remove('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                    items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
                }
                indexOfActiveItem = i;
                items[indexOfActiveItem].classList.add('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
            } else {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
                indexOfActiveItem = -1;
            }
        }
    })
}

document.addEventListener('click', (event) => {
    let isOnItems = false;
    items.forEach(item => isOnItems = item.contains(event.target) ? true : isOnItems);
    if (!(isOnItems) && !(arrowsBlock.contains(event.target))) {
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== -1) {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
                for (let i = 0; i < items.length; i++) {
                    items[i].querySelector('.item__title_hor').classList.add('item__title-visible');
                    items[i].querySelector('.item__title_ver').classList.remove('item__title-visible');
                }
                indexOfActiveItem = -1;
            }
        } else if (indexOfActiveItem !== -1) {
            items[indexOfActiveItem].classList.remove('item-active');
            items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
            items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
            indexOfActiveItem = -1;
        }
    }
    isOnItems = false;
})

arrowNext.addEventListener('click', () => {
    if (indexOfActiveItem === -1) {
        indexOfActiveItem = 0;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    } else if (indexOfActiveItem === items.length - 1) {
        items[indexOfActiveItem].classList.remove('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
        indexOfActiveItem = 0;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    } else {
        items[indexOfActiveItem].classList.remove('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
        indexOfActiveItem++;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }

    }
})

arrowPrev.addEventListener('click', () => {
    if (indexOfActiveItem === -1) {
        indexOfActiveItem = items.length - 1;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    } else if (indexOfActiveItem === 0) {
        items[indexOfActiveItem].classList.remove('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
        indexOfActiveItem = items.length - 1;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    } else {
        items[indexOfActiveItem].classList.remove('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
        indexOfActiveItem--;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
        for (let j = 0; j < items.length; j++) {
            if (j !== indexOfActiveItem) {
                items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }

    }
})

// svg-анимация

let svg = document.getElementById('svg');
let svgMap = document.getElementById('map');
let svgPathsBlock = document.getElementById('svg-paths');
let svgPaths = [
    [3, 0, 200],
    [6, 3, 150],
    [5, 6, 200],
    [4, 6, 200],
    [2, 4, 150],
    [7, 0, 150],
    [1, 7, 250],
    [8, 5, 200],
    [9, 8, 200],
    [10, 9, 200],
    [11, 10, 200],
]
let svgItemsBlock = document.getElementById('svg');
let svgItems = svgItemsBlock.querySelectorAll('img');
let speed = 600;
let halfOfSpeed = speed/2;
let scope = 1;
let scopedArray = 1;

$(document).ready(function() {
    svgMap.style.opacity = '1';
    setTimeout(() => {
        if (document.documentElement.scrollWidth < 500) {
            scope = 0.25;
            scopedArray = 0.5;
        } else if (document.documentElement.scrollWidth < 1281) {
            scope = 0.5;
            scopedArray = 0.75;
        }
        for(let i = 0; i < svgPaths.length; i++) {
            let x = svgItems[svgPaths[i][0]].offsetLeft + (svgItems[svgPaths[i][0]].offsetWidth) / 2;
            let y = svgItems[svgPaths[i][0]].offsetTop + (svgItems[svgPaths[i][0]].offsetHeight) / 2;
            let xe = svgItems[svgPaths[i][1]].offsetLeft + (svgItems[svgPaths[i][1]].offsetWidth) / 2;
            let ye = svgItems[svgPaths[i][1]].offsetTop + (svgItems[svgPaths[i][1]].offsetHeight) / 2;
            let path = `<path d="M${x} ${y} C ${x} ${y-(scope*svgPaths[i][2])}, ${xe} ${ye-(scope*svgPaths[i][2])} ${xe} ${ye}" stroke="white" fill="transparent" class="svg-path" stroke-width="2"></path>`;
            svgPathsBlock.innerHTML += path;
        }
        let svgNewPaths = svgPathsBlock.querySelectorAll('.svg-path');
        setTimeout(() => {
            for(let i = 0; i < svgNewPaths.length; i++) {
                svgNewPaths[i].style.opacity = `1`;
                svgNewPaths[i].style.strokeDasharray = `0 ${500 * scopedArray} 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5`;
                svgNewPaths[i].style.transitionDelay = `${0.8 *  i}s`;
                svgNewPaths[i].style.strokeDashoffset = `${500 * scopedArray}`;
            }
        }, 20)
    }, halfOfSpeed * svgItems.length)
    setTimeout(() => {
        for(let i = 0; i < svgItems.length; i++) {
            setTimeout(() => {
                svgItems[i].style.animation = '1s svg-show forwards';
            }, speed * (i + 1))
        }
    }, halfOfSpeed)
})