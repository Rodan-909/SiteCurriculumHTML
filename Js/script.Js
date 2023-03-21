var titulo = document.querySelector('.titulo2 h1')
titulo.innerHTML = "Sistema Fit 2023"


/*botões*/
var verficar = document.getElementById('verificar');
var limpar = document.getElementById('limpar');
var voltar = document.getElementById('voltar');

/*campos de entrada*/ 
var nome = document.getElementById('nome');
var dataNasc = document.getElementById('dataNasc');

var altura = document.getElementById('altura');
var peso = document.getElementById('peso');
var sexo = document.querySelectorAll('input[name="sexo"]');


verficar.addEventListener('click', function (){

    var nome1 = nome.value;
    var peso1 = peso.value;
    var altura1 = altura.value;
    var sexoSelecionado;

    for(var i=0; i < sexo.length; i++){
        if(sexo[i].checked){
            sexoSelecionado = sexo[i].value;
            break;
        }
    }
  
    var data = new Date(dataNasc.value);
    var dataAtual = new Date();

    data.setUTCHours(12); /* ajusta a hora para 12:00 UTC */
    var dia = data.getUTCDate();
    var mes = data.getMonth() + 1;
    var ano = data.getUTCFullYear();
    var anoAtual = dataAtual.getFullYear();
    var modal = document.querySelector(".modal-content p");

    var imc = peso1 / (altura1 * altura1);
    if(sexoSelecionado == 'Masculino'){
       modal.textContent =  (`Sr. ${nome1}, você nasceu no ano de ${ano}, você tem ${anoAtual - ano} anos de idade.\n 
        Seu imc é de ${imc.toFixed(2)} `)
    }else{
      modal.textContent =  (`Sra. ${nome1}, você nasceu no ano de ${ano}, você tem ${anoAtual - ano} anos de idade.\n
         Seu imc é de ${imc.toFixed(2)}`)
    }
})




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("verificar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-------------------------------------------------------------------------------------//

