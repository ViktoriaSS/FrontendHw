// HW1
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.
// const arr = ['Vasya', 'Petya', 'Alexey']
// removeUser(arr, 1)
// console.log(arr) /// ['Vasya', 'Alexey']
// etc.

const items = ["Vasya", "Petya", "Alexey", "Vitalik"];

const removeUser = (arr, i) => {
let a = arr.slice(0, i - 1).concat(arr.slice(i, arr.length));
console.log(a);
};

removeUser(items, 1);

//HW2
//Родительский div можно добавить просто в html файле

const parentDiv = document.getElementById('myDiv');
const box = document.getElementsByClassName('box');
const square1 = document.createElement('div');
const square2 = document.createElement('div');
const square3 = document.createElement('div');

parentDiv.className = 'container'
square1.className = 'pink';
square2.className = 'blue';
square3.className = 'green';

parentDiv.style = 'display: flex; width: 300px; height: 300px; position: relative;';
square1.style = 'background: #FF8888; width: 150px; height: 150px; position: absolute';
square2.style = 'background: #7E8AEB; width: 150px; height: 150px; position: absolute; z-index: 1; transform: translate(50%, 50%);';
square3.style = 'background: #4DEF99; width: 150px; height: 150px; position: absolute; bottom: 0; right: 0';

parentDiv.append(square1, square2, square3);


// HW3
// У вас есть следующий код:
// index.html
// <div class="holder"></div>
// Используя JS, добавить такие блоки в div с классом holder
// <div class="item">1</div>
// <div class="item">2</div>
// <div class="item">3</div>
// <div class="item">4</div>
// <div class="item">5</div>

const holder = document.getElementsByClassName('holder');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const items = document.getElementsByClassName('item');

div1.className = 'item',
    div2.className = 'item'
div3.className = 'item'
div4.className = 'item'
div5.className = 'item'
div1.innerText = '1'
div2.innerText = '5'
div3.innerText = '3'
div4.innerText = '2'
div5.innerText = '4'

holder[0].style = 'background: #ffffff; width: 80%; height: 300px; border: 8px solid black; border-radius: 50px 50px 0 0; overflow: hidden; display: flex; flex-wrap: wrap'
div1.style = 'display: flex; align-items: center; justify-content: center; font-size: 4em; height: 50%; width: 50%; background: #fd644d;'
div2.style = 'display: flex; align-items: center; justify-content: center; font-size: 4em; height: 50%; width: 50%; background: #fda429;'
div3.style = 'display: flex; align-items: center; justify-content: center; font-size: 4em; height: 50%; width: 33.333%; background: #663797;'
div4.style = 'display: flex; align-items: center; justify-content: center; font-size: 4em; height: 50%; width: 33.333%; background: #4983b2;'
div5.style = 'display: flex; align-items: center; justify-content: center; font-size: 4em; height: 50%; width: 33.333%; background: #0e7f12;'

holder[0].append(div1, div2, div3, div4, div5);

// HW4
// Напилить код функции modificator, такой, чтобы в результате работы кода была строка "sampleFunc: test | sample"

function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` );
};

function modificator(test) {
    return function () {
        (test('test', 'sample'))
    }
}

const testFunc = modificator(sampleFunc);

testFunc();

// HW5
// оч много текста

const group = [
    {
        name: "Viktoria",
        surname: "Sokhina",
        age: 21,
        city: "Kharkov",
        animals: "cat",
    },
    {
        name: "Alexander",
        surname: "Komarov",
        age: 20,
        city: "Kiyv",
        animals: "dog",
    },
    {
        name: "Inna",
        surname: "Olova",
        age: 40,
        city: "LolCity",
        animals: "parrot",
    },
    {
        name: "Archie",
        surname: "Viktorievich",
        age: 2,
        city: "iLoveJS",
        animals: "he is a cat",
    },
];

function getStudentsList(arr) {
    for (let keys of arr) {
        let a = `(Name - ${keys.name}) , (Surname - ${keys.surname}) , (Age - ${keys.age}) ,(Animals- ${keys.animals}) , (City - ${keys.city})`;
        console.log(a);
    }
}

getStudentsList(group);