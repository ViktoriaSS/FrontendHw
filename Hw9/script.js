// HW1
// Реализовать Числа Фибоначчи двумя способами (рекурсия и цикл)

const fibNumbers = n => {
    let prev = 0, next = 1;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}

const fib2 = n => {
    if (n === 0) {
        return [0, 1];
    } else {
        const [prev, next] = fib2(n - 1);
        return [next, prev + next];
    }
};

console.log(fib2(0));//не разобралась, как доделать, в процессе

console.log(fibNumbers(10));

// HW2
// Рассчитать сумму натуральных чисел до n (2 решения - рекурсия и цикл)

let result = 1;
const lastNumber = n => {
    for (let i = 1; i <= n; i++) {
        result = result * i
    }
    return result;
}

const lastNumber1 = (n) => {
    return n ? n * lastNumber1(n - 1) : 1;
}

console.log(lastNumber(10));
console.log(lastNumber1(10));

// HW3
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// Метод setInterval

function printNumber(from, to) {
    let timer = setInterval(() => {
        console.log(from);
        if (from === to) {
            clearInterval(timer)
        }
        from++
    }, 1000)
}

printNumber(1, 20)

// Метод setTimeout

function printNumber1(from, to) {
    setTimeout(function go() {
        console.log(from);
        if (from < to) {
            setTimeout(go, 1000)
        }
        from++
    }, 1000);
}

printNumber1(1, 10)

// HW4
// Нужно создать интервал, который выводит в консоль количество секунд, прошедших с момента запуска программы.
// "Прошло: 1 сек."
// "Прошло: 2 сек." ..... и так далее
// Допишите программу так, чтобы она останавливалась при достижении 5 секунд и надпись о пройденном времени
// больше не выводилась в консоль.

let i = 0

let time = setInterval(
    function () {
        i++
        console.log("Прошло " + i + " секунд")
        if (i === 5) {
            clearInterval(time)
        }
    }, 1000
)

// HW5
// Написать логику, которая будет находить сумму всех ЧИСЕЛ, которые вписаны в li, и выводить эту сумму
// (в формате 1 + 2 + 3 = 6) в инпут (#inp) по нажатию на кнопку (#sum).

const links = document.getElementsByClassName('li');
const input = document.getElementById('inp');
const button = document.getElementById('sum');
const iterators = [];
for (const iterator of links) {
    if (!isNaN(+iterator.innerText)) {
        iterators.push(iterator.innerText)
    }
}
const sum = iterators.reduce((acc, item) => {
    return +acc + +item
})

button.addEventListener('click', () => input.value = `${iterators.join(' + ')} = ${sum}`);