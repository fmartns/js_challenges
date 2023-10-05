function numeroNegativo(num) {
    if(num < 0){
        return num = num * (-1);
    } else {
        return `O número ${num} é positivo.`;
    }
}

console.log(numeroNegativo(-4));
console.log(numeroNegativo(4));