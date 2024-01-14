//"You are <firstName> <lastName>, a <age>-years old person from <town>."

function concatenateData(input){
    firstName = input[0]
    lastName = input[1]
    age = input[2]
    town = input[3]
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
concatenateData(["Maria", "Todorova", 30, "Sofia"])