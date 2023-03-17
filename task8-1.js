// 6
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

for (let i = 0; i < people.length; i++) {
    console.log(`<ul> <li><h1>Hello ${people[i].name} ${people[i].surname}</h1></li> </ul>`);
}

// как сделать ul не повторяющимся?

// 7
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

function period(start, end) {
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
    console.log(i + ' - четное');
} else {
    console.log(i + ' - нечетное')
    }
  }
}
period(10, 21);


// 8
// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше

function numbers3(num1, num2) { 
   if (num1 > num2) {console.log(num1 + " больше чем " + num2)}
   else if (num2 > num1) {console.log(`${num2} больше чем ${num1}`);}
   else {console.log("Равно!")};
}
numbers3(125, 567);


// 9
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

function numbers4(num1, num2, num3) {
  if (num1 > num2) { 
      if (num1 > num3) {return num1};
  } if (num2 > num1)
   {if(num2 > num3) {return num2}}
  else {return num3};
}

numbers4(10, 15, 3);

// почему не работает?(( переменную надо? или использовать while?


// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
  name: 'Jack',
  surname: 'Smith',
  emailVerified: false,
  age: 20,
  gender: 'Male',
  city: 'London',
  zip: 13233,
  hasChildren: false,
  married: true
}

for (let key in myProfile) {
  if (typeof myProfile[key] === 'string') {
      console.log(`${key}: ${myProfile[key]}`);
  }
}

// 11
// FIZZ BUZZ
// Для диапозона чисел от 1 до 100 написать код который веведет
// число + FIZZ если число делится на 3 без остатка
// число + BUZZ если число делится на 5 без остатка
// число + FIZZ BUZZ если число делится без остатка и на 3 и на 5

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0) {console.log(i + "FIZZ");}
  if (i % 5 === 0) {console.log(i + "BUZZ");}
  if (i % 3 === 0 && i % 5 === 0) {console.log(i + "FIZZ BUZZ");}
}


