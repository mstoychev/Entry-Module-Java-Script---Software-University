function smallShop(input){
    let article = input[0];
    let city = input[1];
    let num = input[2];
    let totalCount = 0;

    switch(city){
        case "Sofia":
            if (article === "coffee"){
                console.log(totalCount = num * 0.5)
            } else if (article === "water"){ 
                console.log(totalCount= num * 0.8)
            } else if (article === "beer") {
                console.log(totalCount= num * 1.2)
            } else if(article === "sweets"){
                console.log(totalCount= num * 1.45)
            } if(article === "peanuts"){
                console.log(totalCount= num * 1.6)
            }; break;
        case "Plovdiv":
            if (article === "coffee"){
                console.log(totalCount = num * 0.4)
            } else if (article === "water"){ 
                console.log(totalCount= num * 0.7)
            } else if (article === "beer") {
                console.log(totalCount= num * 1.15)
            } else if(article === "sweets"){
                console.log(totalCount= num * 1.3)
            } if(article === "peanuts"){
                console.log(totalCount= num * 1.5)
            } ; break;
        case "Varna":
            if (article === "coffee"){
                console.log(totalCount = num * 0.45)
            } else if (article === "water"){ 
                console.log(totalCount= num * 0.7)
            } else if (article === "beer") {
                console.log(totalCount= num * 1.1)
            } else if(article === "sweets"){
                console.log(totalCount= num * 1.35)
            } if(article === "peanuts"){
                console.log(totalCount= num * 1.55)
            }
    }
}
//smallShop(["coffee", "Varna", "2"])
//smallShop(["peanuts", "Plovdiv", "1"])
//smallShop(["beer", "Sofia", "2"])
//smallShop(["water", "Plovdiv", "2"])
//smallShop(["sweets", "Sofia", "2.23"])


