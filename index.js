
'use strict'
let burgerButton = document.querySelector('.header__burger')
let navList = document.querySelector('.nav__list')

function burgerMenu() {
    burgerButton.classList.toggle('active')
    navList.classList.toggle('active')
    document.body.classList.toggle('lock')
}
burgerButton.addEventListener('click', burgerMenu)

let activate = function () {
    let navBtn = document.querySelectorAll('.nav__list-btn');
    navBtn.forEach(item => {
        item.addEventListener('click', activateBtn)
    });

    function activateBtn() {
        navBtn.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active')
    }
}
let sorting = function () {
    let sortBtn = document.querySelectorAll('.sorting__item');
    sortBtn.forEach(item => {
        item.addEventListener('click', activateBtn)
    });

    function activateBtn() {
        let activeBtn = document.querySelector('.sorting__active');
        sortBtn.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        activeBtn.textContent = this.textContent;

    }
}
activate()
sorting()

//============================================================
//Sorting
//============================================================
const commonI = document.querySelector('.main');

document.querySelector('#common').onclick = function () {
    mySortB('data-id');
}

document.querySelector('#stock').onclick = function () {
    mySort('data-stock');
}
document.querySelector('#priceh').onclick = function () {
    mySort('data-price');
}
document.querySelector('#pricel').onclick = function () {
    mySortB('data-price');
}
document.querySelector('#namea').onclick = function () {
    mySortAZ('data-title');
}
document.querySelector('#namez').onclick = function () {
    mySortZA('data-title');
}
function mySort(attribute) {
    let cards = document.querySelector('.main');
    console.log(attribute)
    for (let i = 0; i < cards.children.length; i++) {
        for (let j = i; j < cards.children.length; j++) {
            if (+cards.children[j].getAttribute(attribute) > +cards.children[i].getAttribute(attribute)) {
                let replacedNode = cards.replaceChild(cards.children[j], cards.children[i])
                insertAfter(replacedNode, cards.children[i]);
            }
        }
    }
}
function mySortB(attribute) {
    let cards = document.querySelector('.main');
    console.log(cards)
    for (let i = 0; i < cards.children.length; i++) {
        for (let j = i; j < cards.children.length; j++) {
            if (+cards.children[j].getAttribute(attribute) < +cards.children[i].getAttribute(attribute)) {
                let replacedNode = cards.replaceChild(cards.children[j], cards.children[i])
                insertAfter(replacedNode, cards.children[i]);
            }
        }
    }
}

function mySortAZ(attribute) {
    let cards = document.querySelector('.main');
    console.log(cards)
    for (let i = 0; i < cards.children.length; i++) {
        for (let j = i; j < cards.children.length; j++) {
            if (cards.children[j].getAttribute(attribute).localeCompare(cards.children[i].getAttribute(attribute)) < 0) {
                let replacedNode = cards.replaceChild(cards.children[j], cards.children[i])
                insertAfter(replacedNode, cards.children[i]);
            }
        }
    }
}
function mySortZA(attribute) {
    let cards = document.querySelector('.main');
    console.log(cards)
    for (let i = 0; i < cards.children.length; i++) {
        for (let j = i; j < cards.children.length; j++) {
            if (cards.children[j].getAttribute(attribute).localeCompare(cards.children[i].getAttribute(attribute)) > 0) {
                let replacedNode = cards.replaceChild(cards.children[j], cards.children[i])
                insertAfter(replacedNode, cards.children[i]);
            }
        }
    }
}
function sortCommon(common) {
    let cards = document.querySelector('.main');
    console.log(common)
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
    for (let i = 0; i < common.children.length; i++) {
        console.log(cards)
        cards.appendChild(common.children[i])
    }
}



function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


//==================================================================
//Filtering
//==================================================================\

document.querySelector('#hoodies').onclick = function () {
    filtering('hoodies')
}
document.querySelector('#t-shirts').onclick = function () {
    filtering('t-shirts')
}
document.querySelector('#accessories').onclick = function () {
    filtering('accessories')
}
document.querySelector('#pants').onclick = function () {
    filtering('pants')
}
document.querySelector('#coats').onclick = function () {
    filtering('coats')
}
document.querySelector('#jersies').onclick = function () {
    filtering('jersies')
}
document.querySelector('#other').onclick = function () {
    filtering('other')
}

document.querySelector('#all').onclick = function () {
    filteringAll()
}

function filtering(dataType) {
    let items = document.querySelector('main');
    [...items.children].forEach(item => (item.getAttribute('data-type') == dataType) ? item.classList.remove('dnone') : item.classList.add('dnone'))
}

function filteringAll() {
    let items = document.querySelector('main');
    [...items.children].forEach(item => item.classList.remove('dnone'))
}

//=========
//Faq
//=========
