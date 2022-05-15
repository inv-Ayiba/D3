function factorial(num){
      return num<0?  -1 :num==0?  1: num * factorial(num-1)
    }
function wily(num){
    first=(factorial(num-1)+1)/(num*num)
    // console.log("1st",first)
    second=first%1
    // console.log("2nd",second)
    return !(second)
}
// // console.log(wily(4))

for (let index = 1; index < 50; index++) {
    const element = wily(index);
    // console.log(index,element)
    element?(console.log(index,element)):p=0
    // // console.log()
    // console.log(factorial(index))
    
}