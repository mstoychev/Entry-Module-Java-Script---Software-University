function sumOfTwoNumbers(input) {
    let startNum = Number(input[0]);
    let finalNum = Number(input[1]);
    let sumNumber = Number(input[2]);
    count = 0;
    let isFound = false;

    for (let i = startNum; i <= finalNum; i++) {        
        for (let j = startNum; j <= finalNum; j++) {
            count++
            if (i + j == sumNumber) {
                isFound = true
                console.log(`Combination N:${count} (${i} + ${j} = ${sumNumber})`);
                break; // solo rompe el ciclo de dentro, para ello tendremos que usar los boleean flags              
            }            
        }
        if (isFound == true){
            break;            //rompe el segundo ciclo
        }
    }

    if(isFound == false){
        console.log(`${count} combinations - neither equals ${sumNumber}`)
    }
}
//sumOfTwoNumbers(["23","24","20"])
