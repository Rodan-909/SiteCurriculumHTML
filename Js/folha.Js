/*botão*/
var gerar = document.getElementById("gerar");


/*campos de entrada*/

var nome = document.getElementById('nome')
var nHoras = document.getElementById('horas')
var vHoras = document.getElementById('valor')
var nFilhos = document.getElementById('nFilhos')
var bruto = document.getElementsByClassName("bruto")[0]
var inss1 = document.getElementsByClassName("inss")[0]
var ir1 = document.getElementsByClassName("ir")[0]
var familia1= document.getElementsByClassName("familia")[0]
var liquido1 = document.getElementsByClassName("liquido")[0]


gerar.addEventListener('click', function (){

    var nome1 = nome.value;
    var horas1 = nHoras.value;
    var valor1 = vHoras.value;
    var filhos1 = nFilhos.value;

    console.log(horas1) 
    console.log(valor1) 
    var bruto1 = horas1 * valor1;
    console.log(bruto1)    
    //inss//
    if(bruto1 <= 1302){
       inss = (bruto1 * 0.075);
    }else if(bruto1 >= 1320.1 && bruto1 <= 2571.29){
       inss = (bruto1 * 0.09);
    }else if(bruto1 <= 2571.30 && bruto1 <= 3865.94){
       inss = (bruto1 * 0.12);
    }else {
        inss =(bruto1 * 0.14);
    }


    //ir//
    if(bruto1 == 1903.98){
        ir=0;
    }else if(bruto1 >= 1903.99 && bruto1 <= 2826.65){
       ir = bruto * 0.075;
    }else if(bruto1 >= 2826.66 && bruto1 <= 3751.05){
        ir = bruto1 * 0.15;
    }else if(bruto1 >= 3751.06 && bruto1 <= 4664.68){
        ir = bruto1 * 0.225;
    }else{
        ir = bruto1 * 0.275;
    }


   //salário família//
   var familia = filhos1 * 60;
    var liquido = parseFloat( bruto1 - inss - ir + familia);

   //desconto//
  
    bruto.textContent =`Salário bruto igual a R$ ${bruto1.toFixed(2)} reais.`;
    ir1.textContent =`Imposto de renda igual a R$ ${ir.toFixed(2)} reais.`;
    inss1.textContent =`INSS igual a R$ ${inss.toFixed(2)} reais.`;
    familia1.textContent =`Salario Familia igual a R$ ${familia} reais.`;
    liquido1.textContent =`Salario Liquido igual a R$ ${liquido.toFixed(2)} reais.`;
   
   

})