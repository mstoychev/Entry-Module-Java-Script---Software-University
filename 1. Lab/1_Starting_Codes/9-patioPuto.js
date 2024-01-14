function patioPuto(input){
    metrosCuadrados = Number(input[0])
    precioM2 = metrosCuadrados * 7.61
    discount = precioM2*0.18
    finalPrice = precioM2 - discount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

patioPuto(["550"])