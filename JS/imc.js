function calcularIMC() {
    var alturaStr = document.getElementById("alturaInput").value;
    var pesoStr = document.getElementById("pesoInput").value;
  
    // Substituir vírgulas por pontos
    var altura = parseFloat(alturaStr.replace(",", "."));
    var peso = parseFloat(pesoStr.replace(",", "."));
  
    if (isNaN(altura) || isNaN(peso)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }
  
    var imc = peso / (altura * altura);
    var resultado = "";
  
    if (imc < 18.5) {
      resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      resultado = "Peso saudável";
    } else if (imc >= 25 && imc < 30) {
      resultado = "Sobrepeso";
    } else {
      resultado = "Obesidade";
    }
  
    document.getElementById("resultadoIMC").innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + "Classificação: " + resultado;
    document.getElementById("resultadoIMC").style.display = "block";
  }

  //-- FUNCIONALIDADE IMC

  function calcularIMC() {
    var alturaStr = document.getElementById("alturaInput").value;
    var pesoStr = document.getElementById("pesoInput").value;
  
    // Substituir vírgulas por pontos
    var altura = parseFloat(alturaStr.replace(",", "."));
    var peso = parseFloat(pesoStr.replace(",", "."));
  
    if (isNaN(altura) || isNaN(peso)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }
  
    var imc = peso / (altura * altura);
    var resultado = "";
  
    if (imc < 18.5) {
      resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      resultado = "Peso saudável";
    } else if (imc >= 25 && imc < 30) {
      resultado = "Sobrepeso";
    } else {
      resultado = "Obesidade";
    }
  
    document.getElementById("resultadoIMC").innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>" + "Classificação: " + resultado;
    document.getElementById("resultadoIMC").style.display = "block";
  }
  