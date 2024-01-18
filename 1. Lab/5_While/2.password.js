function password(input){
    let name = input[0];
    let password = input[1];
    let index = 0;
    let trypass = input[index + 2];
    index++

    while(trypass !== password){
        trypass = input[index];
        index++
    }
    console.log(`Welcome ${name}!`)

}
/*password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])*/
