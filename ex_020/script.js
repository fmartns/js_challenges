function verificarMaiorIdade(idade) {
    if(idade >= 18){
        return "Você está apto a iniciar a auto escola.";
    } else {
        return `Ainda faltam ${18 - idade} anos para você completar 18 anos.`
    }
}

console.log(verificarMaiorIdade(2));