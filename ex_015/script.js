let num = prompt("Digite um número: ");
let divisoes = 0;

for(let i = 1; i <= num; i++){
    if(num%i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    alert('O número é primo');
} else {
    alert('O número não é primo')
}