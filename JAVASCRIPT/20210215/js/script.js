/*
lyginimas: 

== - ar vienoda reiksme
=== - ar atitinka reiksme ir tipas
!= - ar nelygu
!== - ar nelygi reiksme ir tipas
> - daugiau nei
< - maziau nei
>= daugiau arba lygu
<= maziau arba lygu

loginiai operatoriai:

&& - and
|| - or
! - not

skaiciavimai:
a++; a--;
++a; --a;

a += b (a = a + b)

*/

//const num = 15;

// if(num === '15') {  //string tipo '15'
//     console.log('true');
// } else {
//     console.log('false');
// }

//salyga ? true : false
//num === '15' ? console.log('true') : console.log('false');

// const color = 'red';

// if(color === 'red') { 
//     console.log('red');
// } else if (color === 'blue') {
//     console.log('blue'); 
// } else {
//     console.log('color is not red or blue');
// }

// const weatheIsNice = true;
// const quarantine = true;

// if(weatheIsNice && !quarantine) {
//     console.log('meet with friends');
// } else {
//     console.log('stay at home');
// }

// const color = 'red';

// switch(color) {
//     case 'blue':
//         console.log('blue');
//         break;
//     case 'red':
//         console.log('red');
//         break;
//     case 'green':
//         console.log('green');
//         break;
//     default:
//         console.log('nope');
// }

// while, do .. while, for, for of, for in
// foreach, map, filter, sort, reduce

// let i = 0;

// while(i <= 10) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

//let items = ['item1', 'item2', 'items3', 'item4'];

// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// for(value of items) {
//     console.log(value);
// }

// let person = {name: 'John', surname: 'Doe', age: 45};

// for(key in person) {
//     console.log(person[key]);
// }

// items.forEach(logItems);
// function logItems(item, index, array) {
//     console.log(item, index, array);
// }

// const ages = [20, 15, 45, 18, 13, 7];

// const adult = ages.filter(function(item) {
//     if(item >= 18) {
//         return true;
//     }
// });

// console.log(adult);

// const people = [
// {
//     name: 'John',
//     surname: 'Doe',
//     age: 45
// },
// {
//     name: 'Ana',
//     surname: 'Smith',
//     age: 18
// },
// {
//     name: 'Lisa',
//     surname: 'Kudrov',
//     age: 25
// },
// ];

// const names = people.map(function(person) {
//     return person.name;
// });
// console.log(names);

// function hello() {
//     console.log('hello');
// }

// hello();
// hello();

// function hello(name = 'Tom') {
//     console.log(`hello, ${name}`);
// }

// hello();

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(10, 20));