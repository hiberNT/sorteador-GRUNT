document.addEventListener('DOMContentLoaded',function() { 
    document.getElementById('form-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
    
        let numeroAleatorio = Math.random() * numeroMaximo; 
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //+1 pra n da resutado 0 

        
        document.getElementById('resultado-valor').innerText =  numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'; //fazendo o resultado so aparecer quando clicar
    })
}) 


//Math.ceil(14,18) --> esse comando arredonda sempre pra cima ou seja vai da 15 ai
//Math/floor(14,18) -->arrdonda pra baixo q vai da 14 msm
//Math.round(14,5) --> esse arredonda pra cima e baixo depende do numero no exemplo arredondo
//pra cima fca 15 mas se fosse 14,4 dava 14