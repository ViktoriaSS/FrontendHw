// HW1
// Создать функцию конструктор Animal c аргументами name, age, color.
// Написать логику для того, чтобы функцию можно было вызывать как с, так и без new:
// При вызове без new новый обьект все равно должен создаться

// function Animal(name, age, colour) {
//  ....
// }

const rabbit = Animal('Name', 'Age', 'Colour'); // переадресовывает вызовы на new Animal

function Animal(name, age, color) {
    if (!new.target) {
        return new Animal(name, age, color);
    }
    this.name = name;
    this.age = age;
    this.color = color;
}

const rabbit = Animal("Viktoria", "21", "Turquoise");
console.log(rabbit);

// HW2
// Создайте функцию-конструктор Calculator, который создаёт объекты с такими методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// setAction() запрашивает действие при помощи prompt, которые мы хотим сделать (+, -, / и т.д)
// doAction() выполняет действие, которое юзер ввел (будет вызывать в себя методы sum, mul, min и т.д)
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// min() возвращает разницу введённых свойств.
// другие методы можете добавит если хотите (метод для квадратного корня и т.д.)
// const calculator = new Calculator();
// calculator.read();
// calculator.setAction();
// const tres = calculator.doAction(); // результат

function Calculator() {
    this.read = function () {
        this.value1 = +prompt("Введи первое число");
        this.value2 = +prompt("Введи второе число");
    };
    this.setAction = function () {
        this.action = prompt("Сложить, перемножить или отнять?").toLowerCase();
    };
    this.doAction = function () {
        if (this.action === "сложить") {
            return this.sum();
        } else if (this.action === "перемножить") {
            return this.mul();
        } else if (this.action === "отнять") {
            return this.min();
        } else {
            console.log("Выберите из возможных действий")
        }
    };
    this.sum = function () {
        return this.value1 + this.value2;
    };
    this.mul = function () {
        return this.value1 * this.value2;
    };
    this.min = function () {
        return this.value1 - this.value2;
    };
}

const calculator = new Calculator();
calculator.read();
calculator.setAction();
const result = calculator.doAction();
console.log(result);

// HW3
// Создать функцию конструктор Nums, которая принимает бесконечное множество аргументов,
// и они записываются в свойство args в виде массива.
// Добавить в прототип для всех объектов, которые создадим от конструктора Nums, 2 метода: метод getSum
// должен вернуть сумму всех элементов (которые только целые числа) массива args
// метод myFilterReverse должен отфильтровать массив и оставить только целые числа и развернуть массив
// (было [1, 2, 3] -> стало [3, 2, 1]). Метод .reverse использовать нельзя :) только целые
// числа -> Number.isInteger(1); // true Number.IsInteger(1.2); // false

function Nums(...args) {
    this.args = args;
}

Nums.prototype.getSum = function () {
    let sum = 0;
    for (let i = 0; i < this.args.length; i++) {
        if (Number.isInteger(this.args[i])) {
            sum += this.args[i];
        }
    }
    return sum;
};

Nums.prototype.myFilterReverse = function () {
    let result = [];
    let newArr = this.args.filter(function (item) {
        return Number.isInteger(item);
    });
    for (let i = newArr.length; i > 0; i--) {
        result.push(newArr.pop());
    }
    return result;
};

const test = new Nums(1, 2, 3, 4, 5.4, 6.8);
console.log(test.getSum());
console.log(test.myFilterReverse());

// HW4
// Есть массив [1, 1, 2, 2, 3]. Создать свой метод getUnique для любых массивов,
// который отфильтрует массив и оставит в нем только уникальные значения
// Подсказка: чтобы было легче почитайте про метод .includes()

const arrs = [1, 2, 2, 3, 3, 3];

Array.prototype.getUnique = function () {
    return this.filter((val, index, arr) => arr.indexOf(val) === index);
};
console.log(arrs.getUnique());

//способ через includes()
const arrs = [1, 2, 2, 3, 3, 3];

Array.prototype.getUnique = function () {
    let arr = [];
    for (var i=0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i])
        }
    }
    return arr;
};
console.log(arrs.getUnique());

// HW5
// Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода
// для любых объектов:
// метод getKeySum, который найдет сумму значений всех ключей, которые true.
// метод reversKey который поменяет местами key и value (ключ и значение)
// Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}

