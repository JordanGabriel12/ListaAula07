let valores = [];

valores.push(prompt('Insira o primeiro valor: '));
valores.push(prompt('Insira o segundo valor: '));
valores.push(prompt('Insira o terceiro valor: '));

valores.sort((a,b) => a-b);
alert('Valores Ordenados: ' + valores);