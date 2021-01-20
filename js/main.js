
document.querySelector('.page').classList.add('loaded');

//появление элементов при скролле

"use strict";

var burgerInput = document.getElementById('burger');
var lists = document.querySelector('.header').querySelectorAll('ul');
var toScroll = document.querySelectorAll('.toScroll');
var specialScroll = document.querySelector('.specialScroll');
var specialScrollRows = specialScroll.querySelector('.about__rows');
var specialScrollRow = specialScrollRows.querySelectorAll('.about__row');
for(var i = 0; i < toScroll.length; i++) {
    if (toScroll[i].offsetTop > document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
        toScroll[i].classList.add('hidden');
    }
}
for(var i = 0; i < specialScrollRow.length; i++) {
    if (specialScrollRow[i].offsetTop > document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
        specialScrollRow[i].classList.add('row-hidden');
    }
}

function scrollCheck() {
    for(var i = 0; i < toScroll.length; i++) {
        if (toScroll[i].offsetTop <= document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
            toScroll[i].classList.add('visible');
            toScroll[i].classList.remove('hidden');
        }
    }
    for(var i = 0; i < specialScrollRow.length; i++) {
        if (specialScrollRow[i].offsetTop <= document.documentElement.scrollTop + 0.8 * document.documentElement.clientHeight) {
            specialScrollRow[i].classList.add('row-visible');
            specialScrollRow[i].classList.remove('row-hidden');
        }
    }
}

window.addEventListener('scroll', scrollCheck); //скролл при нажатии на пункт меню

function closeBurger() {
    burgerInput.checked = false;
}

