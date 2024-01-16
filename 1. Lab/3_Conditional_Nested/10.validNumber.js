function validNumber(input){
    let number = Number(input[0]);
    let isValid = number >= 100 && number <= 200 || number == 0

    if (!isValid){
        console.log("invalid")
    }
}
//validNumber(["75"])
//validNumber(["150"])
//validNumber(["220"])
//validNumber(["199"])
//validNumber(["0"])