// HW1
// Дан объект с городами и странами.
// Написать функцию getCity. Эта функция (getCity) должна
// вернуть новый массив, элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.
// Доступ к объекту может быть любым (через контекст, напрямую и т.д.)

function getCity(obj) {
    const NewCity = []
    for (let key in obj) {
        NewCity.push(`${obj[key]} - это ${key}`)
    }
    return NewCity
}

const citiesAndCountries = {
    "Киев": "Украина",
    "Нью-Йорк": "США",
    "Амстердам": "Нидерланды",
    "Берлин": "Германия",
    "Париж": "Франция",
    "Лиссабон": "Португалия",
    "Вена": "Австрия"
};

const result = getCity(citiesAndCountries)
console.log(result)

// HW2
// Cоздать объект с названиями дней недели. Где ключами будут ru и en,
// a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском.
// После написать функцию которая будет выводить в консоль название
// дня недели пользуясь выше созданным объектом (доступ к объекту можно получить напрямую).
// Все дни недели начинаются с 1 и заканичаются цифрой 7 (1 - понедельник, 7 - воскресенье).
// Функция принимает в аргументы 2 параметра:
// lang - название языка дня недели
// day - число дня недели

const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
}

function getNameOfDay(lang, day) {
    for (let key in this) {
        if (key === lang) {
            console.log(this[key][day - 1])
        }
    }
}

getNameOfDay.call(namesOfDays, 'ru', 3)

// HW3
// Написать универсальную функцию setProto, которая принимает в себя 2 аргумента (currentObj, protoObj).
// Функция должна устанавливать прототип (protoObj) для currentObj.
// То есть после вызова функции мы должны получить результат:

const person1 = {
    name: 'Viktoria'
};

const person2 = {
    age: 1
};

function setProto(currentObj, protoObj) {
    currentObj.__proto__ = protoObj
}

setProto(person2, person1);
console.log(person2.__proto__ === person1);

// HW4
// Создать базовый объек person. Этот объект должен выступать в роли прототипа для объекта person1.
// В объекте person должны быть такие методы:
// метод для установки имени и возвраста (getName, setName)
// метод для получения имени и возвраста (getAge, setAge)
// метод для валидации возраста (ageValidation)

// person1.setName(...); // установили новое имя
// person1.getName(); // имя

// person1.setAge(...); // установили возраст
// person1.getName(); // получили возраст

// Метод ageValidation вызывается при вывозе метода setAge
// (то есть внутри метода setAge). Метод ageValidation должен как-то
// проверить возраст, который мы вводим в setAge. Если возраст, который
// мы ввели, меньше 18, то записываем в age слово 'Validation Error', а
// есть введенный возраст больше 18, то вписываем в age это значение.

// person1.setAge(1); // передать возраст можно как угодно
// person1.getAge(); // 'Validation Error'

// person1.setAge(20); // передать возраст можно как угодно
// person1.getAge(); // 20

const person = {
    getName() {
        console.log(this.name);
    },
    setName(name) {
        this.name = name;
    },
    getAge() {
        console.log(this.age);
    },
    setAge(age) {
        this.age = this.ageValidation(age);
    },
    ageValidation(age) {
        if (age > 18) {
            return age;
        } else {
            return "Validation Error";
        }
    }
};
const person01 = {
    __proto__: person
};
person01.setAge(20);
person01.getAge();