function addNumbers(x, y) {
if (isNaN(x) || isNaN(y)) {
    throw('One or both parameters are not numbers')
}
return(x+y)
}


console.log(addNumbers(55,"66k5"))