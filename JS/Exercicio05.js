let peso = parseFloat(prompt('informe o seu peso: '));
let altura = parseFloat(prompt('informe a sua altura: '));

const IMC = peso / (altura * altura);

console.log(IMC);

if(IMC < 18.5){
    alert('Sua situação é de Peso abaixo do normal');
}
else if(IMC >= 18.5 && IMC <= 24.9){
    alert('Sua situação é de Peso ideal');
}
else if(IMC >= 25 && IMC <= 29.9){
    alert('Sua situação é de Acima do peso');
}
else if(IMC >= 30 && IMC <= 34.9){
    alert('Sua situação é de Obesidade grau 1');
}
else if(IMC >= 35 && IMC <= 40){
    alert('Sua situação é de Obesidade grau 2');
}
else
    alert('Sua situação é de Obesidade grau 3');

    