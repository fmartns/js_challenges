let adm_user = "fmartns";
let adm_pass = "1234";

let user = prompt("user: ");
let pass = prompt("password: ");

if ((user == adm_user) && (pass == adm_pass)) {
    alert("Login efetuado com sucesso!");
} else if ((user == undefined) || (pass == undefined)) {
    alert("Você deixou de digitar algum campo.");
} else if ((user != adm_user) || (pass != adm_pass)) {
    alert("Usuário inválido.");
} else {
    alert("Ocorreu um erro.");
}

