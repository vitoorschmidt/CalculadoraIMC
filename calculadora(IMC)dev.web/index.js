function calcularIMC() {
    var peso = document.getElementById("peso").value;
     var altura = document.getElementById("altura").value;
     if (peso == "" || altura == "") {
       alert("Preencha todos os campos!");
       return;
     }
     var imc = peso / (altura * altura);
     document.getElementById("imc").innerHTML = "Seu IMC é " + imc.toFixed(2);
     if (imc < 18.5) {
       document.getElementById("comentario").innerHTML = "Você está abaixo do peso!";
     } else if (imc >= 18.5 && imc < 25) {
       document.getElementById("comentario").innerHTML = "Você está com peso normal!";
     } else if (imc >= 25 && imc < 30) {
       document.getElementById("comentario").innerHTML = "Você está com sobrepeso!";
     } else if (imc >= 30 && imc < 35) {
       document.getElementById("comentario").innerHTML = "Você está com obesidade grau I!";
     } else if (imc >= 35 && imc < 40) {
       document.getElementById("comentario").innerHTML = "Você está com obesidade grau II!";
     } else {
       document.getElementById("comentario").innerHTML = "Você está com obesidade grau III!";
     }
   }
   function limparFormulario() {
     document.getElementById("peso").value = "";
     document.getElementById("altura").value = "";
     document.getElementById("imc").innerHTML = "";
     document.getElementById("comentario").innerHTML = "";
   }