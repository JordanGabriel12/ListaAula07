let nome =  prompt('Informe seu nome: ');
let numero = parseInt(prompt('Informe um numero: '));

if ((numero % 2) == 0){
    alert(`${nome} \nO número é par`);
}
else
    alert(`${nome} \nO número é ímpar`);