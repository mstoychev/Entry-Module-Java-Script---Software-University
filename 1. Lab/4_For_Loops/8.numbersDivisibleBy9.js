function numbersDivisibleBy9(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let buff = "";   // uso de buffer para evitar segundo for cycle y que en la consola salga impreso como pide el enunciado

    for(i = num1; i <= num2; i++ ){
        if (i % 9 ==0){
            sum += i 
            buff += i + "\n"           
        }       
    }
    console.log(`The sum: ${sum}`);
    console.log(buff);
}
//numbersDivisibleBy9(["100", "200"])