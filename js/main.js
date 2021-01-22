
document.querySelector('.page').classList.add('loaded');

//появление элементов при скролле

"use strict";

let header = document.querySelector('.header');
let headerToDarkGradient = document.querySelector('.header-to-dark-gradient');
let headerToLightGradient = document.querySelector('.header-to-light-gradient');

function changeHeader() {
    if (headerToDarkGradient.offsetTop + headerToDarkGradient.offsetHeight > document.documentElement.scrollTop + header.scrollHeight/2) {
        header.classList.remove('header-white');
        header.classList.remove('header-light-gradient');
        header.classList.add('header-dark-gradient');
    } else if (headerToLightGradient.offsetTop + headerToLightGradient.offsetHeight > document.documentElement.scrollTop + header.scrollHeight/2 && headerToLightGradient.offsetTop < document.documentElement.scrollTop + header.scrollHeight/2) {
        header.classList.remove('header-white');
        header.classList.remove('header-dark-gradient');
        header.classList.add('header-light-gradient');
    } else {
        header.classList.remove('header-light-gradient');
        header.classList.remove('header-dark-gradient');
        header.classList.add('header-white');
    }
}

changeHeader(header);

let burgerInput = document.getElementById('burger');
let lists = document.querySelector('.header').querySelectorAll('ul');
let toScroll = document.querySelectorAll('.toScroll');
let specialScroll = document.querySelector('.specialScroll');
let specialScrollRows = specialScroll.querySelector('.about__rows');
let specialScrollRow = specialScrollRows.querySelectorAll('.about__row');

for(let i = 0; i < toScroll.length; i++) {
    if (toScroll[i].offsetTop > document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
        toScroll[i].classList.add('hidden');
    }
}

if (specialScrollRows.offsetTop > document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
    specialScrollRows.classList.add('rows-hidden');
}

function scrollCheck() {
    changeHeader(header);
    for(let i = 0; i < toScroll.length; i++) {
        if (toScroll[i].offsetTop <= document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
            toScroll[i].classList.add('visible');
            toScroll[i].classList.remove('hidden');
        }
    }
    if (specialScrollRows.offsetTop <= document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
        for(let i = 0; i < specialScrollRow.length; i++) {
            specialScrollRow[i].style.transition = 'transform 1.2s ease '.concat(0.2 * i, "s");
        }
        specialScrollRows.classList.add('rows-visible');
        specialScrollRows.classList.remove('rows-hidden');
    }

}

window.addEventListener('scroll', scrollCheck);

//скролл при нажатии на пункт меню

function closeBurger() {
    burgerInput.checked = false;
}

for (let i = 0; i < lists.length; i++) {
    let links = lists[i].querySelectorAll('a');

    let _loop = function _loop(i) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            if (toScroll[i]) {
                toScroll[i].scrollIntoView({
                    behavior: 'smooth'
                });
                closeBurger();
            }
        });
    };

    for (let i = 0; i < links.length; i++) {
        _loop(i);
    }
}

//жалюзи

var itemsBlock = document.querySelector('.offer__items');
var items = itemsBlock.querySelectorAll('.item');
var indexOfActiveItem = -1;

var _loop2 = function _loop2(index) {
    items[index].addEventListener('click', function () {
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== index) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.remove('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                    items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
                }

                indexOfActiveItem = index;
                items[indexOfActiveItem].classList.add('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');

                for (var j = 0; j < items.length; j++) {
                    if (j !== indexOfActiveItem) {
                        items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                        items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
                    }
                }
            } else {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');

                for (var _j5 = 0; _j5 < items.length; _j5++) {
                    if (_j5 !== indexOfActiveItem) {
                        items[_j5].querySelector('.item__title_hor').classList.add('item__title-visible');

                        items[_j5].querySelector('.item__title_ver').classList.remove('item__title-visible');
                    }
                }

                indexOfActiveItem = -1;
            }
        } else {
            if (items[indexOfActiveItem] !== items[index]) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.remove('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                    items[indexOfActiveItem].style.height = '';
                    items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
                }

                indexOfActiveItem = index;
                items[indexOfActiveItem].classList.add('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
                items[indexOfActiveItem].querySelector('.item__back').style.maxWidth = 'none';
                items[indexOfActiveItem].style.height = "".concat(items[indexOfActiveItem].querySelector('.mask__main').scrollHeight + 8, "px");
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
            } else {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].style.height = '';
                items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
                indexOfActiveItem = -1;
            }
        }
    });

    if (document.documentElement.scrollWidth > 1270) {
        items[index].addEventListener('mouseenter', function () {
            if (indexOfActiveItem !== index) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.remove('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                    items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
                    items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
                }

                items[index].classList.add('item-active');
                items[index].querySelector('.mask').classList.add('mask-visible');
                items[index].querySelector('.item__title_hor').classList.remove('item__title-visible');
                items[index].querySelector('.item__title_ver').classList.remove('item__title-visible');

                for (var j = 0; j < items.length; j++) {
                    if (j !== index) {
                        items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                        items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
                    }
                }
            }
        });
        items[index].addEventListener('mouseleave', function () {
            if (indexOfActiveItem !== index) {
                if (indexOfActiveItem !== -1) {
                    items[indexOfActiveItem].classList.add('item-active');
                    items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
                    items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
                    items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');
                    items[index].querySelector('.item__title_ver').classList.add('item__title-visible');
                    for (var j = 0; j < items.length; j++) {
                        if (j !== indexOfActiveItem) {
                            items[j].querySelector('.item__title_hor').classList.remove('item__title-visible');
                            items[j].querySelector('.item__title_ver').classList.add('item__title-visible');
                        }
                    }
                } else {
                    for (var j = 0; j < items.length; j++) {
                        if (j !== indexOfActiveItem) {
                            items[j].querySelector('.item__title_hor').classList.add('item__title-visible');
                            items[j].querySelector('.item__title_ver').classList.remove('item__title-visible');
                        }
                    }
                }

                items[index].classList.remove('item-active');
                items[index].querySelector('.mask').classList.remove('mask-visible');


            }
        });
    }
};

