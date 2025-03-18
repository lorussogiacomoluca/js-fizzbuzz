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

