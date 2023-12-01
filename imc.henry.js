var altura = [];
var peso = [];
var imc = [];
var resultado = [];
var nome = [];

function calcular(event){
    event.preventDefault();

    //IMC da primeira pessoa
    peso[0] = parseFloat(document.getElementById("peso1").value);
    altura[0] = parseFloat(document.getElementById("altura1").value);
    nome[0] = document.getElementById("nome1").value;

    imc[0] = peso[0] / (altura[0] * altura[0]);

    resultado = document.getElementById("resultado1");

    if (imc[0] < 17){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Cuidado voce esta muito abaixo do peso!";
    }else if (imc[0] > 17 && imc[0] <= 18.49){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Abaixo do peso!";
    }else if (imc[0] > 18.5 && imc[0] <= 24.99){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Voce esta no peso ideal!";
    }else if (imc[0] > 25 && imc[0] <= 29.99){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Voce esta com sobrepeso!";
    }else if (imc[0] > 30 && imc[0] <= 34.99){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Cuidado obesidade grau I!";
    }else if (imc[0] > 35 && imc[0] <= 39.99){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Cuidado obesidade grau II!";
    }else if (imc[0] > 40){
        resultado = document.getElementById("resultado1");
        resultado.innerHTML = "<br/>"+nome[0]+" seu resultado foi: " + imc[0].toFixed(2) + "<br/> Cuidado obesidade grau III!";
    }

    document.getElementById("nome1").value = "";
    document.getElementById("peso1").value = "";
    document.getElementById("altura1").value = "";


//IMC segunda pessoa
    peso[1] = parseFloat(document.getElementById("peso2").value);
    altura[1] = parseFloat(document.getElementById("altura2").value);
    nome[1] = document.getElementById("nome2").value;

    imc[1] = peso[1] / (altura[1] * altura[1]);

    resultado = document.getElementById("resultado2");

    if (imc[1] < 17){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Cuidado voce esta muito abaixo do peso!";
    }else if (imc[1] > 17 && imc[1] <= 18.49){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Abaixo do peso!";
    }else if (imc[1] > 18.5 && imc[1] <= 24.99){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Voce esta no peso ideal!";
    }else if (imc[1] > 25 && imc[1] <= 29.99){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Voce esta com sobrepeso!";
    }else if (imc[1] > 30 && imc[1] <= 34.99){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Cuidado obesidade grau I!";
    }else if (imc[1] > 35 && imc[1] <= 39.99){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Cuidado obesidade grau II!";
    }else if (imc[1] > 40){
        resultado = document.getElementById("resultado2");
        resultado.innerHTML = "<br/>"+nome[1]+" seu resultado foi: " + imc[1].toFixed(2) + "<br/> Cuidado obesidade grau III!";
    }

    document.getElementById("nome2").value = "";
    document.getElementById("peso2").value = "";
    document.getElementById("altura2").value = "";


    //IMC terceira pessoa
    peso[2] = parseFloat(document.getElementById("peso3").value);
    altura[2] = parseFloat(document.getElementById("altura3").value);
    nome[2] = document.getElementById("nome3").value;

    imc[2] = peso[2] / (altura[2] * altura[2]);

    resultado = document.getElementById("resultado3");

    if (imc[2] < 17){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Cuidado voce esta muito abaixo do peso!";
    }else if (imc[2] > 17 && imc[2] <= 18.49){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Abaixo do peso!";
    }else if (imc[2] > 18.5 && imc[2] <= 24.99){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Voce esta no peso ideal!";
    }else if (imc[2] > 25 && imc[2] <= 29.99){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Voce esta com sobrepeso!";
    }else if (imc[2] > 30 && imc[2] <= 34.99){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Cuidado obesidade grau I!";
    }else if (imc[2] > 35 && imc[2] <= 39.99){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Cuidado obesidade grau II!";
    }else if (imc[2] > 40){
        resultado = document.getElementById("resultado3");
        resultado.innerHTML = "<br/>"+nome[2]+" seu resultado foi: " + imc[2].toFixed(2) + "<br/> Cuidado obesidade grau III!";
    }

    document.getElementById("nome3").value = "";
    document.getElementById("peso3").value = "";
    document.getElementById("altura3").value = "";


}