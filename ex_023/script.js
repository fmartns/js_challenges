function tamanhoString(texto) {
    if(texto.length > 10 ) {
        return "Texto muito longo";
    } else {
        return "Texto dentro do limite";
    }
}

console.log(tamanhoString("Exemplo"));
console.log(tamanhoString("Exemplo com mais de 10 caracteres."));