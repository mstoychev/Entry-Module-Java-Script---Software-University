function numbersN1(input){
    //функция, която получава положително число n, въведено от потребителя и печата числата от n до 1 в обратен ред
    let n = Number(input[0]);
    for ( let i = n; i >= 1; i--){
        console.log(i)
    }
}
//numbersN1(["5"])