function CalcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    
    if(peso == "" || altura =="" || altura == "" &&  peso =="") {
        alert("Escrevas nos campos")
    } 
    else{ 
        let float =  altura;
        let resultado = peso / (float*float*0.01/100);
        Recebe(resultado.toFixed(1));
    }
  }
  function Recebe(resultado){
    if(resultado < 16.0){
        document.getElementById('imc').value = "Magreza Grave"; 
    }
    else if(resultado >= 16.0 && resultado < 17.0){
        document.getElementById('imc').value = "Magreza Moderada";
    }
    else if(resultado >= 17.0 && resultado <= 18.5){
        document.getElementById('imc').value = "Magreza leve";
    }
    else if(resultado > 18.5 && resultado <= 25.0){
        document.getElementById('imc').value = "Saudável";
    }
    else if(resultado > 25.0 && resultado < 30.0){
        document.getElementById('imc').value = "Sobrepeso";
    }
    else if(resultado >= 30.0  && resultado <= 35.0 ){
        document.getElementById('imc').value = "Obesidade Grau I";
    }
    else if(resultado > 35.0  && resultado <= 40.0 ){
        document.getElementById('imc').value = "Obesidade Grau II";
    }
   else if(resultado > 40.0){
        document.getElementById('imc').value = "Obesidade Grau III";
    }

    
    document.getElementById('resultado').value = resultado;
    document.getElementById("imc-range").value = resultado
  }

  const html = document.querySelector('html')
  const chk = document.getElementById('chk')

  chk.addEventListener('change', function ()  {
  html.classList.toggle('dark')
  })
   

  