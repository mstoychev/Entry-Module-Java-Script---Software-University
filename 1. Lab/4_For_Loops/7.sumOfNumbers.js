function sumOfNumbers(input){
    //Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата. 
    let text = input[0].toString();   // también se puede usar + "" --> POR SI ENTRA numero o string --> lo convierte en STRING y la función siempre funcionará
    let sum = 0;
    
    //console.log(text[0]); para llegar a posición 0 del texto y me da 1 en este caso
    //console.log(text[1]); para llegar a posición 1 del texto y me da 2 en este caso

    for (let i = 0; i < text.length; i++){
        //console.log(text[i])
        sum += Number(text[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
//sumOfNumbers(["1234"])