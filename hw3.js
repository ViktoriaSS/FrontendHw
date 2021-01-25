// 1
// Получить от юзера число.
// Получить сумму квадратов всех чисел от 1 до числа,
// которое ввел юзер. Пример:
// Юзер ввел 4
// (1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) = 30
// Вывести в консоль результат
// Привести во вторую степерь можно через оператор **. 3 ** 2 = 9
let userInput = prompt("Введите число");
let total = 0;
for (let i = 1; i <= userInput; i++) {
    total += i ** 2;
}

console.log(total)

// 2
// Есть массив [3, 5, 12, 9, 23, 93, 17]
// Отфильтровать его так, чтобы остались только те
// числа, которые больше 2 и меньше 20. И потом получить их сумму.

let arr = [3, 5, 12, 9, 23, 93, 17]

function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i]
    }
    console.log(sum)
}

let newArr = arr.filter((elem) => elem >= 2 && elem < 20)

arrSum(newArr)

// 3
// Дан массив [[1, 6, 3, '6'], [10, 15, 13, '10']].
// Найти сумму элементов, которые являются числами и которые кратны двум

let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']]

function arrSum(array) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] == 'number' && arr[i][j]%2==0)
                sum += array[i][j]
        }
    }
    console.log(sum)
}

arrSum(arr)

// 4
// Написать функцию, которая устанавливает новые свойства в объект.
// Функция принимает в себя 3 аргумента - key, value, obj
// key - свойство, которое хотим добавить. Принимаем это от юзера.
// value - значение свойства. Принимаем это от юзера.
// obj - объект, в который хотим добавить новое свойство.
// Если юзер ввел ключ, который уже есть в объекте, то выводим
// сообщение - "Уже есть", если ключа нет, то устанавливаем его в объект.

function objUser(key, value, obj) {
    if (key in obj) {
        console.log('Уже есть')
    }
    obj[key] = value;
};
const user = {
    name: 'Viktoria'
};
let key = prompt('key')
let value = prompt('value')
objUser(key, value, user);
console.log(user)
