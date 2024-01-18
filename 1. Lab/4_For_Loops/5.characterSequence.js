function characterSequence(input){
    let text = input[0];
    //функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред
    // let ch = text[0]     forma de acceder a una letra ; OJO no es masivo  // text.charAt[5] functiona para lo mismo
    //console.log(text.length)  --> nos dice que tiene 7 letras

    for (let i = 0; i < text.length; i++){  // no puedes poner <= text.lenght -> sale undefined /input es -1 ...
        console.log(text[i]);
    }
}
//characterSequence(["ice cream SoftUni"])