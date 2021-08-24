'use strict';

// 1) Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер,
// который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// Как только значение переменной достигнет нуля - остановите таймер.
const start = document.querySelector('#start');

let setInt;

function startFunc() {
    let ten = 10;
    setInt = setInterval( function () {
        document.querySelector('span').innerHTML = --ten;
        if (ten <= 0){
            clearInterval(setInt)
        }
    },500)
}
start.addEventListener('click',startFunc);

start.style.background = 'black';
start.style.color = 'white';
start.style.fontSize = '20px';
start.style.borderRadius = '10px';
start.style.padding = '7px';

// 2) Сделайте кнопку, по нажатию на которую в консоль будет выводится
// обратный отсчет, начиная с 100.

const start1 = document.querySelector('#start1');

let setInt1;

function startFunc1() {
    let hundred = 101;
    setInt1 = setInterval(function () {
        console.log(--hundred);
        if (hundred <= 0){
            clearInterval(setInt1)
        }
    },100);
}
start1.addEventListener('click',startFunc1);

start1.style.background = 'black';
start1.style.color = 'white';
start1.style.fontSize = '20px';
start1.style.borderRadius = '10px';
start1.style.padding = '7px';

// 3) прочитать эти главы и сделать оттуда примеры
// http://code.mu/ru/javascript/book/prime/context/intro
// http://code.mu/ru/javascript/book/prime/context/unbound-function-context/

let elem = document.querySelector('#element');

elem.addEventListener('click', func);

function func() {
    alert(this.value)
}

elem.style.background = 'black';
elem.style.color = 'white';
elem.style.fontSize = '20px';
elem.style.borderRadius = '10px';
elem.style.padding = '7px';