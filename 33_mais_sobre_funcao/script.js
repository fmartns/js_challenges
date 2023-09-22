function multiplicarTresNumeros(x, y, z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(1, 4, 6));

const mult = multiplicarTresNumeros(5, 4, 8);

console.log("O valor de mult é " + mult);

function podeDirgir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigr!");
    } else{
        console.log("Não pode dirigir!");
    }
}

console.log(podeDirgir(19, true));
console.log(podeDirgir(25, true));
console.log(podeDirgir(44, 0));
console.log(podeDirgir(19, 1));
console.log(podeDirgir(17, false));