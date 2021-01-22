// 1
// Написать функцию bindFunc, которая принимает в себя 2 + аргументов
// (Точно должна принять 2 аргумента, а дальше сколько угодно).
// 1 аргумент - какая-то функция
// 2 аргумент - значение контекста
// 3 + ... аргументы - любое кол-во аргументов
// Эта функция, должна устанавливать контекст для функции,
// которая в первом аргументе, и возвращать эту функцию с
// новым контекстом.
// Сам контекст, который мы хотим установить, находиться
// во втором аргументе

function bindFunc(func, context, ...args) {
    return func.bind(context)
};

function func2() {
    console.log(this);
};

const obj = {
    name: 'Danissimo'
};

const bindFunc2 = bindFunc(func2, obj);
console.log(bindFunc2)
bindFunc2()

// 2
// Написать функцию, которая не принимает никаких аргументов.
// В теле функции написать логику для нахождения суммы значений любого количества ключей
// (значения ключей должны быть больше нуля) из переданного контекста.
// Обращаться к objectA напрямую нельзя :)

const func = function () {
    let sum = 0
    for (const key in this) {
        if (this[key] > 0) {
            sum += this[key]
        }
    }
    return sum
}
const objectA = {
    a: 1,
    b: 2,
    c: 3,
}
const result = func.call(objectA)

// 3
// Написать функцию, которая возвращает новый массив, в котором должны
// быть только четные числа, которые больше двуx и меньше 10.
// Новый массив будет состоять из значений ключа values из контекста, если такого ключа нет,
// то выводим сообщение "Не найдено".
// Обращаться к valObject0 напрямую нельзя :)
// Если хотите использовать map, то внутри map this всегда равен
// глобальному объекту. Чтобы это поменять передаем нужное значение this
// во второй аргумент map - arr.map(() => {}, this);

function getNewArray() {
    console.log(this)
    let newKey;
    for (let key in this) {
        if (key === "values") {
            newKey = this[key].filter(function (item) {
                return (
                    typeof item === "number" && item % 2 === 0 && item > 2 && item < 10
                );
            });
        } else {
            newKey = "Не найдено";
        }
    }
    return newKey;
}

const valObject0 = {
    values: ["2", 2, 4, 8, 3, 10, null, false]
};

const result = getNewArray.call(valObject0);
console.log(result);