for (var index = 0; index < items.length; index++) {
    _loop2(index);
}


document.addEventListener('click', function (event) {
    let isOnItems = false;
    for(let i = 0; i < items.length; i++) {
        isOnItems = items[i].contains(event.target) ? true : isOnItems;
    }

    if (!isOnItems /* &&!arrowsBlock.contains(event.target)*/) { //стрелки
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== -1) {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');

                for (let _i = 0; _i < items.length; _i++) {
                    items[_i].querySelector('.item__title_hor').classList.add('item__title-visible');

                    items[_i].querySelector('.item__title_ver').classList.remove('item__title-visible');
                }

                indexOfActiveItem = -1;
            }
        } else if (indexOfActiveItem !== -1) {
            items[indexOfActiveItem].classList.remove('item-active');
            items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
            items[indexOfActiveItem].style.height = '';
            items[indexOfActiveItem].querySelector('.item__title_hor').classList.add('item__title-visible');
            indexOfActiveItem = -1;
        }
    }
});

/* стрелки

let arrowsBlock = document.querySelector('.offer__navigation');
let arrowPrev = arrowsBlock.querySelector('.offer__prev');
let arrowNext = arrowsBlock.querySelector('.offer__next');

arrowNext.addEventListener('click', function () {
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

        for (let _j = 0; _j < items.length; _j++) {
            if (_j !== indexOfActiveItem) {
                items[_j].querySelector('.item__title_hor').classList.remove('item__title-visible');

                items[_j].querySelector('.item__title_ver').classList.add('item__title-visible');
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

        for (let _j2 = 0; _j2 < items.length; _j2++) {
            if (_j2 !== indexOfActiveItem) {
                items[_j2].querySelector('.item__title_hor').classList.remove('item__title-visible');

                items[_j2].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    }
});
arrowPrev.addEventListener('click', function () {
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

        for (let _j3 = 0; _j3 < items.length; _j3++) {
            if (_j3 !== indexOfActiveItem) {
                items[_j3].querySelector('.item__title_hor').classList.remove('item__title-visible');

                items[_j3].querySelector('.item__title_ver').classList.add('item__title-visible');
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

        for (let _j4 = 0; _j4 < items.length; _j4++) {
            if (_j4 !== indexOfActiveItem) {
                items[_j4].querySelector('.item__title_hor').classList.remove('item__title-visible');

                items[_j4].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    }
});*/

// svg-анимация

let svg = document.getElementById('svg');
let svgMap = document.getElementById('map');
let svgPathsBlock = $("#svg-paths");
let svgPaths = [[3, 0, 200], [6, 3, 150], [5, 6, 200], [4, 6, 200], [2, 4, 150], [7, 0, 150], [1, 7, 250], [8, 5, 200], [9, 8, 200], [10, 9, 200], [11, 10, 200]];
let svgItemsBlock = document.getElementById('svg');
let svgItems = svgItemsBlock.querySelectorAll('img');
let speed = 600;
let halfOfSpeed = speed / 2;
let scope = 1;
let scopedArray = 1;

