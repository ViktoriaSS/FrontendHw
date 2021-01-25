// HW1
// Есть массив ['Капуста', 'Репа', 'Редиска', 'Морковка']. Надо вывести в консоль строку
// 'Капуста | Репа | Редиска | Морковка';
let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'].join(" | ")
console.log(arr)

// HW2
// Есть строка 'Вася;Петя;Вова;Олег'. Используя стандартные методы строк получить массив их имен;
const strings = String("Вася;Петя;Вова;Олег");
const newArr = strings.split(';')
console.log(newArr)

// HW3
// Напишите функцию hello2(), которая при вызове будет принимать переменную
// (в аргументы) name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет, гость»
function hello2(name="гость") {
    console.log("Привет, " + name)
};

// HW4
// Есть массив ['яблоко', 'ананас', 'груша']
// Привести каждый элемент массива в верхний регистр (сделать все слово большими буквами)
// и получить результат (новый массив) в новую переменную.
let arr = ["яблоко", "ананас", "груша"];

let arr2 = arr.map(function (item) {
    return item.toUpperCase();
});
console.log(arr2);

// HW5
// Написать функцию addOneForAll, которая может принять
// неограниченное кол-во аргументов.
// Добавить к каждому аргументу 1 и вернуть новый массив с новыми значениями.
// Пример:
// передал в массив такие числа - 1, 2, 3, 4
// функция добавляет к каждму числу + 1
// функция возвращает новый массив, в котором новые значения

function addOneForAll(...item) {
    let arr = []
    for (let i = 0; i < item.length; i++) {
        arr[i] = item[i]+1;
    }
    return arr;
};

console.log(addOneForAll(1, 2, 3, 4));

// HW6
// Написать функцию getSum, которая может принять неограниченное
// кол-во аргументов и возвращает их сумму.

function getSum(...item) {
    let sum = 0;
    for (let i = 0; i < item.length; i++) {
        sum += item[i];
    }
    return sum
}

console.log(getSum(1, 2, 3, 4));

// HW7
// Есть массив [1, 'hello', 2, 3, 4, '5', '6', 7, null]. Отфильтровать
// массив так, чтобы остались только числа. Сделать можно любым способом
// из того, что учили.

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr.filter(el => typeof el == "number");
console.log(numberArray)

// HW8
// Написать функцию arrayTesting, которая принимает в себя любой массив
// (в аргументы)
// функция проверяет есть ли в массиве хоть одно true значение
// и если оно есть, то возвращаем из функции строку 'Нашли true значение',
// если его нет - 'Ничего нет'

function arrayTesting(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return "Нашли true значение";
        }
    }
    return "Ничего нет";
};
