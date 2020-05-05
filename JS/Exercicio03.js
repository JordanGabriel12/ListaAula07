let valores = [];
let soma = 0;

//Adiciona
valores.push(parseFloat(prompt('insira o primeiro valor')));
valores.push(parseFloat(prompt('insira o segundo valor')));
valores.push(parseFloat(prompt('insira o terceiro valor')));
valores.push(parseFloat(prompt('insira o quarto valor')));

console.log(valores);

//Ordena
valores.sort((a, b) => a - b);

//Soma
valores.forEach((item) => {
    soma += parseFloat(item);
});

if (valores.includes(null) || valores.includes('') || valores.includes(NaN)) 
    alert('Insira todos os valores para continuar...');

else{
    alert(`Menor Valor: ${valores[0]}`);
    alert(`Maior Valor: ${valores[(valores.length - 1)]}`);
    alert(`Média: ${parseFloat(soma / valores.length)}`);
}
