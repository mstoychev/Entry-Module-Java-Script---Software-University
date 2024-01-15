function areaOfFigures(input) {
    let geometric = input[0]
    let side = input[1]
    let side2 = input[2]

    let areaSquare = side*side
    let areaRectangle = side*side2
    let areaCircle = Math.PI*side*side
    let areaTriangle = side*side2 / 2


    if (geometric === "square"){
        console.log(areaSquare.toFixed(3))
    } else if (geometric === "rectangle"){
        console.log(areaRectangle.toFixed(3))
    } else if (geometric === "circle"){
        console.log(areaCircle.toFixed(3))
    } else {
        console.log(areaTriangle.toFixed(3))
    }
}
areaOfFigures(["triangle", "4.5", "20"])


