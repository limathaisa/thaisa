
window.addEventListener("DOMContentLoaded", function(){

let form = document.querySelector('#form');

form.addEventListener("submit", function(e){
e.preventDefault();

let btn = document.querySelector('#btn');
let select = document.querySelector("#select").value;
let input = document.querySelector('#url').value;
let font = document.querySelector('#font').value;
let div = document.querySelector('#div');
let img = document.querySelector('#img');


function mudarCor(select){
    if(select == "azul") document.body.style.backgroundColor = "lightblue";
    if(select == "vermelho") document.body.style.backgroundColor = "red";
    if(select == "roxo") document.body.style.backgroundColor = "purple";
    if(select == "laranja") document.body.style.backgroundColor = "orange";
    if(select == "verde") document.body.style.backgroundColor = "green";
    if(select == "marrom") document.body.style.backgroundColor = "brown";
}

function addImagem(input){

    if(input !== ""){
        img.src = input;
        img.alt = "imagem escolhida";
        img.width = 500;
        div.appendChild(img);
        
   
    }

}

function mudarFonte(font){
  
//document.body.style.fontFamily = `"${font}"`;
//document.body.style.fontFamily = "Brush Script MT, Brush Script Std, cursive";

document.documentElement.style.fontFamily = font;
    
}

mudarCor(select);
addImagem(input);
mudarFonte(font);


});

});