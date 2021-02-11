// HW1
// Создайте элемент 'p', при клике на котором появляется картинка размером 100px
// При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
// При клике на картинке она должна исчезать

const textElement = document.createElement('p');
textElement.setAttribute('id', 'click');
textElement.innerText = 'Картинка тут';

const showImage = function () {
    const image = document.createElement('img');
    image.setAttribute('src', 'https://mr-mem.ru/images/memes/picachu-meme.png');
    image.setAttribute('class', 'image');
    textElement.after(image);
    const resizeImage = function () {
        image.style = 'width: 200px; height: 200px; transition: 1.5s';
        const deleteImage = function () {
            this.remove()
        }

        image.addEventListener('click', deleteImage)
    }
    image.addEventListener('mouseover', resizeImage)
}

textElement.addEventListener('click', showImage);

document.body.append(textElement)

// HW2

// Дан массив с числами.
// Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.

let arr = [1, 2, 3, 0, 4, 5, 6];

function sum(array) {
    let num = 0;
    array.reverse()
    for (let item of array) {
        if (item === 0) {
            return num
        }
        num += item
    }
    console.log(num)
}

sum(arr)

// HW3
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

function sumFunc(array) {
    let res = 0;
    let sum = 0;
    for (let item of array) {
        if (sum > 10) {
            return res
        }
        sum += item
        res += 1
    }
    console.log(res)
}

sumFunc([1, 6, 3, 7])

// HW4
// Есть инпут, в который что-то вводим. Рядом с инпутом есть кнопка.
// По нажатию на кнопку выводим в консоль то, что вписали в инпут.

const resultButton = document.getElementById('button');
const getInputValue = function () {
    const inputArea = document.getElementById('input');
    console.log(inputArea.value);
    inputArea.value = '';
}

resultButton.addEventListener('click', getInputValue);

// HW5
// Привяжите всем ссылкам в документе событие - по наведению на ссылку в конец ее текста дописывается ее href
// в круглых скобках.

const allLinks = document.getElementsByTagName('a');

const LinkAddress = function (event) {
    const linkProp = document.createElement('span');
    linkProp.innerText = ` (${event.target}) ` ;
    if (event.target.localName === 'a') {
        event.target.after(linkProp)
    }
    this.addEventListener('mouseout', function() {
        linkProp.remove()
    })
}

document.body.addEventListener('mouseover', LinkAddress);



