let usuario = prompt("escreva o nome de usuario: ");
let senha = prompt("escreva a senha: ")

if(usuario == "gustavo" && senha == "1234" ) {
    console.log("LOGADO!!");
}  else if (usuario != "gustavo" && senha != "1234") {
    alert("usuario incorreto!!"); 
} else if (usuario != undefined && senha != undefined) { 
    alert("erro!!")
} else {
    alert("erro")
}
   



