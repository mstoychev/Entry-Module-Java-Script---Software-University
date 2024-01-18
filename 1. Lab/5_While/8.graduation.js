function graduation(input){
    let nameOfStudent = String(input[0]);
    let index = 0;
    let note = Number(input[index]);
    index++
    let totalScore = 0;
    badGradeCount = 0;
    let isExcluded = false; 

    while(index <= 12){
        note = Number(input[index]);

        if (note < 4){
            badGradeCount ++;
            if (badGradeCount == 2){
                isExcluded = true;
                console.log(`${nameOfStudent} has been excluded at ${index} grade`);
                break;
            }
            continue;        
        }
        index++
        totalScore += note
    }

    if(isExcluded == false){
        console.log(`${nameOfStudent} graduated. Average grade: ${(totalScore/12).toFixed(2)}`)
    }
    
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
//graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])

