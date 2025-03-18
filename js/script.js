//Stampare tutti i numeri da 1 a 100
//Individuare i numeri multipli di 3
//Individuare i numeri multipli di 5

for(let i=1;i<=100;i++){
if(i%3 == 0){
    if(i%5==0){
        console.log('FizzBuzz');
    }else{
        console.log('Fizz');
    }
}else if(i%5 == 0){
    console.log('Buzz');
}else{
    console.log(i);
}
}