for (var i = 0; i < lists.length; i++) {
    var links = lists[i].querySelectorAll('a');

    var _loop = function _loop(i) {
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

    for (var i = 0; i < links.length; i++) {
        _loop(i);
    }
} //жалюзи

var itemsBlock = document.querySelector('.offer__items');
var items = itemsBlock.querySelectorAll('.item');
var indexOfActiveItem = -1;
var arrowsBlock = document.querySelector('.offer__navigation');
var arrowPrev = arrowsBlock.querySelector('.offer__prev');
var arrowNext = arrowsBlock.querySelector('.offer__next');

var _loop2 = function _loop2(i) {
    items[i].addEventListener('click', function () {
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== i) {
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
    });
};

for (var i = 0; i < items.length; i++) {
    _loop2(i);
}

document.addEventListener('click', function (event) {
    var isOnItems = false;
    for(var i = 0; i < items.length; i++) {
        isOnItems = items[i].contains(event.target) ? true : isOnItems;
    }

    if (!isOnItems && !arrowsBlock.contains(event.target)) {
        if (document.documentElement.scrollWidth > 1270) {
            if (indexOfActiveItem !== -1) {
                items[indexOfActiveItem].classList.remove('item-active');
                items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
                items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');

                for (var _i = 0; _i < items.length; _i++) {
                    items[_i].querySelector('.item__title_hor').classList.add('item__title-visible');

                    items[_i].querySelector('.item__title_ver').classList.remove('item__title-visible');
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
});
arrowNext.addEventListener('click', function () {
    if (indexOfActiveItem === -1) {
        indexOfActiveItem = 0;
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
    } else if (indexOfActiveItem === items.length - 1) {
        items[indexOfActiveItem].classList.remove('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.remove('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.add('item__title-visible');
        indexOfActiveItem = 0;
        items[indexOfActiveItem].classList.add('item-active');
        items[indexOfActiveItem].querySelector('.mask').classList.add('mask-visible');
        items[indexOfActiveItem].querySelector('.item__title_hor').classList.remove('item__title-visible');
        items[indexOfActiveItem].querySelector('.item__title_ver').classList.remove('item__title-visible');

        for (var _j = 0; _j < items.length; _j++) {
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

        for (var _j2 = 0; _j2 < items.length; _j2++) {
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

        for (var j = 0; j < items.length; j++) {
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

        for (var _j3 = 0; _j3 < items.length; _j3++) {
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

        for (var _j4 = 0; _j4 < items.length; _j4++) {
            if (_j4 !== indexOfActiveItem) {
                items[_j4].querySelector('.item__title_hor').classList.remove('item__title-visible');

                items[_j4].querySelector('.item__title_ver').classList.add('item__title-visible');
            }
        }
    }
}); // svg-анимация

var svg = document.getElementById('svg');
var svgMap = document.getElementById('map');
var svgPathsBlock = $("#svg-paths");
var svgPaths = [[3, 0, 200], [6, 3, 150], [5, 6, 200], [4, 6, 200], [2, 4, 150], [7, 0, 150], [1, 7, 250], [8, 5, 200], [9, 8, 200], [10, 9, 200], [11, 10, 200]];
var svgItemsBlock = document.getElementById('svg');
var svgItems = svgItemsBlock.querySelectorAll('img');
var speed = 600;
var halfOfSpeed = speed / 2;
var scope = 1;
var scopedArray = 1;

$(document).ready(function() {
    svgMap.style.opacity = '1';
    setTimeout(function () {
        var _loop = function _loop(i) {
            setTimeout(function () {
                svgItems[i].style.animation = '1s svg-show forwards';
            }, speed * (i + 1));
        };

        for (var i = 0; i < svgItems.length; i++) {
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
        var paths = '';
        for (var i = 0; i < svgPaths.length; i++) {
            var x = svgItems[svgPaths[i][0]].offsetLeft + svgItems[svgPaths[i][0]].offsetWidth / 2;
            var y = svgItems[svgPaths[i][0]].offsetTop + svgItems[svgPaths[i][0]].offsetHeight / 2;
            var xe = svgItems[svgPaths[i][1]].offsetLeft + svgItems[svgPaths[i][1]].offsetWidth / 2;
            var ye = svgItems[svgPaths[i][1]].offsetTop + svgItems[svgPaths[i][1]].offsetHeight / 2;
            var path = "<path d=\"M".concat(x, " ").concat(y, " C ").concat(x, " ").concat(y - scope * svgPaths[i][2], ", ").concat(xe, " ").concat(ye - scope * svgPaths[i][2], " ").concat(xe, " ").concat(ye, "\" stroke=\"white\" fill=\"transparent\" class=\"svg-path\" stroke-width=\"2\"></path>");
            paths += path;
        }
        svgPathsBlock.html(paths);
    }, halfOfSpeed * svgItems.length);
    setTimeout(function () {
        var svgNewPaths = $("#svg-paths .svg-path");

        for (var i = 0; i < svgNewPaths.length; i++) {
            svgNewPaths[i].style.opacity = "1";
            svgNewPaths[i].style.strokeDasharray = "0 ".concat(500 * scopedArray, " 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5");
            svgNewPaths[i].style.transitionDelay = "".concat(0.8 * i, "s");
            svgNewPaths[i].style.strokeDashoffset = "".concat(500 * scopedArray);
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

    var paths = '';
    svgPathsBlock.html();

    for (var i = 0; i < svgPaths.length; i++) {
        var x = svgItems[svgPaths[i][0]].offsetLeft + svgItems[svgPaths[i][0]].offsetWidth / 2;
        var y = svgItems[svgPaths[i][0]].offsetTop + svgItems[svgPaths[i][0]].offsetHeight / 2;
        var xe = svgItems[svgPaths[i][1]].offsetLeft + svgItems[svgPaths[i][1]].offsetWidth / 2;
        var ye = svgItems[svgPaths[i][1]].offsetTop + svgItems[svgPaths[i][1]].offsetHeight / 2;
        var path = "<path d=\"M".concat(x, " ").concat(y, " C ").concat(x, " ").concat(y - scope * svgPaths[i][2], ", ").concat(xe, " ").concat(ye - scope * svgPaths[i][2], " ").concat(xe, " ").concat(ye, "\" stroke=\"white\" fill=\"transparent\" class=\"svg-path\" stroke-width=\"2\"></path>");
        paths += path;
    }
    svgPathsBlock.html(paths);

    setTimeout(function () {
        var svgNewPaths = $("#svg-paths .svg-path");

        for (var _i = 0; _i < svgNewPaths.length; _i++) {
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
    var matrix = "+7 (___) ___-__-__",
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

var phones = document.querySelectorAll("._phone");
for (var i = 0; i < phones.length; i++) {
    phones[i].addEventListener("input", mask, false);
    phones[i].addEventListener("focus", mask, false);
    phones[i].addEventListener("blur", mask, false);
} // validation

function formSend(form) {
    var error = formValidate(form);

    if (error === 0) {
        //отправка формы
        return true;
    }

    return false;
}

function formValidate(form) {
    var error = 0;
    var formReq = form.querySelectorAll('._req');

    for (var index = 0; index < formReq.length; index++) {
        var input = formReq[index];
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

    var popupCallbackBackground = document.querySelector('.popup-callback-bg');
    var popupCallbackOpenBtns = document.querySelectorAll('.popup-callback-open-btn');
    var popupCallbackCloseBtn = popupCallbackBackground.querySelector('.popup-callback__close');
    var popupCallbackForm = popupCallbackBackground.querySelector('.popup-callback__form');
    var popupThanksBackground = document.querySelector('.popup-thanks-bg');
    var popupThanksCloseBtns = popupThanksBackground.querySelectorAll('.popup-thanks__close');
    popupCallbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var isSend = formSend(popupCallbackForm);

        if (isSend) {
            popupThanksBackground.classList.add('popup-thanks-bg-visible');
            popupCallbackBackground.classList.remove('popup-callback-bg-visible');
        }
    });
    for (var i = 0; i < popupCallbackOpenBtns.length; i++) {
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
    for (var i = 0; i < popupThanksCloseBtns.length; i++) {
        popupThanksCloseBtns[i].addEventListener('click', function () {
            popupThanksBackground.classList.remove('popup-thanks-bg-visible');
        });
    }
}