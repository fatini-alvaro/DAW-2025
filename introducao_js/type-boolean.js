const value1 = true;
const value2 = false;

//Thruty/Falsly -> variaveis vazias ou com valor 0, se submetidas a um teste lógico, ficam boolean.

if (value1) {
  console.log("O valor é verdadeiro");
} else {
  console.log("O valor é falso");
}
//Saida: O valor é verdadeiro

if (!value1){
  console.log("O valor é verdadeiro");
} else {
  console.log("O valor é falso");
}
//Saida: O valor é falso

//Thruty/Falsly -> variaveis vazias ou com valor 0, se submetidas a um teste lógico, ficam boolean.

const value3 = '';

if (value3) {
  console.log("O valor é verdadeiro");
} else {
  console.log("O valor é falso");
}
//Saida: O valor é falso

//operador ternário
(Logica) ? (entao) : (senao)

const resultado = value3 ? "O valor é verdadeiro" : "O valor é falso";
console.log(resultado);
//Saida: O valor é falso