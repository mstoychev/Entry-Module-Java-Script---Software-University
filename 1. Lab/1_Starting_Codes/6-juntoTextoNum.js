function información(input){
    firstName = input[0]
    lastName = input[1]
    age = Number(input[2])
    town = input[3]
    console.log("You are " + firstName + " " + lastName + ", a " + age + "-years old person from " + town + ".")

    // otra opción que lo hacen ellos con el operador ${} y las comillas `
    // console.log(`You are ${firstName} ${lastName}, a       	${age}-years old person from ${town}.`); 


}
información(['Petar', 'Petrov', '24', 'Sofia'])