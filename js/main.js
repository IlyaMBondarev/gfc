(()=>{document.querySelector(".page").classList.add("loaded");var e=document.getElementById("burger"),t=document.querySelector(".header").querySelectorAll("ul"),i=document.querySelectorAll(".toScroll"),s=document.querySelector(".specialScroll").querySelector(".about__rows").querySelectorAll(".about__row");i.forEach((function(e){e.offsetTop>document.documentElement.scrollTop+.8*document.documentElement.clientHeight&&e.classList.add("hidden")})),s.forEach((function(e){e.offsetTop>document.documentElement.scrollTop+.8*document.documentElement.clientHeight&&e.classList.add("row-hidden")})),window.addEventListener("scroll",(function(){i.forEach((function(e){e.offsetTop<=document.documentElement.scrollTop+.8*document.documentElement.clientHeight&&(e.classList.add("visible"),e.classList.remove("hidden"))})),s.forEach((function(e){e.offsetTop<=document.documentElement.scrollTop+.8*document.documentElement.clientHeight&&(e.classList.add("row-visible"),e.classList.remove("row-hidden"))}))})),t.forEach((function(t){for(var s=t.querySelectorAll("a"),l=function(t){s[t].addEventListener("click",(function(s){s.preventDefault(),i[t]&&(i[t].scrollIntoView({behavior:"smooth"}),e.checked=!1)}))},r=0;r<s.length;r++)l(r)}));for(var l=document.querySelector(".offer__items").querySelectorAll(".item"),r=-1,c=document.querySelector(".offer__navigation"),o=c.querySelector(".offer__prev"),a=c.querySelector(".offer__next"),n=function(e){l[e].addEventListener("click",(function(){if(document.documentElement.scrollWidth>1270)if(r!==l[e]){-1!==r&&(l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible")),l[r=e].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var t=0;t<l.length;t++)t!==r&&(l[t].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[t].querySelector(".item__title_ver").classList.add("item__title-visible"))}else{l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_hor").classList.add("item__title-visible");for(var i=0;i<l.length;i++)i!==r&&(l[i].querySelector(".item__title_hor").classList.add("item__title-visible"),l[i].querySelector(".item__title_ver").classList.remove("item__title-visible"));r=-1}else l[r]!==l[e]?(-1!==r&&(l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_hor").classList.add("item__title-visible")),l[r=e].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible")):(l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_hor").classList.add("item__title-visible"),r=-1)}))},m=0;m<l.length;m++)n(m);document.addEventListener("click",(function(e){var t=!1;if(l.forEach((function(i){return t=!!i.contains(e.target)||t})),!t&&!c.contains(e.target))if(document.documentElement.scrollWidth>1270){if(-1!==r){l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible");for(var i=0;i<l.length;i++)l[i].querySelector(".item__title_hor").classList.add("item__title-visible"),l[i].querySelector(".item__title_ver").classList.remove("item__title-visible");r=-1}}else-1!==r&&(l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_hor").classList.add("item__title-visible"),r=-1);t=!1})),a.addEventListener("click",(function(){if(-1===r){l[r=0].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var e=0;e<l.length;e++)e!==r&&(l[e].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[e].querySelector(".item__title_ver").classList.add("item__title-visible"))}else if(r===l.length-1){l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible"),l[r=0].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var t=0;t<l.length;t++)t!==r&&(l[t].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[t].querySelector(".item__title_ver").classList.add("item__title-visible"))}else{l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible"),r++,l[r].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var i=0;i<l.length;i++)i!==r&&(l[i].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[i].querySelector(".item__title_ver").classList.add("item__title-visible"))}})),o.addEventListener("click",(function(){if(-1===r){r=l.length-1,l[r].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var e=0;e<l.length;e++)e!==r&&(l[e].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[e].querySelector(".item__title_ver").classList.add("item__title-visible"))}else if(0===r){l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible"),r=l.length-1,l[r].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var t=0;t<l.length;t++)t!==r&&(l[t].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[t].querySelector(".item__title_ver").classList.add("item__title-visible"))}else{l[r].classList.remove("item-active"),l[r].querySelector(".mask").classList.remove("mask-visible"),l[r].querySelector(".item__title_ver").classList.add("item__title-visible"),r--,l[r].classList.add("item-active"),l[r].querySelector(".mask").classList.add("mask-visible"),l[r].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[r].querySelector(".item__title_ver").classList.remove("item__title-visible");for(var i=0;i<l.length;i++)i!==r&&(l[i].querySelector(".item__title_hor").classList.remove("item__title-visible"),l[i].querySelector(".item__title_ver").classList.add("item__title-visible"))}}));document.getElementById("svg");var _=document.getElementById("map"),v=document.getElementById("svg-paths"),u=[[3,0,200],[6,3,150],[5,6,200],[4,6,200],[2,4,150],[7,0,150],[1,7,250],[8,5,200],[9,8,200],[10,9,200],[11,10,200]],d=document.getElementById("svg").querySelectorAll("img"),f=1,h=1;function L(e){var t="+7 (___) ___-__-__",i=0,s=t.replace(/\D/g,""),l=this.value.replace(/\D/g,"");s.length>=l.length&&(l=s),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&i<l.length?l.charAt(i++):i>=l.length?"":e})),"blur"===e.type&&2===this.value.length&&(this.value="")}$(document).ready((function(){_.style.opacity="1",setTimeout((function(){for(var e=function(e){setTimeout((function(){d[e].style.animation="1s svg-show forwards"}),600*(e+1))},t=0;t<d.length;t++)e(t)}),300),setTimeout((function(){document.documentElement.scrollWidth<500?(f=.25,h=.5):document.documentElement.scrollWidth<1281&&(f=.5,h=.75);for(var e=0;e<u.length;e++){var t=d[u[e][0]].offsetLeft+d[u[e][0]].offsetWidth/2,i=d[u[e][0]].offsetTop+d[u[e][0]].offsetHeight/2,s=d[u[e][1]].offsetLeft+d[u[e][1]].offsetWidth/2,l=d[u[e][1]].offsetTop+d[u[e][1]].offsetHeight/2,r='<path d="M'.concat(t," ").concat(i," C ").concat(t," ").concat(i-f*u[e][2],", ").concat(s," ").concat(l-f*u[e][2]," ").concat(s," ").concat(l,'" stroke="white" fill="transparent" class="svg-path" stroke-width="2"></path>');v.innerHTML+=r}}),300*d.length),setTimeout((function(){for(var e=v.querySelectorAll(".svg-path"),t=0;t<e.length;t++)e[t].style.opacity="1",e[t].style.strokeDasharray="0 ".concat(500*h," 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"),e[t].style.transitionDelay="".concat(.8*t,"s"),e[t].style.strokeDashoffset="".concat(500*h)}),300*d.length+20)})),$(window).resize((function(){document.documentElement.scrollWidth<500?(f=.25,h=.5):document.documentElement.scrollWidth<1281?(f=.5,h=.75):(f=1,h=1),v.innerHTML="";for(var e=0;e<u.length;e++){var t=d[u[e][0]].offsetLeft+d[u[e][0]].offsetWidth/2,i=d[u[e][0]].offsetTop+d[u[e][0]].offsetHeight/2,s=d[u[e][1]].offsetLeft+d[u[e][1]].offsetWidth/2,l=d[u[e][1]].offsetTop+d[u[e][1]].offsetHeight/2,r='<path d="M'.concat(t," ").concat(i," C ").concat(t," ").concat(i-f*u[e][2],", ").concat(s," ").concat(l-f*u[e][2]," ").concat(s," ").concat(l,'" stroke="white" fill="transparent" class="svg-path" stroke-width="2"></path>');v.innerHTML+=r}setTimeout((function(){for(var e=v.querySelectorAll(".svg-path"),t=0;t<e.length;t++)e[t].style.opacity="1",e[t].style.strokeDasharray="0 ".concat(500*h," 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"),e[t].style.transitionDelay="".concat(.8*t,"s"),e[t].style.strokeDashoffset="".concat(500*h)}),20)}));var y=document.querySelectorAll("._phone");if(y.forEach((function(e){return e.addEventListener("input",L,!1)})),y.forEach((function(e){return e.addEventListener("focus",L,!1)})),y.forEach((function(e){return e.addEventListener("blur",L,!1)})),$(".popup-callback-bg").length){var b=document.querySelector(".popup-callback-bg"),S=document.querySelectorAll(".popup-callback-open-btn"),q=b.querySelector(".popup-callback__close"),p=b.querySelector(".popup-callback__form"),g=document.querySelector(".popup-thanks-bg"),k=g.querySelectorAll(".popup-thanks__close");p.addEventListener("submit",(function(e){e.preventDefault(),0===function(e){for(var t=0,i=e.querySelectorAll("._req"),s=0;s<i.length;s++){var l=i[s];l.classList.remove("_error"),l.classList.contains("_phone")?l.value.length<18&&(l.classList.add("_error"),t++):(l.value.length<3||l.value.length>32)&&(l.classList.add("_error"),t++)}return t}(p)&&(g.classList.add("popup-thanks-bg-visible"),b.classList.remove("popup-callback-bg-visible"))})),S.forEach((function(e){e.addEventListener("click",(function(){b.classList.add("popup-callback-bg-visible")}))})),b.addEventListener("click",(function(e){e.target===b&&b.classList.remove("popup-callback-bg-visible")})),q.addEventListener("click",(function(){b.classList.remove("popup-callback-bg-visible")})),g.addEventListener("click",(function(e){e.target===g&&g.classList.remove("popup-thanks-bg-visible")})),k.forEach((function(e){e.addEventListener("click",(function(){g.classList.remove("popup-thanks-bg-visible")}))}))}})();