
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
        for(let i = 0; i < svgItems.length; i++) {
            setTimeout(() => {
                svgItems[i].style.animation = '1s svg-show forwards';
            }, speed * (i + 1))
        }
    }, halfOfSpeed)
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
    }, halfOfSpeed * svgItems.length)
    setTimeout(() => {
        let svgNewPaths = svgPathsBlock.querySelectorAll('.svg-path');
        for(let i = 0; i < svgNewPaths.length; i++) {
            svgNewPaths[i].style.opacity = `1`;
            svgNewPaths[i].style.strokeDasharray = `0 ${500 * scopedArray} 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5`;
            svgNewPaths[i].style.transitionDelay = `${0.8 *  i}s`;
            svgNewPaths[i].style.strokeDashoffset = `${500 * scopedArray}`;
        }
    }, halfOfSpeed * svgItems.length + 20)
})

$(window).resize(function() {
    if (document.documentElement.scrollWidth < 500) {
        scope = 0.25;
        scopedArray = 0.5;
    } else if (document.documentElement.scrollWidth < 1281) {
        scope = 0.5;
        scopedArray = 0.75;
    } else {
        scope = 1;
        scopedArray = 1;
    }
    svgPathsBlock.innerHTML = '';
    for(let i = 0; i < svgPaths.length; i++) {
        let x = svgItems[svgPaths[i][0]].offsetLeft + (svgItems[svgPaths[i][0]].offsetWidth) / 2;
        let y = svgItems[svgPaths[i][0]].offsetTop + (svgItems[svgPaths[i][0]].offsetHeight) / 2;
        let xe = svgItems[svgPaths[i][1]].offsetLeft + (svgItems[svgPaths[i][1]].offsetWidth) / 2;
        let ye = svgItems[svgPaths[i][1]].offsetTop + (svgItems[svgPaths[i][1]].offsetHeight) / 2;
        let path = `<path d="M${x} ${y} C ${x} ${y-(scope*svgPaths[i][2])}, ${xe} ${ye-(scope*svgPaths[i][2])} ${xe} ${ye}" stroke="white" fill="transparent" class="svg-path" stroke-width="2"></path>`;
        svgPathsBlock.innerHTML += path;
    }
    setTimeout(() => {
        let svgNewPaths = svgPathsBlock.querySelectorAll('.svg-path');
        for(let i = 0; i < svgNewPaths.length; i++) {
            svgNewPaths[i].style.opacity = `1`;
            svgNewPaths[i].style.strokeDasharray = `0 ${500 * scopedArray} 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5`;
            svgNewPaths[i].style.transitionDelay = `${0.8 *  i}s`;
            svgNewPaths[i].style.strokeDashoffset = `${500 * scopedArray}`;
        }
    }, 20)
})

//форма

//phone mask

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type === "blur") {
        if (this.value.length === 2) this.value = ""
    }
}

let phones = document.querySelectorAll("._phone");
phones.forEach(phone => phone.addEventListener("input", mask, false));
phones.forEach(phone => phone.addEventListener("focus", mask, false));
phones.forEach(phone => phone.addEventListener("blur", mask, false));

// validation

function formSend(form) {
    let error = formValidate(form);

    if (error === 0) {
        //отправка формы
        return true;
    }
    return false;
}

function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        input.classList.remove('_error');

        if (input.classList.contains('_phone')) {
            if (input.value.length < 18) {
                input.classList.add('_error');
                error++;
            }
        } else {
            if (input.value.length < 3 || input.value.length > 32) {
                input.classList.add('_error');
                error++;
            }
        }
    }
    return error;
}

if ($('.popup-callback-bg').length) {

    let popupCallbackBackground = document.querySelector('.popup-callback-bg');
    let popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
    let popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');
    let popupCallbackForm = popupCallbackBackground.querySelector('.popup-callback__form');

    let popupThanksBackground = document.querySelector('.popup-thanks-bg');
    let popupThanksCloseBtns = popupThanksBackground.querySelectorAll('.popup-thanks__close');

    popupCallbackForm.addEventListener('submit', event => {
        event.preventDefault();
        let isSend = formSend(popupCallbackForm);
        if (isSend) {
            popupThanksBackground.classList.add('popup-thanks-bg-visible');
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupCallbackOpenBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupCallbackBackground.classList.add('popup-callback-bg-visible');
        });
    })

    popupCallbackBackground.addEventListener('click', (event) => {
        if (event.target === popupCallbackBackground) {
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });

    popupCallbackCloseBtn.addEventListener('click', () => {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    });

    popupThanksBackground.addEventListener('click', (event) => {
        if (event.target === popupThanksBackground) {
            popupThanksBackground.classList.remove('popup-thanks-bg-visible');
        }
    });

    popupThanksCloseBtns.forEach(button => {
        button.addEventListener('click', () => {
            popupThanksBackground.classList.remove('popup-thanks-bg-visible');
        });
    })
}