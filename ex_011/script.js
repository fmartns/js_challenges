alert("Informe as informações solicitadas para verificar se o condutor esta apto a dirigr.")

let idade = prompt("Idade do condutor: ");

if(idade < 18) {
    alert("O condutor deve ter ao menos 18 anos para dirigir.");
} else {
    let cnh = prompt("O condutor possuí CNH (s/n)?");

    if(cnh == "s" || cnh == "S"){
        alert("O condutor está apto a dirigir!");
    } else if(cnh == "n" || cnh == "N"){
        alert("O condutor deve possuir uma carteira de motorista para dirigir.");
    } else {
        alert("Resposta inválida.");
    }
}

