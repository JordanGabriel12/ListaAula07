let valor1 = prompt('Insira o primeiro valor');
let valor2 = prompt('Insira o segundo valor');

let valor1Number = parseInt(valor1);
let valor2Number = parseInt(valor2);

let totalSoma = (valor1Number + valor2Number);
let totalSubtracao = (valor1Number - valor2Number);
let totalMultiplicacao = (valor1Number * valor2Number);
let totalDivisao = (valor1Number / valor2Number);

alert('Valor da soma: ' + totalSoma);
alert('Valor da Subtração: ' + totalSubtracao);
alert('Valor da Multiplicação: ' + totalMultiplicacao);
alert('Valor da Divisão: ' + totalDivisao);
