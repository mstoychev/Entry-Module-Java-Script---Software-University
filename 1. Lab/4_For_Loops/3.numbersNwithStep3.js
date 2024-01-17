function numbersNwithStep3(input){
    //Напишете функция, която получава число n и отпечатва числата от 1 до n през 3.
    let n = Number(input[0]);

    for (let i = 1; i <= n; i += 3){
        console.log(i);
    }
}
//numbersNwithStep3(["10"])