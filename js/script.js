//Stampare tutti i numeri da 1 a 100
//Individuare i numeri multipli di 3
//Individuare i numeri multipli di 5


for(let i=1;i<=100;i++){
    //Verifico se il numero e' divisibile per tre
if(i%3 == 0){
    //Verifico se e' contemporaneamente divisibile per 5 ->FizzBuzz
    if(i%5==0){
        console.log(i,' FizzBuzz');
    //Se non e' divisibile anche per 5, allora ->Fizz
    }else{
        console.log(i,' Fizz');
    }
//Verifico se il numero e' divisibile per 5 -> Buzz
}else if(i%5 == 0){
    console.log(i,' Buzz');
//Identifico i numeri non divisibile per 3 AND 5
}else{
    console.log(i);
}
}

//Ottimizzazione codice
for(let j = 1; j<=100; j++){
    // Dichiarazione variabile da stampare ad ogni ciclo
    let output = '';
    //Verifico se e' divisibile per 3 -> Fizz
    if (j%3 == 0){
        output += 'Fizz';
    }
    //Verifico se e' divisibile per 5 -> Buzz
    if (j%5 == 0){
        output += 'Buzz'
    }
    //Verifico se non e' divisible per 3 o 5
    if(output == ''){
        output = j
    }
    //Stampo e ritorno a variabile ''
    console.log(output);
}