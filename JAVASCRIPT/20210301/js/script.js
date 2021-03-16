//get element by id

// const h1 = document.getElementById('head');
// const queryH1 = document.querySelector('#head');

// document.getElementsByClassName('list-item');
// document.getElementsByTagName('li');
// document.querySelectorAll('li');

// document.querySelector('body').children;
// document.querySelector('body').childNodes;

//pakeisti h1 teksta

// const h1 = document.querySelector('h1');
// h1.innerHTML = 'Heading changed';
// h1.outerHTML = '<span>Heading changed</span>';
// h1.innerText = '<span>Heading changed</span>';
// h1.textContent = 'Heading changed';

// const div = document.getElementByID('div');
// let newChild = document.createElement('p');

// div.appendChild(newChild);
// newChild.innerText = 'hello';

// div.removeChild(newChild);
// newChild.remove();

// const h1 = document.querySelector('h1');
// h1.style.color = 'red';
// h1.style.cssText = 'color: red; font-family: arial;'
// h1.setAttribute('class', 'color');
// h1.classList.add('color');
// h1.classList.remove('color');
// h1.classList.toggle('color');
// console.log(h1.classList.contains('color'));

const main = document.querySelector('main');
main.setAttribute('class','body');
// 2. pasiimti H1 elementą, jam priskirti klasę heading

const h1 = document.querySelector('h1');
h1.setAttribute('class','heading');
// 3. passimti FORM elementą, jam priskirti klasę forn

const form = document.querySelector('form');
form.setAttribute('class', 'form');
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą su klase list-item.

let ul = document.querySelector('ul');
let newChild = document.createElement('li');
ul.appendChild(newChild);
newChild.innerText = 'list item';

// II dalis

// 1. įgyvendinti sąrašo funkcionalumą: paspaudus ant li elemento, jam pridedama (jei nėra) klasė .done, ir nuimama (jei yra) klasė .done

function clickEvent(event) {
	event.target.classList.toggle('done');
}

function dblClickEvent(event) {
	event.target.remove();
}

// III dalis

// pabaigti įgyvendinti sąrašo funkcionalumą:
// 1. vartotojui įvedus tekstą input laukelyje, tekstas pridedamas į sąrašą
// 2. pridėjus tekstą į sąrašą input laukas išvalomas
// 3. du kartus paspaudus list elementą jis pašalinamas

let field = document.getElementById('input');
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
	if (field.value != '') {
		addLi(field.value);
		field.value = null;	
	}
});
