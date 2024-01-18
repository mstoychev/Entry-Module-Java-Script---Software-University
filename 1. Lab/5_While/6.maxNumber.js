function maxNumber(input){
    let index = 0;
    let command = input[index]; // aquí no es número, toma string Aun
    index++

    let maxNumber = Number.MIN_SAFE_INTEGER      // Si pongo cero no funcionará con negativos Por eso usamos método Number.MIN_SAFE_INTEGER

    while(command !== "Stop"){
        let currentNum = Number(command);     // ahora sí valor numérico
        command = input[index]
        index++
        if (maxNumber < currentNum){
            maxNumber = currentNum;
        }       
    }
    console.log(maxNumber)
}
//maxNumber(["100", "99", "80", "70", "Stop"])
//maxNumber(["-1", "-2", "Stop"])

