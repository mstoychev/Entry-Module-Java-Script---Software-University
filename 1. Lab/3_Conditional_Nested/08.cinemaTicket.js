function cinemaTicket(input){
    let ticketPrice = input[0];
    switch(ticketPrice){
        case "Monday": console.log(12); break;
        case "Tuesday": console.log(12); break;
        case "Wednesday": console.log(14); break;
        case "Thursday": console.log(14); break;
        case "Friday": console.log(12); break;
        case "Saturday": console.log(16); break;
        case "Sunday": console.log(16); break;
    }
}
//cinemaTicket(["Monday"])
//cinemaTicket(["Friday"])
//cinemaTicket(["Sunday"])
