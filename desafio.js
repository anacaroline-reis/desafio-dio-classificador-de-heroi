// Desafio Elaborado visando criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
  com base em dados previamente informados.

let nome = "Estopinha"

let expXP = 6500;

let niveldoHeroi;


if (niveldoHeroi < 1000) {
 niveldoHeroi = "Ferro"}

  else if (expXP >= 1001 && expXP <= 2000) {

  niveldoHeroi = "Bronze"}

  else if (expXP >= 2001 && expXP <= 5000) {

  niveldoHeroi = "Prata"}

 else if (expXP >= 5001 && expXP <= 7000) {

  niveldoHeroi = "Ouro"}

 else if (expXP >= 7001 && expXP <= 8000) {

  niveldoHeroi = "Platina"}

 else if (expXP >= 8001 && expXP <= 9000) {

  niveldoHeroi = "Ascendente"}

 else if (expXP >= 9001 && expXP <= 10000) {

  niveldoHeroi = "Imortal"}

 else {niveldoHeroi = "Radiante"}

console.log ("O Herói de nome " + nome + " está no nível " + niveldoHeroi)





