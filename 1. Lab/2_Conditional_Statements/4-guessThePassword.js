function guessThePassword(input){
    let entryPass = input[0]
    if (entryPass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    } else{
        console.log("Wrong password!")
    }
}
//guessThePassword(["s3cr3t!P@ssw0rd"])