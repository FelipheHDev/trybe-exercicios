//console.log()

let a = 5;
let b = 10;

if (a>b) {
    console.log("'a' é maior que 'b'")
} else {
    console.log("'b' é maior que 'a'")
};

//-------------------------------------------------------------

let aa = 2;
let bb = 4;
let cc = 6;

if (aa > bb && aa > cc) {
  console.log('O maior número é: ' + aa + ' (aa)');
} else if (bb > aa && bb > cc) {
  console.log('O maior número é: ' + bb + ' (bb)');
} else {
  console.log('O maior número é: ' + cc + ' (cc)');
};

//-------------------------------------------------------------

let number = 4;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

//-------------------------------------------------------------

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles=180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}

//-------------------------------------------------------------

let chessPiece = 'peão';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};

//-------------------------------------------------------------

let grade = 83;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//-------------------------------------------------------------

let n1 = 3;
let n2 = 6;
let n3 = 9;

let isEven = false;

if ((n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

//-------------------------------------------------------------


let x = 1;
let y = 3;
let z = 5;

let isOdd = false;

if ((x % 2 !== 0 || y % 2 !== 0 || z % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

//-------------------------------------------------------------

//Não entendi a questão da multiplicação ser *1.2
let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
};

//-------------------------------------------------------------

