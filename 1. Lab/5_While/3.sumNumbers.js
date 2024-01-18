function sumNumbers(input) {
    let number = Number(input[0]);
    let index = 0;
    let n = Number(input[index]);
    index++;
    let sum = 0;
    
    while(sum < number){
        n = Number(input[index]);
        index++;
        sum += n
    }
    console.log(sum)

}
/*sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])*/

