//Stampare tutti i numeri da 1 a 100
//Individuare i numeri multipli di 3
//Individuare i numeri multipli di 5

for(let i=1;i<=100;i++){
if(i%3 == 0){
    if(i%5==0){
        console.log(i,' FizzBuzz');
    }else{
        console.log(i,' Fizz');
    }
}else if(i%5 == 0){
    console.log(i,' Buzz');
}else{
    console.log(i);
}
}