$(document).ready(function() {
    svgMap.style.opacity = '1';
    setTimeout(function () {
        let _loop = function _loop(i) {
            setTimeout(function () {
                svgItems[i].style.animation = '1s svg-show forwards';
            }, speed * (i + 1));
        };

        for (let i = 0; i < svgItems.length; i++) {
            _loop(i);
        }
    }, halfOfSpeed);
    setTimeout(function () {
        if (document.documentElement.scrollWidth < 500) {
            scope = 0.25;
            scopedArray = 0.5;
        } else if (document.documentElement.scrollWidth < 1281) {
            scope = 0.5;
            scopedArray = 0.75;
        }
        let paths = '';
        for (let a = 0; a < svgPaths.length; a++) {
            let x = svgItems[svgPaths[a][0]].offsetLeft + svgItems[svgPaths[a][0]].offsetWidth / 2;
            let y = svgItems[svgPaths[a][0]].offsetTop + svgItems[svgPaths[a][0]].offsetHeight / 2;
            let xe = svgItems[svgPaths[a][1]].offsetLeft + svgItems[svgPaths[a][1]].offsetWidth / 2;
            let ye = svgItems[svgPaths[a][1]].offsetTop + svgItems[svgPaths[a][1]].offsetHeight / 2;
            let path = "<path d=\"M".concat(x, " ").concat(y, " C ").concat(x, " ").concat(y - scope * svgPaths[a][2], ", ").concat(xe, " ").concat(ye - scope * svgPaths[a][2], " ").concat(xe, " ").concat(ye, "\" stroke=\"white\" fill=\"transparent\" class=\"svg-path\" stroke-width=\"2\"></path>");
            paths += path;
        }
        svgPathsBlock.html(paths);
    }, halfOfSpeed * svgItems.length);
    setTimeout(function () {
        let svgNewPaths = $("#svg-paths .svg-path");

        for (let a = 0; a < svgNewPaths.length; a++) {
            svgNewPaths[a].style.opacity = "1";
            svgNewPaths[a].style.strokeDasharray = "0 ".concat(500 * scopedArray, " 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5");
            svgNewPaths[a].style.transitionDelay = "".concat(0.8 * a, "s");
            svgNewPaths[a].style.strokeDashoffset = "".concat(500 * scopedArray);
        }
    }, halfOfSpeed * svgItems.length + 20);
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

    let paths = '';
    svgPathsBlock.html();

    for (let i = 0; i < svgPaths.length; i++) {
        let x = svgItems[svgPaths[i][0]].offsetLeft + svgItems[svgPaths[i][0]].offsetWidth / 2;
        let y = svgItems[svgPaths[i][0]].offsetTop + svgItems[svgPaths[i][0]].offsetHeight / 2;
        let xe = svgItems[svgPaths[i][1]].offsetLeft + svgItems[svgPaths[i][1]].offsetWidth / 2;
        let ye = svgItems[svgPaths[i][1]].offsetTop + svgItems[svgPaths[i][1]].offsetHeight / 2;
        let path = "<path d=\"M".concat(x, " ").concat(y, " C ").concat(x, " ").concat(y - scope * svgPaths[i][2], ", ").concat(xe, " ").concat(ye - scope * svgPaths[i][2], " ").concat(xe, " ").concat(ye, "\" stroke=\"white\" fill=\"transparent\" class=\"svg-path\" stroke-width=\"2\"></path>");
        paths += path;
    }
    svgPathsBlock.html(paths);

    setTimeout(function () {
        let svgNewPaths = $("#svg-paths .svg-path");

        for (let _i = 0; _i < svgNewPaths.length; _i++) {
            svgNewPaths[_i].style.opacity = "1";
            svgNewPaths[_i].style.strokeDasharray = "0 ".concat(500 * scopedArray, " 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5");
            svgNewPaths[_i].style.transitionDelay = "".concat(0.8 * _i, "s");
            svgNewPaths[_i].style.strokeDashoffset = "".concat(500 * scopedArray);
        }
    }, 20);
})

//форма

//phone mask

"use strict";

function mask(event) {
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (event.type === "blur") {
        if (this.value.length === 2) this.value = "";
    }
}

let phones = document.querySelectorAll("._phone");
for (let i = 0; i < phones.length; i++) {
    phones[i].addEventListener("input", mask, false);
    phones[i].addEventListener("focus", mask, false);
    phones[i].addEventListener("blur", mask, false);
}

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
        let input = formReq[index];
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
    popupCallbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isSend = formSend(popupCallbackForm);

        if (isSend) {
            popupThanksBackground.classList.add('popup-thanks-bg-visible');
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });
    for (let i = 0; i < popupCallbackOpenBtns.length; i++) {
        popupCallbackOpenBtns[i].addEventListener('click', function () {
            popupCallbackBackground.classList.add('popup-callback-bg-visible');
        });
    }
    popupCallbackBackground.addEventListener('click', function (event) {
        if (event.target === popupCallbackBackground) {
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });
    popupCallbackCloseBtn.addEventListener('click', function () {
        popupCallbackBackground.classList.remove('popup-callback-bg-visible');
    });
    popupThanksBackground.addEventListener('click', function (event) {
        if (event.target === popupThanksBackground) {
            popupThanksBackground.classList.remove('popup-thanks-bg-visible');
        }
    });
    for (let i = 0; i < popupThanksCloseBtns.length; i++) {
        popupThanksCloseBtns[i].addEventListener('click', function () {
            popupThanksBackground.classList.remove('popup-thanks-bg-visible');
        });
    }
}