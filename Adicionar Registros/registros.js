var Nome = "";
var idade = "";


function mostrar(){
    Nome = document.getElementById('nome');
    idade = document.getElementById('idade');
   
    console.log(Nome);
    console.log(idade);
    document.getElementById('resultado').innerHTML = Nome.value;
    document.getElementById('result').innerHTML = idade.value;
  
}
 
