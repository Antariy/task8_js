// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for

const nums = [2, 3, 4, 5];

let el = 1;

for (let i of nums) {
    el *= i;
}
console.log(el);

// for =>

const nums2 = [2, 3, 4, 5];

let result = 1;

for (let i = 0; i < nums.length; i++) {
    result *= nums2[i];
}
console.log(result);


// 2
// Для каждого элемента массива вывести строку типа: Riga is in Latvia
// Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}

for (key in countries) { 
    console.log(`${countries[key]} is in ${key}`);
}

// 3
// Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;
let x = 0;

while (val > 5) {
    val /= 2;
    x++;
}
console.log(val);
console.log(`Количество итераций: ${x}`);

// 4
// Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// строка должна состоять из 4 символов одно из которых число диапозона
// если 5 то строка 0005, если 500 то строка 0500
// PS если понадобиться длина числа, метод length с числом не работает
// String(число) конвертирует число в строку
// let emptyArr = [];

// не понял что нужно делать вообще!


// 5
// Для заданного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] % 2 === 0) {console.log(numbers[i]);}
if (i === 22) {break;}} 

// or если задача дойти до 23 не индекса, а именно значения "23" которое имеет индекс в массиве - 4.

const numbers2 = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] % 2 === 0) {console.log(numbers[i]);}
if (i === 4) {break;}} 