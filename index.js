console.log("Olá Mundo");

var cliente = "Thay";
console.log("Clintente:" + cliente);

var valorProduto = 500;
var valorDesconto = 35;

var calculardesconto = require ('./mudules/calculardesconto');

var valorFinal = calculardesconto(valorProduto, valorDesconto);

console.log("Valor do Produto com desconto: R$" + valorFinal);