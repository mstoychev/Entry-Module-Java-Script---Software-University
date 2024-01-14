//•	"The architect {името на архитекта} will need {необходими часове} hours to
//complete {брой на проектите} project/s."
function calculateHous(input){
    archName = input[0]
    archProyect = Number(input[1])
    archHours = archProyect * 3
    console.log(`The architect ${archName} will need ${archHours} hours to complete ${archProyect} project/s.`)
}
calculateHous(["George", "4"])