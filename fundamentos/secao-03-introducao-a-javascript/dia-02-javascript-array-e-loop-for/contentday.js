let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//-----------------------------------------------------

let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//-----------------------------------------------------

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu2.push('Contato')

console.log(menu2);

//-----------------------------------------------------

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
console.log(groceryList[index])
}

//-----------------------------------------------------

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let word of names) [
    console.log(word)
]

//-----------------------------------------------------

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
  sum += fruits[index];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

//------------------------------------------------------

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);