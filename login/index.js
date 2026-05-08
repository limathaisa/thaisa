document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("idform");
    let resultado = document.getElementById("resultado");


 let pessoa ={
           nome: "maria", email: "maria@GMAIL.COM", senha: "1234"
            }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let senha = document.querySelector("#senha").value;
        let select = document.querySelector('#select').value;
    
        if(nome.trim() === "" || email.trim() === ""){
            resultado.textContent = "Voce precisa preencher o nome e o email";
            return;
        }
      // caso a pessoa queira fazer login
        if(select == "login"){
            // se as informacoes forem iguais as que estao cadastradas
            if( email == pessoa.email && senha == pessoa.senha){
             window.location.href = "site1.html";
             console.log("voce entrou na sua conta");
            }
            // se nao...
            else { 
                resultado.textContent = "Suas informações estão incorretas";
                console.log(pessoa);
            }
        }
// caso queira criAR UMA CONTA.
        if(select == "criarconta"){
        pessoa.nome = nome;
        pessoa.email = email;
        pessoa.senha = senha;
        resultado.textContent = "seja muito bem vindx, agora voce ja pode fazer login" + " " + nome;
        console.log(pessoa);
        
        
    }});
});