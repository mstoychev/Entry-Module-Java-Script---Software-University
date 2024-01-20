function building(input){
    let floor = input[0];
    let apartmentNumber = input[1];    

    for(let i = floor; i >= 1; i--){
        let concatenateFloor = ""

        for(let j = 0; j < apartmentNumber; j++){
            if (i == floor) {
                concatenateFloor += `L${i}${j} `
            } else if(i % 2 == 0){
                concatenateFloor += `O${i}${j} `
            } else {
                concatenateFloor += `A${i}${j} `               
            }           
        }
        console.log(concatenateFloor)        
    }
}
//building(["4", "4"])