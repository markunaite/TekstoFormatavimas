const namee = 'Ieva';
const age = 27;
const hobby = 'futbolas'
console.log(`Mano vardas ${namee}, man ${27} . Mano hobis yra ${hobby}`);


const date1 = 1993;
const date2 = 2025;
const age2 = date2 - date1;
console.log(`${date2} metais man bus ${age2} arba (${age2 - 1}) metai/metu`);


const skersmuo = 14;
const spindulys = 7;
const plotas = 3.14 * (Math.pow(7, 2));
console.log(`Apskritimo, kurio skersmuo yra ${skersmuo}, plotas yra ${plotas}`);


const celcius = 23;
const fahrenheit = (23 / 5) * 9 + 32;
console.log(`${celcius}C yra ${fahrenheit} F`);

const sakinys = "Mes kalbame mažai, jei nekalbame apie save.";
console.log(sakinys.length);
console.log(sakinys.toUpperCase());
console.log(sakinys.replace(' apie save', ' '));
const array = sakinys.split(' ');
console.log(array);
console.log(sakinys.indexOf('mažai'));
console.log(sakinys.replace(' kalbame', ' šnekame'));


let sakinys2 = "laba8s rYt56as, lIetuva";
sakinys2 = sakinys2.replace(/[0-9]/g, '');
sakinys2 = sakinys2.toLowerCase();
sakinys2 = sakinys2.replace(/l/g, 'L');
console.log(sakinys2);


let mokinys = {
    Martynas: {
      vardas: "Martynas",
      pavarde: "Lubys",
      amzius: 17,
      vidurkis: 4.5,
      stipendija: false,
    },
    Alina: {
      vardas: "Alina",
      pavarde: "Alijeva",
      amzius: 16,
      vidurkis: 9,
      stipendija: true,
    },
    Kazimieras: {
      vardas: "Kazimieras",
      pavarde: "Bakštys",
      amzius: 17,
      vidurkis: 9.3,
      stipendija: true,
    },
    Algimantas: {
      vardas: "Algimantas",
      pavarde: "Peraitis",
      amzius: 16,
      vidurkis: 6.5,
      stipendija: true,
    },
    Kotrynas: {
      vardas: "Kotryna",
      pavarde: "Petraitytė",
      amzius: 16,
      vidurkis: 4,
      stipendija: false,
    },
  };
  
  console.log(mokinys.Alina.amzius);
  console.log(mokinys.Algimantas.vidurkis);
  console.log(mokinys.Martynas);
