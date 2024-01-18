function accountBalance(input){
    let index = 0;
    let transference = input[index];
    index ++
    let sum = 0;

    while (transference !== "NoMoreMoney"){
        let amount = Number(transference);
        if (amount < 0){
            console.log("Invalid operation!");
            break;
        }
        sum += amount;    
        console.log(`Increase: ${amount.toFixed(2)}`);
        transference = input[index];
        index++
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
//accountBalance(["120", "45.55", "-150"])