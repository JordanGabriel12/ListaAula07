function Quadrado(lado){
    return Math.pow(lado, 2);
}
function Retangulo(base, altura){
    return base * altura;
}
function TrianguloRetangulo(base, altura){
    return (base * altura) / 2;
}
function Circulo(raio){
    const PI = 3.14;
    return PI * (Math.pow(raio, 2));
}

function Main(){
    alert('Figuras:\n1: Quadrado\n2: Retangulo\n3: Triangulo Retangulo\n4: Circulo');
    let opcao = prompt('Informe o cálculo desejado: ');
    console.log(opcao);
    if(opcao == 1){
        let lado = parseFloat(prompt('Informe o lado: '));
        alert('A área é: ' + Quadrado(lado));
    }
    else if(opcao == 2){
        let base = parseFloat(prompt('Informe a base:'));
        let altura = parseFloat(prompt('Informe a altura:')); 
        alert('A área é: ' + Retangulo(base, altura));
    }
    else if(opcao == 3){
        let base = parseFloat(prompt('Informe a base:'));
        let altura = parseFloat(prompt('Informe a altura:')); 
        alert('A área é: ' + TrianguloRetangulo(base, altura));
    }
    else if(opcao == 4){
        let raio = parseFloat(prompt('Informe o raio: '));
        alert('A área é: ' + Circulo(raio));
    }
    else
        alert('Valor inválido');

}

Main();

